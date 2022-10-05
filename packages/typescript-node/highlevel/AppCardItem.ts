import {AppCardItem as BaseAppCardItem} from '../model/appCardItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class AppCardItem extends BaseAppCardItem implements ConnectTo {
  type: 'app_card' = 'app_card'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
