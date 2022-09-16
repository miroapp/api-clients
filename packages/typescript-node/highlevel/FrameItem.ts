import {FrameItem as ModelFrameItem} from '../model/frameItem'
import {GenericItemCursorPaged, MiroApi} from '../api'
import {Item} from './index'
import {AnyItem} from './Item'

/** @hidden */
export abstract class FrameItem extends ModelFrameItem {
  abstract _api: MiroApi
  abstract id: number
  abstract boardId: string

  /**
   * Get all items in the frame
   * Returns an iterator which will automatically paginate and fetch all available items
   */
  async *getAllItems(
    query?: Omit<Parameters<MiroApi['getItemsWithinFrame']>[2], 'cursor'>,
  ): AsyncGenerator<AnyItem, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: GenericItemCursorPaged = (
        await this._api.getItemsWithinFrame(this.boardId, this.id.toString(), {
          ...query,
          cursor,
        })
      ).body

      for (const item of response.data || []) {
        yield Item.fromGenericItem(this._api, this.boardId, item)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }
}
