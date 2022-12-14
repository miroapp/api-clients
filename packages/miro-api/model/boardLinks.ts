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
 * Contains applicable links for the board.
 */
export class BoardLinks {
  /**
   * Link to obtain information about the board members associated with the board.
   */
  'related'?: string
  /**
   * Link to obtain information about the current board.
   */
  'self'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'related',
      baseName: 'related',
      type: 'string',
    },
    {
      name: 'self',
      baseName: 'self',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardLinks.attributeTypeMap
  }
}
