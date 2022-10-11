import {MiroApi} from '../../api'
import {Board} from '../index'
import {BaseAppCardItem} from '../AppCardItem'
import {jest} from '@jest/globals'

describe('Board', () => {
  const setup = () => {
    const api = new MiroApi('token')
    const getSpecificItemSpy = jest.spyOn(api, 'getSpecificItem')
    const getBoardMembersSpy = jest.spyOn(api, 'getBoardMembers')
    const getTagsFromBoard = jest.spyOn(api, 'getTagsFromBoard')

    const type = 'app_card'
    const itemId = '123'
    const boardId = '456'
    const board = new Board(api, boardId, {})

    return {
      board,
      type,
      getSpecificItemSpy,
      getBoardMembersSpy,
      getTagsFromBoard,
      boardId,
      itemId,
    }
  }

  describe('getItem', () => {
    it('should call the getSpecificItem api method', async () => {
      const {getSpecificItemSpy, type, board, boardId, itemId} = setup()
      // @ts-ignore
      getSpecificItemSpy.mockResolvedValueOnce({response: {}, body: {id: itemId, type}})

      const responseItem = await board.getItem(itemId)
      expect(getSpecificItemSpy).toHaveBeenCalledTimes(1)
      expect(getSpecificItemSpy).toHaveBeenCalledWith(boardId, itemId)

      expect(responseItem).toBeInstanceOf(BaseAppCardItem)
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

  describe('getAllMembers', () => {
    it('should call the getBoardMembers method', async () => {
      const {getBoardMembersSpy, board} = setup()
      const memberId = 123
      getBoardMembersSpy.mockResolvedValue({
        response: {} as any,
        body: {
          data: [
            {
              id: memberId,
              name: 'Foo Bar',
              type: 'board_member',
            },
          ],
          total: 100,
        },
      })

      const iterator = board.getAllMembers()
      const member = (await iterator.next()).value

      if (!member) {
        throw new Error('Member Expected')
      }

      expect(getBoardMembersSpy).toBeCalledTimes(1)
      expect(member.id).toBe(memberId)

      await iterator.next()
      expect(getBoardMembersSpy).toBeCalledTimes(2)
    })
  })

  describe('getAllTags', () => {
    it('should call the getTagsFromBoard method', async () => {
      const {getTagsFromBoard, board} = setup()
      const tagId = 123
      getTagsFromBoard.mockResolvedValue({
        response: {} as any,
        body: {
          data: [
            {
              id: tagId,
              type: 'board_member',
              title: 'A tag',
              fillColor: '#B4DA55',
            },
          ],
          total: 100,
        },
      })

      const iterator = board.getAllTags()
      const member = (await iterator.next()).value

      if (!member) {
        throw new Error('Member Expected')
      }

      expect(getTagsFromBoard).toBeCalledTimes(1)
      expect(member.id).toBe(tagId)

      await iterator.next()
      expect(getTagsFromBoard).toBeCalledTimes(2)
    })
  })
})
