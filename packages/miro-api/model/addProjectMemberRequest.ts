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

import {ProjectRole} from './projectRole'

export class AddProjectMemberRequest {
  /**
   * Email ID of the user.
   */
  'email': string
  'role': ProjectRole

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'email',
      baseName: 'email',
      type: 'string',
    },
    {
      name: 'role',
      baseName: 'role',
      type: 'ProjectRole',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return AddProjectMemberRequest.attributeTypeMap
  }
}
