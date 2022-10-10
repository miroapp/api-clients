import {StickyNoteItem} from '../model/stickyNoteItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class BaseStickyNoteItem extends StickyNoteItem implements ConnectTo {
  type: 'sticky_note' = 'sticky_note'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
