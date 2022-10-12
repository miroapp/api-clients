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

  /**
   * Updates a document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   *
   * This method can be used to update the document item with a new URL or from a document file.
   *
   * @summary Update document item
   * @param request If request.data.url is set then the URL will be used to create a document otherwise contents of a request.data.data will be uploaded and used to create a document
   */
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
    await this._api.updateDocumentItemUsingUrl(this.boardId.toString(), this.id.toString(), request)
  }
}
