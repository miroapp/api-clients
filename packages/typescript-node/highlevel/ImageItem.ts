import {ImageItem} from '../model/imageItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseImageItem extends ImageItem implements ConnectTo {
  type: 'image' = 'image'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
