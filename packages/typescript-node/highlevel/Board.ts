import {Board as BaseBoard} from '../model/board'
import {Item} from './index'
import {GenericItemCursorPaged, MiroApi} from '../api'

export abstract class Board extends BaseBoard {
  abstract _api: MiroApi
  abstract _headParams: [string]

  async *getAllItems(query?: Omit<Parameters<MiroApi['getItems']>[1], 'cursor'>): AsyncGenerator<Item, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: GenericItemCursorPaged = (
        await this._api.getItems(this._headParams[0], {
          ...query,
          cursor,
        })
      ).body

      for (const item of response.data || []) {
        yield new Item(this._api, [this._headParams[0], `${item.id}`], item)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }
}
