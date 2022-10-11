import {TextItem} from '../model/textItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseTextItem extends TextItem implements ConnectTo {
  type: 'text' = 'text'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
