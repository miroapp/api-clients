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

import {TeamAccountDiscoverySettings} from './teamAccountDiscoverySettings'
import {TeamCollaborationSettings} from './teamCollaborationSettings'
import {TeamCopyAccessLevelSettings} from './teamCopyAccessLevelSettings'
import {TeamInvitationSettings} from './teamInvitationSettings'
import {TeamSharingPolicySettings} from './teamSharingPolicySettings'

export class TeamSettings {
  /**
   * Organization id
   */
  'organizationId'?: string
  'teamAccountDiscoverySettings'?: TeamAccountDiscoverySettings
  'teamCollaborationSettings'?: TeamCollaborationSettings
  'teamCopyAccessLevelSettings'?: TeamCopyAccessLevelSettings
  /**
   * Team id
   */
  'teamId'?: string
  'teamInvitationSettings'?: TeamInvitationSettings
  'teamSharingPolicySettings'?: TeamSharingPolicySettings
  /**
   * Type of the object returned.
   */
  'type'?: string = 'team-settings'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'organizationId',
      baseName: 'organizationId',
      type: 'string',
    },
    {
      name: 'teamAccountDiscoverySettings',
      baseName: 'teamAccountDiscoverySettings',
      type: 'TeamAccountDiscoverySettings',
    },
    {
      name: 'teamCollaborationSettings',
      baseName: 'teamCollaborationSettings',
      type: 'TeamCollaborationSettings',
    },
    {
      name: 'teamCopyAccessLevelSettings',
      baseName: 'teamCopyAccessLevelSettings',
      type: 'TeamCopyAccessLevelSettings',
    },
    {
      name: 'teamId',
      baseName: 'teamId',
      type: 'string',
    },
    {
      name: 'teamInvitationSettings',
      baseName: 'teamInvitationSettings',
      type: 'TeamInvitationSettings',
    },
    {
      name: 'teamSharingPolicySettings',
      baseName: 'teamSharingPolicySettings',
      type: 'TeamSharingPolicySettings',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamSettings.attributeTypeMap
  }
}
