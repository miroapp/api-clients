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

import {TextData} from './textData'

/**
 * @internal
 * Contains the mind map node data, such as the item title, content, or description.
 */
export class MindmapWidgetDataOutput {
  /**
   * The actual text (content) that appears in the text item.
   */
  'content': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return MindmapWidgetDataOutput.attributeTypeMap
  }
}
