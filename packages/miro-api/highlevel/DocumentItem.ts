import {DocumentUpdateRequest, MiroApi} from '../api'
import {DocumentItem} from '../model/documentItem'
import {isNotUrl, WidgetCreateWithBufferRequest} from './Board'
import {ConnectableItem, ConnectTo} from './Item'
import FormData from 'form-data'

type WidgetUpdateWithBufferRequest = Partial<WidgetCreateWithBufferRequest>

export abstract class BaseDocumentItem extends DocumentItem implements ConnectTo {
  abstract _api: MiroApi
  abstract boardId: string
  type: 'document' = 'document'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo

  /** {@inheritDoc api/apis!MiroApi.updateImageItemUsingUrl} */
  async update(request: DocumentUpdateRequest | WidgetUpdateWithBufferRequest): Promise<void> {
    if (isNotUrl(request)) {
      const body = new FormData()
      body.append('resource', request.data.data, 'filename.pdf')
      body.append(
        'data',
        JSON.stringify({
          title: request.data.title,
          geometry: request.geometry,
          position: request.position,
        }),
      )
      await this._api.call('PATCH', `/v2/boards/${this.boardId}/documents/${this.id}`, body)
      return
    }
    await this._api.updateImageItemUsingUrl(this.boardId.toString(), this.id.toString(), request)
  }
}
