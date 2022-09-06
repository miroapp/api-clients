import {Board as BaseBoard} from '../model/board'
import {Item} from './index'
import {GenericItem, GenericItemCursorPaged, MiroApi} from '../api'

export abstract class Board extends BaseBoard {
  abstract _api: MiroApi

  async *getAllItems(query?: Omit<Parameters<MiroApi['getItems']>[1], 'cursor'>): AsyncGenerator<Item, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: GenericItemCursorPaged = (
        await this._api.getItems(this.id?.toString() || '', {
          ...query,
          cursor,
        })
      ).body

      for (const item of response.data || []) {
        yield new Item(this._api, this.id?.toString() || '', item.id, item)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }

  async getItem(itemId: string): Promise<Item> {
    let response;
    try {
      response = await this._api.getSpecificItem(this.id?.toString() || '', itemId)
    } catch (e) {
      throw e
    }
    const item: GenericItem = response.body

    return new Item(this._api, this.id?.toString() || '', item.id, item);

  }
}
