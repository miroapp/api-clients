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

export class DataClassificationTeamSettings {
  /**
   * Data classification default label id
   */
  'defaultLabelId'?: string
  /**
   * Data classification enabled for team
   */
  'enabled'?: boolean
  /**
   * Type of the object returned.
   */
  'type'?: string = 'team-data-classification-settings'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'defaultLabelId',
      baseName: 'defaultLabelId',
      type: 'string',
    },
    {
      name: 'enabled',
      baseName: 'enabled',
      type: 'boolean',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return DataClassificationTeamSettings.attributeTypeMap
  }
}
