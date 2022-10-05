import type {ConnectorCreationData} from '@mirohq/miro-node/model/connectorCreationData'
import type {ItemConnectionCreationData} from '@mirohq/miro-node/model/itemConnectionCreationData'
import {GenericItem as BaseGenericItem} from '../model/genericItem'
import {MiroApi} from '../api'

import {
  Connector,
  AppCardItem,
  CardItem,
  DocumentItem,
  EmbedItem,
  FrameItem,
  ImageItem,
  ShapeItem,
  StickyNoteItem,
  TextItem,
  Item,
} from '.'

export type WidgetItem =
  | Item
  | AppCardItem
  | CardItem
  | DocumentItem
  | EmbedItem
  | FrameItem
  | ImageItem
  | ShapeItem
  | StickyNoteItem
  | TextItem

export interface ConnectTo {
  /**
   * Create a new connector between the current item and some other item
   * @param {string | number | Object} endItem Item that the new connector will connect to
   * @param {Object=} connectorCreationData
   * @return {Promise}
   */
  connectTo(
    endItem: string | number | ItemConnectionCreationData,
    connectorCreationData?: ConnectorCreationData,
  ): Promise<Connector>
}

/** @hidden */
export abstract class ConnectableItem implements ConnectTo {
  abstract _api: MiroApi
  abstract boardId: string
  abstract id: number

  async connectTo(
    endItem: string | number | ItemConnectionCreationData,
    connectorCreationData?: ConnectorCreationData,
  ): Promise<Connector> {
    const connector = (
      await this._api.createConnector(this.boardId, {
        startItem: {
          ...(connectorCreationData?.startItem || {}),
          id: this.id.toString(),
        },
        ...connectorCreationData,
        endItem:
          typeof endItem === 'object'
            ? endItem
            : {
                id: endItem.toString(),
              },
      })
    ).body
    return new Connector(this._api, this.boardId, connector.id, connector)
  }
}

export abstract class GenericItem extends BaseGenericItem implements ConnectTo {
  static fromGenericItem(api: MiroApi, boardId: string, item: BaseGenericItem): WidgetItem {
    switch (item.type) {
      case 'app_card':
        return new AppCardItem(api, boardId, item.id, item)
      case 'card':
        return new CardItem(api, boardId, item.id, item)
      case 'document':
        return new DocumentItem(api, boardId, item.id, item)
      case 'embed':
        return new EmbedItem(api, boardId, item.id, item)
      case 'frame':
        return new FrameItem(api, boardId, item.id, item)
      case 'image':
        return new ImageItem(api, boardId, item.id, item)
      case 'shape':
        return new ShapeItem(api, boardId, item.id, item)
      case 'sticky_note':
        return new StickyNoteItem(api, boardId, item.id, item)
      case 'text':
        return new TextItem(api, boardId, item.id, item)
      default:
        return new Item(api, boardId, item.id, item)
    }
  }

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
