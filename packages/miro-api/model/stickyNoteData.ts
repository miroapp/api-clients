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
 * Contains sticky note item data, such as the content or shape of the sticky note.
 */
export class StickyNoteData {
  /**
   * The actual text (content) that appears in the sticky note item.
   */
  'content'?: string
  /**
   * Defines the geometric shape of the sticky note and aspect ratio for its dimensions.
   */
  'shape'?: string | (typeof StickyNoteData.ShapeEnum)[keyof typeof StickyNoteData.ShapeEnum] =
    StickyNoteData.ShapeEnum.Square

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'StickyNoteData.ShapeEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return StickyNoteData.attributeTypeMap
  }
}

export namespace StickyNoteData {
  export const ShapeEnum = {
    Square: 'square',
    Rectangle: 'rectangle',
  } as const
}
