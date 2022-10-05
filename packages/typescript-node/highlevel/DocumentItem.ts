import {DocumentItem as BaseDocumentItem} from '../model/documentItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class DocumentItem extends BaseDocumentItem implements ConnectTo {
  type: 'document' = 'document'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
