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

import {SelfLink} from './selfLink'

/**
 * @internal
 * Contains information about the parent mind map node for the item.
 */
export class ParentLinksEnvelope {
  /**
   * Unique identifier (ID) of the parent mind map node for the item.
   */
  'id'?: string
  'links'?: SelfLink

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'SelfLink',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ParentLinksEnvelope.attributeTypeMap
  }
}
