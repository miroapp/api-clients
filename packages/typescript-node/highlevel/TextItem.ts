import {TextItem as BaseTextItem} from '../model/textItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class TextItem extends BaseTextItem implements ConnectTo {
  type: 'text' = 'text'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
