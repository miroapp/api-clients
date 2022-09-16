import {MiroApi} from '../api'
import {Item} from './index'

export abstract class Tag {
  abstract _api: MiroApi
  abstract boardId: string
  abstract id: number

  /**
   * Get all items tagged with this tag
   * Returns an iterator which will automatically paginate and fetch all tagged items
   */
  async *getAllTaggedItems(
    query?: Omit<Parameters<MiroApi['getItemsByTag']>[1], 'offset'>,
  ): AsyncGenerator<Item, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getItemsByTag(this.boardId, this.id.toString(), {
          ...query,
          offset: currentOffset.toString(),
        })
      ).body

      for (const item of response.data || []) {
        yield new Item(this._api, this.boardId, item.id, item)
      }

      const responseOffset = response.offset || 0
      const size = response.data?.length || 0
      const total = response.total || 0

      if (!total || !size) return
      if (responseOffset + size >= total) return

      currentOffset += size
    }
  }
}
