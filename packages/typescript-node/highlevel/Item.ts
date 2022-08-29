import {GenericItem} from '../model/genericItem'
import {MiroApi} from '../api'

export abstract class Item extends GenericItem {
  abstract _api: MiroApi
  abstract _headParams: [string, string]

  // custom methods go here
}
