import fetch from 'node-fetch'
import {HttpError, Logger, MiroApi as MiroLowlevelApi} from './api'
import {InMemoryStorage, Storage} from './storage'

const defaultBasePath = 'https://api.miro.com'

export class Miro {
  clientId: string
  clientSecret: string
  redirectUrl: string
  storage: Storage
  logger?: (l: any) => void
  httpTimeout?: number
  basePath: string

  /**
   * Initializes the Miro API with the given client id and client secret
   * All options are optional and will fallback to environment variables
   * clientId: MIRO_CLIENT_ID
   * clientSecret: MIRO_CLIENT_SECRET
   * redirectUrl: MIRO_REDIRECT_URL
   * logger: MIRO_DEBUG
   */
  constructor(options?: MiroOptions) {
    const opts = options || {}
    this.clientId = opts.clientId || process.env.MIRO_CLIENT_ID || ''
    this.clientSecret = opts.clientSecret || process.env.MIRO_CLIENT_SECRET || ''
    this.redirectUrl = opts.redirectUrl || process.env.MIRO_REDIRECT_URL || ''
    this.storage = opts.storage || new InMemoryStorage()
    this.logger = opts.logger || (process.env.MIRO_DEBUG ? console.log : undefined)
    this.httpTimeout = opts.httpTimeout
    this.basePath = opts.basePath || defaultBasePath

    if (!this.clientId) {
      throw new Error('miro-api: MIRO_CLIENT_ID or passing options.clientId is required')
    }
    if (!this.clientSecret) {
      throw new Error('miro-api: MIRO_CLIENT_SECRET or passing options.clientSecret is required')
    }
    if (!this.redirectUrl) {
      throw new Error('miro-api: MIRO_REDIRECT_URL or passing options.redirectUrl is required')
    }
    if (this.storage instanceof InMemoryStorage) {
      console.warn('miro-api: Default storage is not recommended, consider using a custom storage implementation')
    }
  }

  /**
   * Returns an instance of the highlevel Miro API for the given user id
   */
  as(userId: ExternalUserId): MiroApi {
    return new MiroApi(async () => await this.getAccessToken(userId), this.basePath, this.logger, this.httpTimeout)
  }

  /**
   * Checks if the given user id already has token stored
   */
  async isAuthorized(userId: ExternalUserId): Promise<boolean> {
    try {
      return !!(await this.getAccessToken(userId))
    } catch (err) {
      return false
    }
  }

  /**
   * Returns a URL that user should be redirected to in order to authorize the application, accepts an optional state argument and a teamId that will be used as a default
   */
  getAuthUrl(state?: string, teamId?: string): string {
    const authorizeUrl = new URL('/oauth/authorize', this.basePath.replace('api.', ''))
    authorizeUrl.search = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      redirect_uri: this.redirectUrl,
      team_id: teamId || '',
      state: state || '',
    }).toString()
    return authorizeUrl.toString()
  }

  /**
   * Parse request to extract authorization code and get access token
   */
  async handleAuthorizationCodeRequest(userId: ExternalUserId, req: Request): Promise<void> {
    const url = `http://${req.headers.host}${req.url}`
    await this.exchangeCodeForAccessToken(userId, url)
  }

  /**
   * Exchanges the authorization code for an access token by calling the token endpoint
   * It will store the token information in storage for later reuse
   */
  async exchangeCodeForAccessToken(userId: ExternalUserId, urlOrCode: string): Promise<string> {
    let code = urlOrCode
    if (urlOrCode.indexOf('?') >= 0) {
      const params = new URLSearchParams(urlOrCode.match(/\?.*/)?.[0])
      const codeInParams = params.get('code')
      if (codeInParams) {
        code = codeInParams
      }
    }
    if (!code) {
      throw new Error('No code provided')
    }
    return await this.getToken(userId, {
      code: code,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUrl,
      grant_type: 'authorization_code',
    })
  }

  /**
   * Exchanges the authorization code for an access token by calling the token endpoint
   * It will store the token information in storage for later reuse
   */
  async revokeToken(userId: ExternalUserId): Promise<void> {
    await this.as(userId).revokeToken()
    await this.storage.set(userId, undefined)
  }

  async getToken(userId: ExternalUserId, params: {[key: string]: string}): Promise<string> {
    const tokenUrl = new URL('/v1/oauth/token', defaultBasePath)
    tokenUrl.search = new URLSearchParams(params).toString()
    const response = await fetch(tokenUrl.toString(), {method: 'post'})

    if (!response.ok) {
      throw new HttpError(response, {}, response.status)
    }

    const body = (await response.json()) as TokenResponse

    this.storage.set(userId, {
      accessToken: body.access_token,
      refreshToken: body.refresh_token,
      tokenExpiresAt: body.expires_in ? new Date(Date.now() + (body.expires_in - 120) * 1000).toISOString() : undefined,
      userId: body.user_id,
    })

    return body.access_token
  }

  private async refreshAccessToken(userId: ExternalUserId, refresh_token: string): Promise<string> {
    return await this.getToken(userId, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refresh_token,
      grant_type: 'refresh_token',
    })
  }

  async getAccessToken(userId: ExternalUserId): Promise<string> {
    const state = await this.storage.get(userId)
    if (!state || !state.accessToken) {
      throw new Error('No access token stored, run exchangeCodeForAccessToken() first')
    }
    if (state.refreshToken && state.tokenExpiresAt && new Date(state.tokenExpiresAt) < new Date()) {
      return this.refreshAccessToken(userId, state.refreshToken)
    }

    return state.accessToken
  }
}

export type ExternalUserId = string | number

interface TokenResponse {
  user_id: string
  scope: string
  expires_in?: number
  team_id: string
  access_token: string
  refresh_token?: string
  token_type: 'bearer'
}

interface Request {
  url?: string | undefined
  headers: {host?: string | undefined}
}

export interface MiroOptions {
  /** App Client id. Defaults to MIRO_CLIENT_ID environment variable */
  clientId?: string

  /** App Client secret. Defaults to MIRO_CLIENT_SECRET environment variable */
  clientSecret?: string

  /** App redirect URL, should match the one configured in the Miro App settings page. Defaults to MIRO_REDIRECT_URL environment variable */
  redirectUrl?: string

  /** Implementation of storage to use for access and refresh tokens */
  storage?: Storage

  /** Function to use as a logger. if MIRO_DEBUG environment variable is set then console.log will be used here */
  logger?: (l: any) => void

  /** Client will abort HTTP requests that last longer than this number of miliseconds. Default is 5000ms. */
  httpTimeout?: number

  /** Base path **/
  basePath?: string
}

import {Api as HighlevelApi} from './highlevel/index'

export class MiroApi extends HighlevelApi {
  constructor(
    accessToken: string | (() => Promise<string>),
    basePath: string = defaultBasePath,
    logger?: Logger,
    httpTimeout?: number,
  ) {
    super(new MiroLowlevelApi(accessToken, basePath, logger, httpTimeout), {})
  }
}

export {MiroApi as MiroLowlevelApi} from './api'

export {
  Organization,
  OrganizationMember,
  Team,
  BoardDataClassification,
  DataClassification,
  TeamMember,
  TeamSettings,
  Board,
  BoardMember,
  Item,
  AppCardItem,
  CardItem,
  DocumentItem,
  EmbedItem,
  FrameItem,
  ImageItem,
  ShapeItem,
  StickyNoteItem,
  TextItem,
  Connector,
  Tag,
} from './highlevel/index'

export default Miro
