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
 * For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
 */
export class EmbedUrlDataChanges {
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board.
   */
  'mode'?: string | (typeof EmbedUrlDataChanges.ModeEnum)[keyof typeof EmbedUrlDataChanges.ModeEnum]
  /**
   * URL of the image to be used as the preview image for the embedded item.
   */
  'previewUrl'?: string
  'type'?: string | (typeof EmbedUrlDataChanges.TypeEnum)[keyof typeof EmbedUrlDataChanges.TypeEnum]
  /**
   * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
   */
  'url'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'mode',
      baseName: 'mode',
      type: 'EmbedUrlDataChanges.ModeEnum',
    },
    {
      name: 'previewUrl',
      baseName: 'previewUrl',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'EmbedUrlDataChanges.TypeEnum',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return EmbedUrlDataChanges.attributeTypeMap
  }
}

export namespace EmbedUrlDataChanges {
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
  export const TypeEnum = {
    Text: 'text',
    Shape: 'shape',
    StickyNote: 'sticky_note',
    Image: 'image',
    Document: 'document',
    Card: 'card',
    AppCard: 'app_card',
    Preview: 'preview',
    Frame: 'frame',
    Embed: 'embed',
    Opaque: 'opaque',
  } as const
}
