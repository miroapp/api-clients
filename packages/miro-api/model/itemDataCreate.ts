/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {AppCardData} from './appCardData'
import {CardData} from './cardData'
import {CustomField} from './customField'
import {DocumentUrlData} from './documentUrlData'
import {EmbedUrlData} from './embedUrlData'
import {ImageUrlData} from './imageUrlData'
import {ShapeData} from './shapeData'
import {StickyNoteData} from './stickyNoteData'
import {TextData} from './textData'

/**
 * @internal
 * Contains data information applicable for each item type.
 */
export class ItemDataCreate {
  /**
   * A short text description to add context about the card.
   */
  'description'?: string
  /**
   * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
   */
  'fields'?: Array<CustomField>
  /**
   * Defines whether the card is owned by the application making the call.
   */
  'owned'?: boolean
  /**
   * Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.
   */
  'status'?: string | (typeof ItemDataCreate.StatusEnum)[keyof typeof ItemDataCreate.StatusEnum]
  /**
   * A short text header to identify the image.
   */
  'title'?: string
  /**
   * Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is a string containing numbers, and it is automatically assigned to a user when they first sign up.
   */
  'assigneeId'?: string
  /**
   * The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'dueDate'?: Date
  /**
   * URL of the image.
   */
  'url': string = 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png'
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board.
   */
  'mode'?: string | (typeof ItemDataCreate.ModeEnum)[keyof typeof ItemDataCreate.ModeEnum]
  /**
   * URL of the image to be used as the preview image for the embedded item.
   */
  'previewUrl'?: string
  /**
   * The actual text (content) that appears in the text item.
   */
  'content': string
  /**
   * Defines the geometric shape of the sticky note and aspect ratio for its dimensions.
   */
  'shape'?: string | (typeof ItemDataCreate.ShapeEnum)[keyof typeof ItemDataCreate.ShapeEnum] =
    ItemDataCreate.ShapeEnum.Square

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
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
      type: 'ItemDataCreate.StatusEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'assigneeId',
      baseName: 'assigneeId',
      type: 'string',
    },
    {
      name: 'dueDate',
      baseName: 'dueDate',
      type: 'Date',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
    {
      name: 'mode',
      baseName: 'mode',
      type: 'ItemDataCreate.ModeEnum',
    },
    {
      name: 'previewUrl',
      baseName: 'previewUrl',
      type: 'string',
    },
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'ItemDataCreate.ShapeEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ItemDataCreate.attributeTypeMap
  }
}

export namespace ItemDataCreate {
  export const StatusEnum = {
    Disconnected: 'disconnected',
    Connected: 'connected',
    Disabled: 'disabled',
  } as const
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
  export const ShapeEnum = {
    Square: 'square',
    Rectangle: 'rectangle',
  } as const
}
