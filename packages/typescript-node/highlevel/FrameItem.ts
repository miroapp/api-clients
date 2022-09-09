import {FrameItem as ModelFrameItem} from '../model/frameItem'
import {MiroApi} from '../api'
import {Item} from './index'
import type {WidgetTypes} from '../interfaces/WidgetTypes'

type GetItemsParams = {
  limit?: string
  type?: WidgetTypes
  cursor?: string
}

export abstract class FrameItem extends ModelFrameItem {
  abstract _api: MiroApi
  abstract id: number | undefined
  abstract boardId: string | undefined

  async getItems(params?: GetItemsParams) {
    const {body} = await this._api.getItemsWithinFrame(this.boardId || '', this.id?.toString() || '', params)

    if (!body.data) return body

    return {
      ...body,
      data: body.data.map((item) => new Item(this._api, this.boardId, item.id, item)),
    }
  }
}
