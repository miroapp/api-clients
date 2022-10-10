import {EmbedItem} from '../model/embedItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseEmbedItem extends EmbedItem implements ConnectTo {
  type: 'embed' = 'embed'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
