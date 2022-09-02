import {FrameItem as ModelFrameItem} from '../model/frameItem'
import {MiroApi} from '../api'
import {Item} from './index'

export type WidgetTypes =
  | 'app_card'
  | 'card'
  | 'document'
  | 'embed'
  | 'frame'
  | 'image'
  | 'shape'
  | 'sticky_note'
  | 'text'
type Items = {
  limit?: string
  type?: WidgetTypes
  cursor?: string
}

export abstract class FrameItem extends ModelFrameItem {
  abstract _api: MiroApi
  abstract id: number
  abstract boardId: string

  async getItems(params?: Items) {
    const {body} = await this._api.getItemsWithinFrame(this.boardId, String(this.id), params)

    if (!body.data) return body

    return {
      ...body,
      data: body.data.map((item) => new Item(this._api, this.boardId, item.id, item)),
    }
  }
}
