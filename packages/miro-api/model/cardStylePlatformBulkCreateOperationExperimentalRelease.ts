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
 * Contains information about the style of a card item, such as the card theme.
 */
export class CardStylePlatformBulkCreateOperationExperimentalRelease {
  /**
   * Hex value of the border color of the card. Default: `#2d9bf0`.
   */
  'cardTheme'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'cardTheme',
      baseName: 'cardTheme',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return CardStylePlatformBulkCreateOperationExperimentalRelease.attributeTypeMap
  }
}
