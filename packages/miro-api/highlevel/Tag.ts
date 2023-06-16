import {MiroApi} from '../api'
import {hasMoreData} from './helpers'
import {Item} from './index'
import {Tag} from '../model/tag'

/** @hidden */
export abstract class BaseTag extends Tag {
  abstract _api: MiroApi
  abstract boardId: string
  abstract id: string

  /**
   * Retrieves all the items that have the specified tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * Returns an iterator which will automatically paginate and fetch all tagged items
   * @summary Get items by tag
   */
  async *getAllTaggedItems(): AsyncGenerator<Item, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getItemsByTag(this.boardId, this.id.toString(), {
          offset: currentOffset.toString(),
        })
      ).body

      for (const item of response.data || []) {
        yield new Item(this._api, this.boardId, item.id, item)
      }

      if (!hasMoreData(response)) return
      currentOffset += response.data?.length || 0
    }
  }
}
