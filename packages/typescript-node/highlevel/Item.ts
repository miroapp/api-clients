import {GenericItem} from '../model/genericItem'
import {MiroApi} from '../api'
import {Connector} from '.'

export abstract class Item extends GenericItem {
  abstract _api: MiroApi
  abstract boardId: string | undefined

  async connectTo(endItemId: string | number): Promise<Connector> {
    const connector = (
      await this._api.createConnector(this.boardId?.toString() || '', {
        startItem: {id: this.id?.toString() || ''},
        endItem: {id: endItemId.toString()},
      })
    ).body
    return new Connector(this._api, this.boardId, connector.id, connector)
  }
}
