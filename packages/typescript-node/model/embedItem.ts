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

import {CreatedBy} from './createdBy'
import {EmbedData} from './embedData'
import {Geometry} from './geometry'
import {ModifiedBy} from './modifiedBy'
import {ParentLinksEnvelope} from './parentLinksEnvelope'
import {Position} from './position'
import {WidgetLinks} from './widgetLinks'

export class EmbedItem {
  /**
   * Unique identifier (ID) of an item.
   */
  'id': number
  'data'?: EmbedData
  'position'?: Position
  'geometry'?: Geometry
  /**
   * Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'createdAt'?: Date
  'createdBy'?: CreatedBy
  /**
   * Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'modifiedAt'?: Date
  'modifiedBy'?: ModifiedBy
  'parent'?: ParentLinksEnvelope
  'links'?: WidgetLinks
  /**
   * Type of item that is returned.
   */
  'type': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'EmbedData',
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
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
    },
    {
      name: 'createdBy',
      baseName: 'createdBy',
      type: 'CreatedBy',
    },
    {
      name: 'modifiedAt',
      baseName: 'modifiedAt',
      type: 'Date',
    },
    {
      name: 'modifiedBy',
      baseName: 'modifiedBy',
      type: 'ModifiedBy',
    },
    {
      name: 'parent',
      baseName: 'parent',
      type: 'ParentLinksEnvelope',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'WidgetLinks',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return EmbedItem.attributeTypeMap
  }
}
