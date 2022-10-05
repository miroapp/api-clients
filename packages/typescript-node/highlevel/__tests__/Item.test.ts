import {MiroApi} from '../../api'
import {
  AppCardItem,
  CardItem,
  Connector,
  DocumentItem,
  EmbedItem,
  FrameItem,
  ImageItem,
  Item,
  ShapeItem,
  StickyNoteItem,
  TextItem,
} from '../index'
import {jest} from '@jest/globals'

describe('Item test', () => {
  describe('connectTo', () => {
    const now = new Date().toUTCString()
    it.each([
      [
        'plain number input for endItem',
        [456],
        {
          startItem: {id: '123'},
          endItem: {id: '456'},
        },
      ],
      [
        'object input for endItem',
        [{id: '456'}],
        {
          startItem: {id: '123'},
          endItem: {id: '456'},
        },
      ],
      [
        'object with modifications for endItem',
        [{id: '456', position: {x: '10%', y: '87%'}}],
        {
          startItem: {id: '123'},
          endItem: {id: '456', position: {x: '10%', y: '87%'}},
        },
      ],
      [
        'snapTo modifier for endItem',
        [{id: '456', snapTo: 'top'}],
        {
          startItem: {id: '123'},
          endItem: {id: '456', snapTo: 'top'},
        },
      ],
      [
        'extra options for line',
        [
          456,
          {
            style: {
              color: '#9510ac',
            },
            shape: 'elbowed',
            captions: [{content: now}, {content: 'whoa'}],
          },
        ],
        {
          startItem: {
            id: '123',
          },
          endItem: {
            id: '456',
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

    it.each(['app_card', 'card', 'document', 'embed', 'frame', 'image', 'shape', 'sticky_note', 'text'])(
      'returns a specific item based on a generic one (%s)',
      (type) => {
        const api = new MiroApi('token')
        const item = Item.fromGenericItem(api, 'boardId', {
          id: 123,
          type,
        })

        const typeMap = {
          app_card: AppCardItem,
          card: CardItem,
          document: DocumentItem,
          embed: EmbedItem,
          frame: FrameItem,
          image: ImageItem,
          shape: ShapeItem,
          sticky_note: StickyNoteItem,
          text: TextItem,
        }

        expect(item).toBeInstanceOf(typeMap[type])
        expect(item.type).toBe(type)
      },
    )
  })
})
