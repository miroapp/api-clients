import {MiroApi} from '../../api'
import {Tag, Item} from '../index'
import {jest} from '@jest/globals'

describe('Tag', () => {
  const setup = () => {
    const api = new MiroApi('token')
    const getItemsByTag = jest.spyOn(api, 'getItemsByTag')

    const tagId = 123
    const boardId = '456'
    const tag = new Tag(api, boardId, tagId, {})

    return {
      tag,
      getItemsByTag,
      boardId,
    }
  }

  describe('getAllTaggedItems', () => {
    it('should call getItemsByTag method', async () => {
      const {tag, getItemsByTag} = setup()

      const itemId = 123
      getItemsByTag.mockResolvedValue({
        response: {} as any,
        body: {
          data: [
            {
              id: itemId,
            } as Item,
          ],
          total: 100,
        },
      })

      const iterator = tag.getAllTaggedItems()
      const item = (await iterator.next()).value

      if (!item) {
        throw new Error('Item Expected')
      }

      expect(getItemsByTag).toBeCalledTimes(1)
      expect(item.id).toBe(itemId)

      await iterator.next()
      expect(getItemsByTag).toBeCalledTimes(2)
    })
  })
})
