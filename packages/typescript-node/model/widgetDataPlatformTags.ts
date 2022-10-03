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

import {AppCardData} from './appCardData'
import {CardData} from './cardData'
import {CustomField} from './customField'
import {DocumentData} from './documentData'
import {EmbedData} from './embedData'
import {FrameData} from './frameData'
import {ImageData} from './imageData'
import {ShapeData} from './shapeData'
import {StickyNoteData} from './stickyNoteData'
import {TextData} from './textData'

/**
 * @internal
 * Contains the item data, such as the item title, content, or description.
 */
export class WidgetDataPlatformTags {
  /**
   * The actual text (content) that appears in the sticky note item.
   */
  'content': string = 'Hello'
  /**
   * Type of the embedded item\'s content.
   */
  'contentType'?: string
  /**
   * A short text description to add context about the app card.
   */
  'description'?: string
  /**
   * Html code of the embedded item.
   */
  'html'?: string
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board. Possible values: `inline`, `modal`
   */
  'mode'?: string | typeof WidgetDataPlatformTags.ModeEnum[keyof typeof WidgetDataPlatformTags.ModeEnum]
  /**
   * Name of the content\'s provider.
   */
  'providerName'?: string
  /**
   * Url of the content\'s provider.
   */
  'providerUrl'?: string
  /**
   * Title of the frame. This title appears at the top of the frame.
   */
  'title'?: string
  /**
   * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
   */
  'url'?: string
  /**
   * Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is numeric, and it is automatically assigned to a user when they first sign up.
   */
  'assigneeId'?: number
  /**
   * The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'dueDate'?: Date
  /**
   * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
   */
  'fields'?: Array<CustomField>
  /**
   * Defines whether the card is owned by the application making the call.
   */
  'owned'?: boolean
  /**
   * Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`. Possible values: `disconnected`, `connected`, `disabled`
   */
  'status'?: string | typeof WidgetDataPlatformTags.StatusEnum[keyof typeof WidgetDataPlatformTags.StatusEnum]
  /**
   * Defines the geometric shape of the sticky note and aspect ratio for its dimensions. Possible values: `square`, `rectangle`
   */
  'shape'?: string | typeof WidgetDataPlatformTags.ShapeEnum[keyof typeof WidgetDataPlatformTags.ShapeEnum] =
    WidgetDataPlatformTags.ShapeEnum.Square
  /**
   * Only custom frames are supported at the moment. Possible values: `custom`, `desktop`, `phone`, `tablet`, `a4`, `letter`, `ratio_1x1`, `ratio_4x3`, `ratio_16x9`
   */
  'format'?: string | typeof WidgetDataPlatformTags.FormatEnum[keyof typeof WidgetDataPlatformTags.FormatEnum] =
    WidgetDataPlatformTags.FormatEnum.Custom
  /**
   * Only free form frames are supported at the moment. Possible values: `freeform`, `heap`, `grid`, `rows`, `columns`
   */
  'type'?: string | typeof WidgetDataPlatformTags.TypeEnum[keyof typeof WidgetDataPlatformTags.TypeEnum] =
    WidgetDataPlatformTags.TypeEnum.Freeform

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
      name: 'contentType',
      baseName: 'contentType',
      type: 'string',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'html',
      baseName: 'html',
      type: 'string',
    },
    {
      name: 'mode',
      baseName: 'mode',
      type: 'WidgetDataPlatformTags.ModeEnum',
    },
    {
      name: 'providerName',
      baseName: 'providerName',
      type: 'string',
    },
    {
      name: 'providerUrl',
      baseName: 'providerUrl',
      type: 'string',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
    {
      name: 'assigneeId',
      baseName: 'assigneeId',
      type: 'number',
    },
    {
      name: 'dueDate',
      baseName: 'dueDate',
      type: 'Date',
    },
    {
      name: 'fields',
      baseName: 'fields',
      type: 'Array<CustomField>',
    },
    {
      name: 'owned',
      baseName: 'owned',
      type: 'boolean',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'WidgetDataPlatformTags.StatusEnum',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'WidgetDataPlatformTags.ShapeEnum',
    },
    {
      name: 'format',
      baseName: 'format',
      type: 'WidgetDataPlatformTags.FormatEnum',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'WidgetDataPlatformTags.TypeEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return WidgetDataPlatformTags.attributeTypeMap
  }
}

export namespace WidgetDataPlatformTags {
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
  export const StatusEnum = {
    Disconnected: 'disconnected',
    Connected: 'connected',
    Disabled: 'disabled',
  } as const
  export const ShapeEnum = {
    Square: 'square',
    Rectangle: 'rectangle',
  } as const
  export const FormatEnum = {
    Custom: 'custom',
    Desktop: 'desktop',
    Phone: 'phone',
    Tablet: 'tablet',
    A4: 'a4',
    Letter: 'letter',
    Ratio1x1: 'ratio_1x1',
    Ratio4x3: 'ratio_4x3',
    Ratio16x9: 'ratio_16x9',
  } as const
  export const TypeEnum = {
    Freeform: 'freeform',
    Heap: 'heap',
    Grid: 'grid',
    Rows: 'rows',
    Columns: 'columns',
  } as const
}
