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

/**
 * @internal
 * Organization member
 */
export class OrganizationMember {
  /**
   * Id of the user
   */
  'id': string
  /**
   * Flag is user active
   */
  'active': boolean
  /**
   * User email
   */
  'email': string
  /**
   * Last time when the user was active
   */
  'lastActivityAt'?: Date
  /**
   * Name of the current user license in the organization
   */
  'license': string | (typeof OrganizationMember.LicenseEnum)[keyof typeof OrganizationMember.LicenseEnum]
  /**
   * Time when the license was assigned to the user
   */
  'licenseAssignedAt'?: Date
  /**
   * Name of the user role in the organization
   */
  'role': string | (typeof OrganizationMember.RoleEnum)[keyof typeof OrganizationMember.RoleEnum]
  /**
   * Type of the object returned.
   */
  'type'?: string = 'organization-member'

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
      name: 'active',
      baseName: 'active',
      type: 'boolean',
    },
    {
      name: 'email',
      baseName: 'email',
      type: 'string',
    },
    {
      name: 'lastActivityAt',
      baseName: 'lastActivityAt',
      type: 'Date',
    },
    {
      name: 'license',
      baseName: 'license',
      type: 'OrganizationMember.LicenseEnum',
    },
    {
      name: 'licenseAssignedAt',
      baseName: 'licenseAssignedAt',
      type: 'Date',
    },
    {
      name: 'role',
      baseName: 'role',
      type: 'OrganizationMember.RoleEnum',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return OrganizationMember.attributeTypeMap
  }
}

export namespace OrganizationMember {
  export const LicenseEnum = {
    Full: 'full',
    Occasional: 'occasional',
    Free: 'free',
    FreeRestricted: 'free_restricted',
    FullTrial: 'full_trial',
    Unknown: 'unknown',
  } as const
  export const RoleEnum = {
    OrganizationInternalAdmin: 'organization_internal_admin',
    OrganizationInternalUser: 'organization_internal_user',
    OrganizationExternalUser: 'organization_external_user',
    OrganizationTeamGuestUser: 'organization_team_guest_user',
    Unknown: 'unknown',
  } as const
}
