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

import {SelfLink} from './selfLink'

export class TagWithLinks {
  /**
   * Unique identifier of the tag.
   */
  'id': string
  /**
   * Text of the tag
   */
  'title': string
  /**
   * Background color of the tag.
   */
  'fillColor': string | (typeof TagWithLinks.FillColorEnum)[keyof typeof TagWithLinks.FillColorEnum]
  'links'?: SelfLink
  /**
   * Type of the object that is returned. In this case, type returns `tag`.
   */
  'type': string

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
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'TagWithLinks.FillColorEnum',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'SelfLink',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TagWithLinks.attributeTypeMap
  }
}

export namespace TagWithLinks {
  export const FillColorEnum = {
    Red: 'red',
    LightGreen: 'light_green',
    Cyan: 'cyan',
    Yellow: 'yellow',
    Magenta: 'magenta',
    Green: 'green',
    Blue: 'blue',
    Gray: 'gray',
    Violet: 'violet',
    DarkGreen: 'dark_green',
    DarkBlue: 'dark_blue',
    Black: 'black',
  } as const
}
