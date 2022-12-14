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

export class UpdateBoardsDataClassificationLabelRequest {
  /**
   * Data classification label id for team
   */
  'labelId'?: number
  /**
   * Assign data classification label to not-classified only or to all boards of team
   */
  'notClassifiedOnly'?: boolean

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'labelId',
      baseName: 'labelId',
      type: 'number',
    },
    {
      name: 'notClassifiedOnly',
      baseName: 'notClassifiedOnly',
      type: 'boolean',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return UpdateBoardsDataClassificationLabelRequest.attributeTypeMap
  }
}
