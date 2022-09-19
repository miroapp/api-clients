import {MiroApi} from '../../api'
import {Connector, Api} from '../index'
import {jest} from '@jest/globals'

describe('Api test', () => {
  describe('revokeToken', () => {
    it('calls revokeToken with string token', async () => {
      const token = 'token'
      const api = new MiroApi(token)
      api.revokeToken = jest.fn(async () => ({body: {}, response: {} as any}))

      const highlevelApi = new Api(api, {})
      await highlevelApi.revokeToken()

      expect(api.revokeToken).toBeCalledWith(token)
    })

    it('calls revokeToken with function token', async () => {
      const token = 'token'
      const tokenProvider = async () => token
      const api = new MiroApi(tokenProvider)
      api.revokeToken = jest.fn(async () => ({body: {}, response: {} as any}))

      const highlevelApi = new Api(api, {})
      await highlevelApi.revokeToken()

      expect(api.revokeToken).toBeCalledWith(token)
    })
  })
})
