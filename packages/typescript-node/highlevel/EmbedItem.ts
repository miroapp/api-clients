import {EmbedItem as BaseEmbedItem} from '../model/embedItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class EmbedItem extends BaseEmbedItem implements ConnectTo {
  type: 'embed' = 'embed'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
