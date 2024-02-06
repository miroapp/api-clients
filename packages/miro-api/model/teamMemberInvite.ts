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

export class TeamMemberInvite {
  /**
   * User email to add to a team
   */
  'email': string
  /**
   *  Role of the team member. * \"member\":     Team member with full member permissions. * \"admin\":      Admin of a team. Team member with permission to manage team. * \"team_guest\": Team-guest user, user with access only to a team without access to organization.
   */
  'role'?: string | (typeof TeamMemberInvite.RoleEnum)[keyof typeof TeamMemberInvite.RoleEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'email',
      baseName: 'email',
      type: 'string',
    },
    {
      name: 'role',
      baseName: 'role',
      type: 'TeamMemberInvite.RoleEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamMemberInvite.attributeTypeMap
  }
}

export namespace TeamMemberInvite {
  export const RoleEnum = {
    Member: 'member',
    Admin: 'admin',
    TeamGuest: 'team_guest',
  } as const
}
