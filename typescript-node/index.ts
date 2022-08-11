import { RequestListener } from 'http'
import fetch from 'node-fetch'
import {HttpError, MiroApi, MiroEndpoints} from './api'

const defaultBasePath = 'https://api.miro.com'

export interface State {
    userId: string,
    accessToken: string,
    refreshToken?: string,
    tokenExpiresAt?: string,
}

type Awaitable<T> = Promise<T> | T

export interface Storage {
    read(): Promise<State|undefined>
    write(state: State): Awaitable<void>
}

interface TokenResponse {
    user_id: string,
    scope: string,
    expires_in?: number,
    team_id: string,
    access_token: string,
    refresh_token?: string,
    token_type: 'bearer'
}

export default class MiroAuth {
    clientId: string;
    clientSecret: string;
    redirectUrl: string;
    storage: Storage;
    teamId?: string;
    api: MiroEndpoints;

    constructor(clientId: string, clientSecret: string, redirectUrl: string, storage: Storage, teamId?: string) {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.redirectUrl = redirectUrl
        this.storage = storage
        this.teamId = teamId
        this.api = MiroApi(async () => await this.getAccessToken())
    }

    getAuthUrl(state?: string): string {
        const authorizeUrl = new URL('/oauth/authorize', defaultBasePath.replace('api.', ''))
        authorizeUrl.search = new URLSearchParams({
            response_type: 'code',
            client_id: this.clientId,
            redirect_uri: this.redirectUrl,
            team_id: this.teamId || '',
            state: state || ''
        }).toString()
        return authorizeUrl.toString()
    }

    middleware(middleware: RequestListener): RequestListener {
        return async (req, res) => {
            try {
                await this.exchangeCodeForAccessToken(`http://${req.headers['host']}${req.url}`)
            } finally {
                return middleware(req, res)
            }
        }
    }

    private async getToken(params: {[key: string]: string}): Promise<string> {

        const tokenUrl = new URL('/v1/oauth/token', defaultBasePath)
        tokenUrl.search = new URLSearchParams(params).toString()
        const response = await fetch(tokenUrl.toString(), {method: 'post'})

        console.log(response)

        if (!response.ok) {
            throw new HttpError(response, {}, response.status)
        }

        const body: TokenResponse = await response.json()

        console.log(response.body)

        this.storage.write({
            accessToken: body.access_token,
            refreshToken: body.refresh_token,
            tokenExpiresAt: body.expires_in ? new Date(Date.now() + (body.expires_in - 120) * 1000).toISOString() : undefined,
            userId: body.user_id
        })

        return body.access_token
    }

    async exchangeCodeForAccessToken(urlOrCode: string): Promise<string> {
        let code = urlOrCode
        try {
            const url = new URL(urlOrCode)
            console.log(url)
            code = url.searchParams.get('code') || ''
        } catch (err) {
            // can't parse url, assume code is passed as argument
        }
        if (!code) {
            throw new Error('No code provided')
        }
        return await this.getToken({
            code: code,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUrl,
            grant_type: 'authorization_code'
        })
    }

    private async refreshAccessToken(refresh_token: string): Promise<string> {
        return await this.getToken({
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refresh_token,
            grant_type: 'refresh_token'
        })
    }

    private async getAccessToken (): Promise<string> {
        const state = await this.storage.read()
        if (!state || !state.accessToken) {
            throw new Error('No access token stored, run exchangeCodeForAccessToken() first')
        }
        if (state.refreshToken && state.tokenExpiresAt && new Date(state.tokenExpiresAt) < new Date()) {
            return this.refreshAccessToken(state.refreshToken)
        }

        return state.accessToken
    }
}
