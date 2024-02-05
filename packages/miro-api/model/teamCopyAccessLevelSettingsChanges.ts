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

/**
 * @internal
 * Team copy access settings
 */
export class TeamCopyAccessLevelSettingsChanges {
  /**
   *  * \"anyone\":       Anyone with the board access can copy board content on newly created boards. * \"team_members\": Team members can copy board content on newly created boards. * \"team_editors\": Team members with editing rights can copy board content on newly created boards. * \"board_owner\":  Board owners only can copy board content on newly created boards.
   */
  'copyAccessLevel'?:
    | string
    | (typeof TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum)[keyof typeof TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum]
  /**
   *  * \"anyone\":       Team members and users outside team can be given permission to copy board content. * \"team_members\": Only team members can be given permission to copy board content.
   */
  'copyAccessLevelLimitation'?:
    | string
    | (typeof TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum)[keyof typeof TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'copyAccessLevel',
      baseName: 'copyAccessLevel',
      type: 'TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum',
    },
    {
      name: 'copyAccessLevelLimitation',
      baseName: 'copyAccessLevelLimitation',
      type: 'TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamCopyAccessLevelSettingsChanges.attributeTypeMap
  }
}

export namespace TeamCopyAccessLevelSettingsChanges {
  export const CopyAccessLevelEnum = {
    Anyone: 'anyone',
    TeamMembers: 'team_members',
    TeamEditors: 'team_editors',
    BoardOwner: 'board_owner',
  } as const
  export const CopyAccessLevelLimitationEnum = {
    Anyone: 'anyone',
    TeamMembers: 'team_members',
  } as const
}
