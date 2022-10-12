import {Board} from '../model/board'
import {BoardMember, Connector, DocumentItem, ImageItem, Item, Tag} from './index'
import {ImageItem as ImageResponse} from '../model/imageItem'
import {
  BoardMembersPagedResponse,
  GenericItem,
  ConnectorsCursorPaged,
  GenericItemCursorPaged,
  MiroApi,
  ImageCreateRequest,
  DocumentCreateRequest,
  PositionChange,
  FixedRatioGeometry,
  Parent,
} from '../api'
import FormData from 'form-data'
import {WidgetItem} from './Item'
import {hasMoreData} from './helpers'

export interface WidgetCreateWithBufferRequest {
  data: {
    title?: string
    data: Buffer | ReadableStream
  }
  position?: PositionChange
  geometry?: FixedRatioGeometry
  parent?: Parent
}

export function isNotUrl(r: Partial<WidgetCreateWithBufferRequest> | {data?: {}}): r is WidgetCreateWithBufferRequest {
  return !(r.data && 'url' in r.data)
}

/** @hidden */
export abstract class BaseBoard extends Board {
  abstract _api: MiroApi

  /**
   * Retrieves a list of items for a specific board. You can retrieve all items on the board, or a list of specific types of items by specifying URL query parameter values.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * Returns an iterator which will automatically paginate and fetch all available items
   * @summary Get items on board
   */
  async *getAllItems(query?: Omit<Parameters<MiroApi['getItems']>[1], 'cursor'>): AsyncGenerator<WidgetItem, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: GenericItemCursorPaged = (
        await this._api.getItems(this.id, {
          ...query,
          cursor,
        })
      ).body

      for (const item of response.data || []) {
        yield Item.fromGenericItem(this._api, this.id, item)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }

  /**
   * Get all members on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

   * Returns an iterator which will automatically paginate and fetch all available members
   * @summary Get all board members
   */
  async *getAllMembers(): AsyncGenerator<BoardMember, void> {
    let currentOffset = 0
    while (true) {
      const response: BoardMembersPagedResponse = (
        await this._api.getBoardMembers(this.id, {
          offset: currentOffset.toString(),
        })
      ).body

      for (const item of response.data || []) {
        yield new BoardMember(this._api, this.id, item.id, item)
      }

      if (!hasMoreData(response)) return
      currentOffset += response.data?.length || 0
    }
  }

  /**
   * Retrieves all the tags from the specified board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   *
   * Returns an iterator which will automatically paginate and fetch all available tags
   * @summary Get tags from board
   */
  async *getAllTags(): AsyncGenerator<Tag, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getTagsFromBoard(this.id, {
          offset: currentOffset.toString(),
        })
      ).body

      for (const item of response.data || []) {
        yield new Tag(this._api, this.id, item.id, item)
      }

      if (!hasMoreData(response)) return
      currentOffset += response.data?.length || 0
    }
  }

  /**
   * Retrieves all connectors for a specific board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * Returns an iterator which will automatically paginate and fetch all available tags
   */
  async *getAllConnectors(): AsyncGenerator<Connector, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: ConnectorsCursorPaged = (
        await this._api.getConnectors(this.id, {
          cursor,
        })
      ).body

      for (const connector of response.data || []) {
        yield new Connector(this._api, this.id, connector.id, connector)
      }

      cursor = response.cursor
      const size = response.data?.length || 0
      const total = response.total || 0
      if (!total || !size) return
      if (!cursor) return
    }
  }

  /**
   * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific item on board
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getItem(itemId: string): Promise<WidgetItem> {
    const response = await this._api.getSpecificItem(this.id, itemId)

    const item: GenericItem = response.body

    return Item.fromGenericItem(this._api, this.id, item)
  }

  /**
   * Adds an image item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   *
   * This method can be used to create an image item with a new URL or from an image file.
   * @summary Create image item
   * @param request If request.data.url is set then the URL will be used to create an image otherwise contents of a request.data.data will be uploaded and used to create an image
   */
  async createImageItem(request: WidgetCreateWithBufferRequest | ImageCreateRequest): Promise<ImageItem> {
    const result = isNotUrl(request)
      ? ((await this.fileUploadRequest('images', request)) as ImageResponse)
      : (await this._api.createImageItemUsingUrl(this.id.toString(), request)).body
    return new ImageItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a document item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   *
   * This method can be used to create a document item with a new URL or from a document file.
   * @summary Create document item
   * @param request If request.data.url is set then the URL will be used to create a document otherwise contents of a request.data.data will be uploaded and used to create a document
   */
  async createDocumentItem(request: DocumentCreateRequest | WidgetCreateWithBufferRequest): Promise<DocumentItem> {
    const result = isNotUrl(request)
      ? ((await this.fileUploadRequest('documents', request)) as ImageResponse)
      : (await this._api.createDocumentItemUsingUrl(this.id.toString(), request)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** @hidden */
  async fileUploadRequest(type: 'images' | 'documents', request: WidgetCreateWithBufferRequest) {
    const body = new FormData()
    body.append('resource', request.data.data, `filename.${type === 'images' ? 'png' : 'pdf'}`)
    body.append(
      'data',
      JSON.stringify({
        title: request.data.title,
        geometry: request.geometry,
        position: request.position,
      }),
    )
    return (await this._api.call('POST', `/v2/boards/${this.id}/${type}`, body)).body
  }
}
