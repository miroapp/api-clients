import {MiroApi} from '../../api'
import {Connector, Item} from '../index'
import {jest} from '@jest/globals'

describe('Item test', () => {
  describe('connectTo', () => {
    const now = new Date().toUTCString()
    it.each([
      [
        'plain number input for endpoint',
        [456],
        {
          startItem: {id: '123'},
          endItem: {id: '456'},
        },
      ],
      [
        'object input for endPoint',
        [{id: '456', snapTo: 'top'}],
        {
          startItem: {id: '123'},
          endItem: {id: '456', snapTo: 'top'},
        },
      ],
      [
        'object with modifications for endpoint',
        [{id: '456', position: {x: '10%', y: '87%'}}],
        {
          startItem: {id: '123'},
          endItem: {id: '456', position: {x: '10%', y: '87%'}},
        },
      ],
      [
        'snapTo modifier for endpoint',
        [456, {snapTo: 'top'}],
        {
          startItem: {id: '123', snapTo: 'top'},
          endItem: {id: '456'},
        },
      ],
      [
        'extra options for line',
        [
          456,
          {},
          {
            style: {
              color: '#9510ac',
            },
            shape: 'elbowed',
            captions: [{content: now}, {content: 'whoa'}],
          },
        ],
        {
          endItem: {id: '456'},
          startItem: {
            id: '123',
          },
          captions: [{content: now}, {content: 'whoa'}],
          shape: 'elbowed',
          style: {
            color: '#9510ac',
          },
        },
      ],
    ])('calls the api with expected parameters (%s)', async (_, input: any[], expectedArguments) => {
      const api = new MiroApi('token')
      api.createConnector = jest.fn(async () => ({
        body: {id: '789'},
        response: {} as any,
      }))

      const startItemId = 123

      const item = new Item(api, 'boardId', startItemId, {})
      // @ts-ignore
      const connector = await item.connectTo(...input)

      expect(api.createConnector).toBeCalledWith('boardId', expectedArguments)

      expect(connector).toBeInstanceOf(Connector)
    })
  })
})
