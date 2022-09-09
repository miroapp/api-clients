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
      }
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

    it('should call the api w/o any params', () => {
      const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

      frameItem.getItems()
      expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
      expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), undefined)
    })
    it('should call the api and pass the cursor param', () => {
      const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

      const lastFetchedItemId = '34093452'
      frameItem.getItems({cursor: lastFetchedItemId})
      expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
      expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), {cursor: lastFetchedItemId})
    })
    it.each(['app_card', 'card', 'document', 'embed', 'frame', 'image', 'shape', 'sticky_note', 'text'] as const)(
      'should call the api and pass the type param (%s)',
      (type) => {
        const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

        frameItem.getItems({type})
        expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
        expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), {type})
      },
    )
    it('should call the api and pass the limit param', () => {
      const {frameItem, getItemsWithinFrameSpy, id, boardId} = setup()

      const limit = '3'
      frameItem.getItems({limit})
      expect(getItemsWithinFrameSpy).toBeCalledTimes(1)
      expect(getItemsWithinFrameSpy).toBeCalledWith(boardId, String(id), {limit})
    })
    it('should return a list of models', async () => {
      const {frameItem, childId} = setup()

      const {data} = await frameItem.getItems()

      expect(data?.[0]).toBeDefined()

      expect(data?.[0]).toBeInstanceOf(Item)
      expect(data?.[0].id).toEqual(childId)
    })
  })
})
