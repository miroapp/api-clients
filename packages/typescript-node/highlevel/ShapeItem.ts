import {ShapeItem} from '../model/shapeItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseShapeItem extends ShapeItem implements ConnectTo {
  type: 'shape' = 'shape'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
