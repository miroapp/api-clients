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
   * Get all items on the board
   * Returns an iterator which will automatically paginate and fetch all available items
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
   * Get all members on the board
   * Returns an iterator which will automatically paginate and fetch all available members
   */
  async *getAllMembers(
    query?: Omit<Parameters<MiroApi['getBoardMembers']>[1], 'offset'>,
  ): AsyncGenerator<BoardMember, void> {
    let currentOffset = 0
    while (true) {
      const response: BoardMembersPagedResponse = (
        await this._api.getBoardMembers(this.id, {
          ...query,
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
   * Get all tags on the board
   * Returns an iterator which will automatically paginate and fetch all available tags
   */
  async *getAllTags(query?: Omit<Parameters<MiroApi['getTagsFromBoard']>[1], 'offset'>): AsyncGenerator<Tag, void> {
    let currentOffset = 0
    while (true) {
      const response = (
        await this._api.getTagsFromBoard(this.id, {
          ...query,
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
   * Get all connectors on the board
   * Returns an iterator which will automatically paginate and fetch all available tags
   */
  async *getAllConnectors(
    query?: Omit<Parameters<MiroApi['getConnectors']>[1], 'offset'>,
  ): AsyncGenerator<Connector, void> {
    let cursor: string | undefined = undefined
    while (true) {
      const response: ConnectorsCursorPaged = (
        await this._api.getConnectors(this.id, {
          ...query,
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

  /** {@inheritDoc api/apis!MiroApi.getSpecificItem} */
  async getItem(itemId: string): Promise<WidgetItem> {
    const response = await this._api.getSpecificItem(this.id, itemId)

    const item: GenericItem = response.body

    return Item.fromGenericItem(this._api, this.id, item)
  }

  /** {@inheritDoc api/apis!MiroApi.createImageItemUsingUrl} */
  async createImageItem(request: WidgetCreateWithBufferRequest | ImageCreateRequest): Promise<ImageItem> {
    const result = isNotUrl(request)
      ? ((await this.fileUploadRequest('images', request)) as ImageResponse)
      : (await this._api.createImageItemUsingUrl(this.id.toString(), request)).body
    return new ImageItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createDocumentItemUsingUrl} */
  async createDocumentItem(request: DocumentCreateRequest | WidgetCreateWithBufferRequest): Promise<DocumentItem> {
    const result = isNotUrl(request)
      ? ((await this.fileUploadRequest('documents', request)) as ImageResponse)
      : (await this._api.createDocumentItemUsingUrl(this.id.toString(), request)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** @private */
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
