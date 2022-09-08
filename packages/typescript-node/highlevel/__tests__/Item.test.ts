import {MiroApi} from '../../api'
import {Connector, Item} from '../index'
import {jest} from '@jest/globals'


describe('Item test', () => {
  describe('connectTo', () => {
    it('calls the api with expected parameters', async () => {
      const api = new MiroApi('token')
      api.createConnector = jest.fn(async () => ({body: {}, response: {} as any}))

      const startItemId = 123
      const endItemId = 456

      const item = new Item(api, 'boardId', startItemId, {})
      const connector = await item.connectTo(endItemId)

      expect(api.createConnector).toBeCalledWith('boardId', {
        startItem: {id: startItemId.toString()},
        endItem: {id: endItemId.toString()},
      })

      expect(connector).toBeInstanceOf(Connector)
    })
  })
})
