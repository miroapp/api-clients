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

import {TeamAccess} from './teamAccess'

export class SharingPolicySettings {
  'teamAccess'?: TeamAccess

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'teamAccess',
      baseName: 'teamAccess',
      type: 'TeamAccess',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return SharingPolicySettings.attributeTypeMap
  }
}