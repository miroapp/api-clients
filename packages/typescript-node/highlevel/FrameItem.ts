import {FrameItem as BaseFrameItem} from '../model/frameItem'
import {MiroApi} from '../api'

export abstract class FrameItem extends BaseFrameItem {
  abstract _api: MiroApi

  // custom methods go here
}
