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
 * Team copy access settings
 */
export class TeamCopyAccessLevelSettings {
  /**
   *  * \"anyone\":       Anyone with the board access can copy board content on newly created boards. * \"team_members\": Team members can copy board content on newly created boards. * \"team_editors\": Team members with editing rights can copy board content on newly created boards. * \"board_owner\":  Board owners only can copy board content on newly created boards.
   */
  'copyAccessLevel'?:
    | string
    | (typeof TeamCopyAccessLevelSettings.CopyAccessLevelEnum)[keyof typeof TeamCopyAccessLevelSettings.CopyAccessLevelEnum]
  /**
   *  * \"anyone\":       Team members and users outside team can be given permission to copy board content. * \"team_members\": Only team members can be given permission to copy board content.
   */
  'copyAccessLevelLimitation'?:
    | string
    | (typeof TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum)[keyof typeof TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'copyAccessLevel',
      baseName: 'copyAccessLevel',
      type: 'TeamCopyAccessLevelSettings.CopyAccessLevelEnum',
    },
    {
      name: 'copyAccessLevelLimitation',
      baseName: 'copyAccessLevelLimitation',
      type: 'TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamCopyAccessLevelSettings.attributeTypeMap
  }
}

export namespace TeamCopyAccessLevelSettings {
  export const CopyAccessLevelEnum = {
    Anyone: 'anyone',
    TeamMembers: 'team_members',
    TeamEditors: 'team_editors',
    BoardOwner: 'board_owner            -',
  } as const
  export const CopyAccessLevelLimitationEnum = {
    Anyone: 'anyone',
    TeamMembers: 'team_members',
  } as const
}
