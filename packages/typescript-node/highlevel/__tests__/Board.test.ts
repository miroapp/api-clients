import {MiroApi} from '../../api'
import {Board} from '../index'
import {Item} from '../Item'
import {jest} from '@jest/globals'

describe('Board', () => {
  describe('getItem', () => {
    const setup = () => {
      const api = new MiroApi('token')
      const getSpecificItemSpy = jest.spyOn(api, 'getSpecificItem')

      const type = 'app_card'
      const itemId = '123'
      const boardId = '456'
      const board = new Board(api, boardId, {})

      return {
        board,
        type,
        getSpecificItemSpy,
        boardId,
        itemId,
      }
    }
    it('should call the getSpecificItem api method', async () => {
      const {getSpecificItemSpy, type, board, boardId, itemId} = setup()
      // @ts-ignore
      getSpecificItemSpy.mockResolvedValueOnce({response: {}, body: {id: itemId, type}})

      const responseItem = await board.getItem(itemId)
      expect(getSpecificItemSpy).toHaveBeenCalledTimes(1)
      expect(getSpecificItemSpy).toHaveBeenCalledWith(boardId, itemId)

      expect(responseItem).toBeInstanceOf(Item)
      expect(responseItem.type).toEqual(type)
    })

    it('should throw the api error when something is wrong', async () => {
      const {getSpecificItemSpy, board, itemId} = setup()
      const error = new Error('expected error for test')
      getSpecificItemSpy.mockRejectedValueOnce(error)

      try {
        await board.getItem(itemId)
      } catch (e) {
        expect(e).toBe(error)
      }
    })
  })
})
