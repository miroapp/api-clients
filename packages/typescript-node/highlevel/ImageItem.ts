import {ImageItem as BaseImageItem} from '../model/imageItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class ImageItem extends BaseImageItem implements ConnectTo {
  type: 'image' = 'image'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
