import {DocumentItem} from '../model/documentItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseDocumentItem extends DocumentItem implements ConnectTo {
  type: 'document' = 'document'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
