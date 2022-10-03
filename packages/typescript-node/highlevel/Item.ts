import type {ConnectorCreationData} from '@mirohq/miro-node/model/connectorCreationData'
import type {ItemConnectionCreationData} from '@mirohq/miro-node/model/itemConnectionCreationData'
import {GenericItem} from '../model/genericItem'
import {MiroApi} from '../api'
import {Connector} from '.'

/** @hidden */
export abstract class Item extends GenericItem {
  abstract _api: MiroApi
  abstract boardId: string

  /**
   * Create a new connector between the current item and some other item
   * @param {string | number | Object} endItem Item that the new connector will connect to
   * @param {Object=} connectorCreationData
   * @return {Promise}
   */
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
