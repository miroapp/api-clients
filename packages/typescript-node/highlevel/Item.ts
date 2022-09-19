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
    interface WidgetItemConstructor {
      new (api: MiroApi, boardId: string, id: number, item: BaseGenericItem): WidgetItem
    }

    let classToUse: WidgetItemConstructor = Item
    switch (item.type) {
      case 'app_card':
        classToUse = AppCardItem
        break
      case 'card':
        classToUse = CardItem
        break
      case 'document':
        classToUse = DocumentItem
        break
      case 'embed':
        classToUse = EmbedItem
        break
      case 'frame':
        classToUse = FrameItem
        break
      case 'image':
        classToUse = ImageItem
        break
      case 'shape':
        classToUse = ShapeItem
        break
      case 'sticky_note':
        classToUse = StickyNoteItem
        break
      case 'text':
        classToUse = TextItem
        break
    }

    return new classToUse(api, boardId, item.id, item)
  }

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
