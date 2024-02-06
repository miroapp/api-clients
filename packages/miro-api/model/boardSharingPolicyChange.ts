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
 * Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.
 */
export class BoardSharingPolicyChange {
  /**
   * Defines the public-level access to the board.
   */
  'access'?: string | (typeof BoardSharingPolicyChange.AccessEnum)[keyof typeof BoardSharingPolicyChange.AccessEnum] =
    BoardSharingPolicyChange.AccessEnum.Private
  /**
   * Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access` regardless of the value that you assign for this parameter.
   */
  'inviteToAccountAndBoardLinkAccess'?:
    | string
    | (typeof BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum)[keyof typeof BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum] =
    BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum.NoAccess
  /**
   * Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value.
   */
  'organizationAccess'?:
    | string
    | (typeof BoardSharingPolicyChange.OrganizationAccessEnum)[keyof typeof BoardSharingPolicyChange.OrganizationAccessEnum] =
    BoardSharingPolicyChange.OrganizationAccessEnum.Private
  /**
   * Defines the team-level access to the board.
   */
  'teamAccess'?:
    | string
    | (typeof BoardSharingPolicyChange.TeamAccessEnum)[keyof typeof BoardSharingPolicyChange.TeamAccessEnum] =
    BoardSharingPolicyChange.TeamAccessEnum.Private

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'access',
      baseName: 'access',
      type: 'BoardSharingPolicyChange.AccessEnum',
    },
    {
      name: 'inviteToAccountAndBoardLinkAccess',
      baseName: 'inviteToAccountAndBoardLinkAccess',
      type: 'BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum',
    },
    {
      name: 'organizationAccess',
      baseName: 'organizationAccess',
      type: 'BoardSharingPolicyChange.OrganizationAccessEnum',
    },
    {
      name: 'teamAccess',
      baseName: 'teamAccess',
      type: 'BoardSharingPolicyChange.TeamAccessEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardSharingPolicyChange.attributeTypeMap
  }
}

export namespace BoardSharingPolicyChange {
  export const AccessEnum = {
    Private: 'private',
    View: 'view',
    Edit: 'edit',
    Comment: 'comment',
  } as const
  export const InviteToAccountAndBoardLinkAccessEnum = {
    Viewer: 'viewer',
    Commenter: 'commenter',
    Editor: 'editor',
    NoAccess: 'no_access',
  } as const
  export const OrganizationAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
  export const TeamAccessEnum = {
    Private: 'private',
    View: 'view',
    Comment: 'comment',
    Edit: 'edit',
  } as const
}
