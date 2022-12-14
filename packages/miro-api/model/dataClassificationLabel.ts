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

/**
 * @internal
 * Data classification labels
 */
export class DataClassificationLabel {
  /**
   * Label color
   */
  'color'?: string
  /**
   * Label is default
   */
  '_default'?: boolean
  /**
   * Label description
   */
  'description'?: string
  /**
   * Label id
   */
  'id'?: string
  /**
   * Label name
   */
  'name'?: string
  /**
   * Label order number
   */
  'orderNumber'?: number
  /**
   * Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS )
   */
  'sharingRecommendation'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'color',
      baseName: 'color',
      type: 'string',
    },
    {
      name: '_default',
      baseName: 'default',
      type: 'boolean',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'orderNumber',
      baseName: 'orderNumber',
      type: 'number',
    },
    {
      name: 'sharingRecommendation',
      baseName: 'sharingRecommendation',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return DataClassificationLabel.attributeTypeMap
  }
}
