import {FrameItem as BaseFrameItem} from '../model/frameItem'
import {MiroApi} from '../api'

export abstract class FrameItem extends BaseFrameItem {
  abstract _api: MiroApi
  abstract _headParams: [string, string]

  // custom methods go here
}
