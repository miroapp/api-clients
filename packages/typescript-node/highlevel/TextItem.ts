import {TextItem as BaseTextItem} from '../model/textItem'
import {MiroApi} from '../api'
import {Connector} from '.'

export abstract class TextItem extends BaseTextItem {
  abstract _api: MiroApi
  abstract boardId: string
  type: 'text' = 'text'

  /**
   * Create a new connector between the current item and some other item
   * @param {string} endItemId Item that the new connector will connect to
   */
  async connectTo(endItemId: string | number): Promise<Connector> {
    const connector = (
      await this._api.createConnector(this.boardId, {
        startItem: {id: this.id.toString()},
        endItem: {id: endItemId.toString()},
      })
    ).body
    return new Connector(this._api, this.boardId, connector.id, connector)
  }
}
