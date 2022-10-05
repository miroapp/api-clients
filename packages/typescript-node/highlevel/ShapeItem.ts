import {ShapeItem as BaseShapeItem} from '../model/shapeItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class ShapeItem extends BaseShapeItem implements ConnectTo {
  type: 'shape' = 'shape'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
