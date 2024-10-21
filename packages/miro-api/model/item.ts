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

import {CreatedBy} from './createdBy'
import {Geometry} from './geometry'
import {ItemData} from './itemData'
import {ModifiedBy} from './modifiedBy'
import {ParentWithLinks} from './parentWithLinks'
import {Position} from './position'
import {SelfLink} from './selfLink'

/**
 * @internal
 * Contains information about an item.
 */
export class Item {
  /**
   * Unique identifier (ID) of an item.
   */
  'id': string
  /**
   * Type of item.
   */
  'type': string
  'data'?: ItemData
  'position'?: Position
  'geometry'?: Geometry
  'parent'?: ParentWithLinks
  'createdBy'?: CreatedBy
  /**
   * Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'createdAt'?: Date
  'modifiedBy'?: ModifiedBy
  /**
   * Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'modifiedAt'?: Date
  'links': SelfLink

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
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'ItemData',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'Position',
    },
    {
      name: 'geometry',
      baseName: 'geometry',
      type: 'Geometry',
    },
    {
      name: 'parent',
      baseName: 'parent',
      type: 'ParentWithLinks',
    },
    {
      name: 'createdBy',
      baseName: 'createdBy',
      type: 'CreatedBy',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
    },
    {
      name: 'modifiedBy',
      baseName: 'modifiedBy',
      type: 'ModifiedBy',
    },
    {
      name: 'modifiedAt',
      baseName: 'modifiedAt',
      type: 'Date',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'SelfLink',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Item.attributeTypeMap
  }
}
