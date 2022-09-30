import {FrameItem, Item} from '../index'
import {MiroApi} from '../../api'
import {jest} from '@jest/globals'

describe('FrameItem', () => {
  describe('getItems', () => {
    const setup = () => {
      const api = new MiroApi('token')
      const id = 123
      const boardId = '456'
      const childId = 789
      const item = {
        boardId,
        id: childId,
      } as Item
      api.getItemsWithinFrame = jest.fn(async () => ({
        response: {} as any,
        body: {
          data: [item],
        },
      }))

      const getItemsWithinFrameSpy = jest.spyOn(api, 'getItemsWithinFrame')

      return {
        frameItem: new FrameItem(api, boardId, id, {}),
        getItemsWithinFrameSpy,
        id,
        boardId,
        childId,
      }
    }

    it('should call the api w/o any params', async () => {
      const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

      const itemIterator = frameItem.getAllItems()
      await itemIterator.next()

      expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
      expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), {cursor: undefined})
    })

    it.each(['app_card', 'card', 'document', 'embed', 'frame', 'image', 'shape', 'sticky_note', 'text'] as const)(
      'should call the api and pass the type param (%s)',
      async (type) => {
        const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

        const itemIterator = frameItem.getAllItems({type})
        await itemIterator.next()

        expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
        expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), {type})
      },
    )
    it('should return the models', async () => {
      const {frameItem, childId} = setup()

      // const {data} = await frameItem.getItems()

      const itemIterator = frameItem.getAllItems()
      const item = (await itemIterator.next()).value

      expect(item).toBeDefined()

      expect(item).toBeInstanceOf(Item)
      expect(item && item.id).toEqual(childId)
    })
  })
})
