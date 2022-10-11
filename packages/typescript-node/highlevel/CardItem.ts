import {CardItem} from '../model/cardItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseCardItem extends CardItem implements ConnectTo {
  type: 'card' = 'card'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
