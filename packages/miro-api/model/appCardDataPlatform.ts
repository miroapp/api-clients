/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {CustomField} from './customField'

/**
 * @internal
 * Contains app card item data, such as the title, description, or fields.
 */
export class AppCardDataPlatform {
  /**
   * A short text description to add context about the app card.
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
  'status'?: string | (typeof AppCardDataPlatform.StatusEnum)[keyof typeof AppCardDataPlatform.StatusEnum]
  /**
   * A short text header to identify the app card.
   */
  'title'?: string

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
      type: 'AppCardDataPlatform.StatusEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return AppCardDataPlatform.attributeTypeMap
  }
}

export namespace AppCardDataPlatform {
  export const StatusEnum = {
    Disconnected: 'disconnected',
    Connected: 'connected',
    Disabled: 'disabled',
  } as const
}
