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

import {BoardLinks} from './boardLinks'
import {BoardMember} from './boardMember'
import {BoardPolicy} from './boardPolicy'
import {Picture} from './picture'
import {Project} from './project'
import {Team} from './team'
import {UserInfoShort} from './userInfoShort'

export class BoardWithLinks {
  /**
   * Unique identifier (ID) of the board.
   */
  'id': string
  /**
   * Name of the board.
   */
  'name': string
  /**
   * Description of the board.
   */
  'description': string
  'team'?: Team
  'project'?: Project
  'picture'?: Picture
  'policy'?: BoardPolicy
  /**
   * URL to view the board.
   */
  'viewLink'?: string
  'owner'?: UserInfoShort
  'currentUserMembership'?: BoardMember
  /**
   * Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'createdAt'?: Date
  'createdBy'?: UserInfoShort
  /**
   * Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'modifiedAt'?: Date
  'modifiedBy'?: UserInfoShort
  'links'?: BoardLinks
  /**
   * Type of the object that is returned. In this case, type returns `board`.
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
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'team',
      baseName: 'team',
      type: 'Team',
    },
    {
      name: 'project',
      baseName: 'project',
      type: 'Project',
    },
    {
      name: 'picture',
      baseName: 'picture',
      type: 'Picture',
    },
    {
      name: 'policy',
      baseName: 'policy',
      type: 'BoardPolicy',
    },
    {
      name: 'viewLink',
      baseName: 'viewLink',
      type: 'string',
    },
    {
      name: 'owner',
      baseName: 'owner',
      type: 'UserInfoShort',
    },
    {
      name: 'currentUserMembership',
      baseName: 'currentUserMembership',
      type: 'BoardMember',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
    },
    {
      name: 'createdBy',
      baseName: 'createdBy',
      type: 'UserInfoShort',
    },
    {
      name: 'modifiedAt',
      baseName: 'modifiedAt',
      type: 'Date',
    },
    {
      name: 'modifiedBy',
      baseName: 'modifiedBy',
      type: 'UserInfoShort',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'BoardLinks',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardWithLinks.attributeTypeMap
  }
}
