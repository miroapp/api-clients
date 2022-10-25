import {ImageUpdateRequest, MiroApi} from '../api'
import {ImageItem} from '../model/imageItem'
import {isNotUrl, WidgetCreateWithBufferRequest} from './Board'
import {ConnectableItem, ConnectTo} from './Item'
import FormData = require('form-data')

type WidgetUpdateWithBufferRequest = Partial<WidgetCreateWithBufferRequest>

export abstract class BaseImageItem extends ImageItem implements ConnectTo {
  abstract _api: MiroApi
  abstract boardId: string
  type: 'image' = 'image'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo

  /**
   * Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   *
   * This method can be used to update the image item with a new URL or from an image file.
   *
   * @summary Update image item
   * @param request If request.data.url is set then the URL will be used to create an image otherwise contents of a request.data.data will be uploaded and used to create an image
   */
  async update(request: ImageUpdateRequest | WidgetUpdateWithBufferRequest): Promise<void> {
    if (isNotUrl(request)) {
      const body = new FormData()
      body.append('resource', request.data.data, 'filename.png')
      body.append(
        'data',
        JSON.stringify({
          title: request.data.title,
          geometry: request.geometry,
          position: request.position,
        }),
      )
      await this._api.call('PATCH', `/v2/boards/${this.boardId}/images/${this.id}`, body)
      return
    }
    await this._api.updateImageItemUsingUrl(this.boardId.toString(), this.id.toString(), request)
  }
}
