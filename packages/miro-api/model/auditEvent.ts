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

import {AuditContext} from './auditContext'
import {AuditCreatedBy} from './auditCreatedBy'
import {AuditObject} from './auditObject'

export class AuditEvent {
  /**
   * Audit event id
   */
  'id'?: string
  'context'?: AuditContext
  'object'?: AuditObject
  /**
   * Time when the audit event has been created
   */
  'createdAt'?: Date
  /**
   * Details json related to the audit event
   */
  'details'?: object
  'createdBy'?: AuditCreatedBy
  /**
   * Event type of the audit event
   */
  'event'?: string

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
      name: 'context',
      baseName: 'context',
      type: 'AuditContext',
    },
    {
      name: 'object',
      baseName: 'object',
      type: 'AuditObject',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
    },
    {
      name: 'details',
      baseName: 'details',
      type: 'object',
    },
    {
      name: 'createdBy',
      baseName: 'createdBy',
      type: 'AuditCreatedBy',
    },
    {
      name: 'event',
      baseName: 'event',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return AuditEvent.attributeTypeMap
  }
}
