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

import {OrganizationMember} from './organizationMember'

/**
 * @internal
 * Response for search organization members by user emails
 */
export class OrganizationMembersSearchByEmailsResponse extends Array<OrganizationMember> {
  /** @ignore */
  static discriminator: string | undefined = undefined
}
