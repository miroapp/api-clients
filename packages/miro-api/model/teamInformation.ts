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

export class TeamInformation {
  'type': string
  'name': string
  'id': string

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
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamInformation.attributeTypeMap
  }
}
