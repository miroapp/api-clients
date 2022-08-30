import {GenericItem} from '../model/genericItem'
import {MiroApi} from '../api'

export abstract class Item extends GenericItem {
  abstract _api: MiroApi

  // custom methods go here
}
