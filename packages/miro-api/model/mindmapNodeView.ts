/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {MindmapNodeStyle} from './mindmapNodeStyle'
import {MindmapWidgetDataOutput} from './mindmapWidgetDataOutput'

/**
 * @internal
 * Contains the information about the mind map node.
 */
export class MindmapNodeView {
  /**
   * Type of item used as mind map node. Currently, `type` can only be equal to `text`.
   */
  'type'?: string
  'data'?: MindmapWidgetDataOutput
  'style'?: MindmapNodeStyle

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'MindmapWidgetDataOutput',
    },
    {
      name: 'style',
      baseName: 'style',
      type: 'MindmapNodeStyle',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return MindmapNodeView.attributeTypeMap
  }
}
