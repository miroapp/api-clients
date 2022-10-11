import {AppCardItem} from '../model/appCardItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseAppCardItem extends AppCardItem implements ConnectTo {
  type: 'app_card' = 'app_card'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
