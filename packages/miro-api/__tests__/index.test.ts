import {Miro, MiroOptions} from '../index'
import {InMemoryStorage, State, Storage} from '../storage'
import {Api} from '../highlevel'
import {jest} from '@jest/globals'

describe('Entrypoint test', () => {
  describe('constructor', () => {
    it('sets the correct defaults from env variables', () => {
      process.env.MIRO_CLIENT_ID = 'client_id'
      process.env.MIRO_CLIENT_SECRET = 'client_secret'
      process.env.MIRO_REDIRECT_URL = 'redirect_url'

      const miro = new Miro()
      expect(miro.clientId).toEqual(process.env.MIRO_CLIENT_ID)
      expect(miro.clientSecret).toEqual(process.env.MIRO_CLIENT_SECRET)
      expect(miro.redirectUrl).toEqual(process.env.MIRO_REDIRECT_URL)

      delete process.env.MIRO_CLIENT_ID
      delete process.env.MIRO_CLIENT_SECRET
      delete process.env.MIRO_REDIRECT_URL
    })

    it('warns about the missing environment variables', () => {
      expect(() => new Miro()).toThrowError()
      expect(() => new Miro({clientId: '123'})).toThrowError()
      expect(() => new Miro({clientId: '123', clientSecret: '123'})).toThrowError()
    })

    it('can receive options from the parameters', () => {
      const miro = new Miro({
        clientId: '123',
        clientSecret: '123',
        redirectUrl: '123',
      })
      expect(miro.clientId).toEqual('123')
    })
  })

  describe('getAuthUrl', () => {
    it('returns the correct url', () => {
      expect(testMiro().getAuthUrl()).toEqual(
        'https://miro.com/oauth/authorize?response_type=code&client_id=id&redirect_uri=url&team_id=&state=',
      )
    })

    it('returns the correct url with the state', () => {
      expect(testMiro().getAuthUrl('someState')).toEqual(
        'https://miro.com/oauth/authorize?response_type=code&client_id=id&redirect_uri=url&team_id=&state=someState',
      )
    })

    it('returns the correct url for the team', () => {
      expect(testMiro().getAuthUrl(undefined, 'someTeamId')).toEqual(
        'https://miro.com/oauth/authorize?response_type=code&client_id=id&redirect_uri=url&team_id=someTeamId&state=',
      )
    })
  })

  describe('isAuthorized', () => {
    it('returns the correct values', async () => {
      const userId = 'foo'
      const miro = testMiroWithStored(userId, {
        userId: 'bar',
        accessToken: 'token',
      })
      expect(await miro.isAuthorized(userId)).toBeTruthy()
      expect(await miro.isAuthorized('baz')).toBeFalsy()
    })
  })

  describe('exchangeCodeForAccessToken', () => {
    let storage: Storage
    let miro: Miro
    let userId = '123'

    beforeEach(() => {
      storage = {
        // @ts-ignore
        read: jest.fn(),
        // @ts-ignore
        write: jest.fn(),
      }
      miro = testMiro({storage})
      // @ts-ignore
      miro.getToken = jest.fn()
    })

    it('calls the API with the right code', async () => {
      await miro.handleAuthorizationCodeRequest(userId, {
        headers: {host: 'hello'},
        url: '/some/path?code=code',
      })
      expect(miro.getToken).toBeCalledWith(userId, {
        code: 'code',
        client_id: 'id',
        client_secret: 'secret',
        redirect_uri: 'url',
        grant_type: 'authorization_code',
      })
    })

    it('parses the url to get the code', async () => {
      await miro.exchangeCodeForAccessToken(userId, '/some/path?code=code')
      expect(miro.getToken).toBeCalledWith(userId, {
        code: 'code',
        client_id: 'id',
        client_secret: 'secret',
        redirect_uri: 'url',
        grant_type: 'authorization_code',
      })
    })

    it('passes the code to getToken method', async () => {
      await miro.exchangeCodeForAccessToken(userId, 'code?')
      expect(miro.getToken).toBeCalledWith(userId, {
        code: 'code?',
        client_id: 'id',
        client_secret: 'secret',
        redirect_uri: 'url',
        grant_type: 'authorization_code',
      })
    })

    it('throws if the code is not passed', async () => {
      await expect(() => miro.exchangeCodeForAccessToken(userId, '')).rejects.toThrowError()
    })
  })

  describe('getAccessToken', () => {
    it('should refresh the token if expired', async () => {
      const miro = testMiro({
        storage: {
          get: async () => {
            return {
              userId: '123',
              accessToken: 'access',
              refreshToken: 'refresh',
              tokenExpiresAt: '2022-08-08T08:08:08.000Z',
            }
          },
          set: () => {},
        },
      })
      const userId = '123'
      miro.getToken = jest.fn(async () => 'newToken')
      const response = await miro.getAccessToken(userId)
      expect(miro.getToken).toBeCalledWith(userId, {
        client_id: 'id',
        client_secret: 'secret',
        refresh_token: 'refresh',
        grant_type: 'refresh_token',
      })
      expect(response).toEqual('newToken')
    })
  })

  describe('as', () => {
    it('returns the api instance', () => {
      expect(testMiro().as('123')).toBeInstanceOf(Api)
    })
  })

  describe('revokeToken', () => {
    it('calls the revokeToken method', async () => {
      const userId = '123'
      const miro = testMiroWithStored(userId, {userId, accessToken: 'token'})
      const revokeToken = jest.fn()

      // @ts-expect-error
      miro.as = jest.fn((_: string) => ({revokeToken}))
      await miro.revokeToken(userId)

      expect(revokeToken).toBeCalledTimes(1)
      expect(miro.storage.set).toBeCalledWith(userId, undefined)
    })
  })

  describe('defaultStorage', () => {
    it('reads from a file and writes into a file', async () => {
      const userId = '123'
      const accessToken = 'token'
      const defaultStorage = new InMemoryStorage()
      await defaultStorage.set(userId, {userId, accessToken})
      expect(await defaultStorage.get(userId)).toEqual({userId, accessToken})

      await defaultStorage.set(userId, undefined)
      expect(await defaultStorage.get(userId)).toEqual(undefined)
    })
  })

  function testMiro(opts?: MiroOptions) {
    return new Miro({
      clientId: 'id',
      clientSecret: 'secret',
      redirectUrl: 'url',
      storage: {
        get: async () => undefined,
        set: jest.fn(async () => {}),
      },
      ...opts,
    })
  }

  function testMiroWithStored(userId: string, stored: State) {
    return new Miro({
      clientId: '123',
      clientSecret: '123',
      redirectUrl: '123',
      storage: {
        get: async (id) => (id === userId ? stored : undefined),
        set: jest.fn(async () => {}),
      },
    })
  }
})
