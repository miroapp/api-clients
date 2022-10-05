import {StickyNoteItem as BaseStickyNoteItem} from '../model/stickyNoteItem'
import {ConnectableItem, ConnectTo} from './Item'

export abstract class StickyNoteItem extends BaseStickyNoteItem implements ConnectTo {
  type: 'sticky_note' = 'sticky_note'

  /** @group Methods */
  connectTo = ConnectableItem.prototype.connectTo
}
