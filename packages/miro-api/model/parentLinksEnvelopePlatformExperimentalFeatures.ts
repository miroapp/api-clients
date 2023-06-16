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
 * Contains information about the parent frame for the item.
 */
export class ParentLinksEnvelopePlatformExperimentalFeatures {
  /**
   * Unique identifier (ID) of the parent frame for the item.
   */
  'id'?: number
  'links'?: SelfLink

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'SelfLink',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ParentLinksEnvelopePlatformExperimentalFeatures.attributeTypeMap
  }
}
