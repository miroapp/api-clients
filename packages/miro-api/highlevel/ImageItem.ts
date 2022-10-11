import {ImageUpdateRequest, MiroApi} from '../api'
import {ImageItem} from '../model/imageItem'
import {isNotUrl, WidgetCreateWithBufferRequest} from './Board'
import {ConnectableItem, ConnectTo} from './Item'
import FormData from 'form-data'

type WidgetUpdateWithBufferRequest = Partial<WidgetCreateWithBufferRequest>

export abstract class BaseImageItem extends ImageItem implements ConnectTo {
  abstract _api: MiroApi
  abstract boardId: string
  type: 'image' = 'image'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo

  /** {@inheritDoc api/apis!MiroApi.updateImageItemUsingUrl} */
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
