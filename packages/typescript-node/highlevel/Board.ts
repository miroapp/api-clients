import {Board as BaseBoard} from '../model/board'
import {BoardMember, Item} from './index'
import {BoardMembersPagedResponse, GenericItem, GenericItemCursorPaged, MiroApi} from '../api'

export abstract class Board extends BaseBoard {
  abstract _api: MiroApi

  /**
   * Get all items on the board
   * Returns an iterator which will automatically paginate and fetch all available items
   */
  async *getAllItems(query?: Omit<Parameters<MiroApi['getItems']>[1], 'cursor'>): AsyncGenerator<Item, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: GenericItemCursorPaged = (
        await this._api.getItems(this.id, {
          ...query,
          cursor,
        })
      ).body

      for (const item of response.data || []) {
        yield new Item(this._api, this.id, item.id, item)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }

  /**
   * Get all members on the board
   * Returns an iterator which will automatically paginate and fetch all available members
   */
  async *getAllMembers(
    query?: Omit<Parameters<MiroApi['getBoardMembers']>[1], 'offset'>,
  ): AsyncGenerator<BoardMember, void> {
    let currentOffset = 0
    while (true) {
      const response: BoardMembersPagedResponse = (
        await this._api.getBoardMembers(this.id, {
          ...query,
          offset: currentOffset.toString(),
        })
      ).body

      for (const item of response.data || []) {
        yield new BoardMember(this._api, this.id, item.id, item)
      }

      const responseOffset = response.offset || 0
      const size = response.data?.length || 0
      const total = response.total || 0

      if (!total || !size) return
      if (responseOffset + size >= total) return

      currentOffset += size
    }
  }

  async getItem(itemId: string): Promise<Item> {
    const response = await this._api.getSpecificItem(this.id, itemId)

    const item: GenericItem = response.body

    return new Item(this._api, this.id, item.id, item)
  }
}
