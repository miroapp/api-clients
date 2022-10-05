import {CardItem as BaseCardItem} from '../model/cardItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class CardItem extends BaseCardItem implements ConnectTo {
  type: 'card' = 'card'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
