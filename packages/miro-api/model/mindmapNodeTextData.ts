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
 * Contains the information about the mind map text.
 */
export class MindmapNodeTextData {
  /**
   * Type of item used as mind map node. Currently, `type` can only be equal to `text`.
   */
  'type': string
  /**
   * The actual text (content) that appears in the mind map node.
   */
  'content'?: string

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
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return MindmapNodeTextData.attributeTypeMap
  }
}
