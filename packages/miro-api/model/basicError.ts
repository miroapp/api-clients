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

export class BasicError {
  /**
   * HTTP status code.
   */
  'status'?: number
  /**
   * Description of the status code.
   */
  'code'?: string
  /**
   * Explanation for the error
   */
  'message'?: string
  /**
   * Type of the object returned.
   */
  'type'?: string = 'error'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'status',
      baseName: 'status',
      type: 'number',
    },
    {
      name: 'code',
      baseName: 'code',
      type: 'string',
    },
    {
      name: 'message',
      baseName: 'message',
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
    return BasicError.attributeTypeMap
  }
}
