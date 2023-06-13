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

export class Picture {
  /**
   * Id of the picture
   */
  'id'?: string
  /**
   * Url of the picture
   */
  'imageURL'?: string
  /**
   * Original team picture url for icon generation
   */
  'originalUrl'?: string
  /**
   * Type of the object returned.
   */
  'type'?: string = 'picture'

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
      name: 'imageURL',
      baseName: 'imageURL',
      type: 'string',
    },
    {
      name: 'originalUrl',
      baseName: 'originalUrl',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Picture.attributeTypeMap
  }
}
