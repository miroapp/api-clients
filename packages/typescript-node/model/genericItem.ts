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
import {Geometry} from './geometry'
import {ModifiedBy} from './modifiedBy'
import {Parent} from './parent'
import {Position} from './position'
import {WidgetData} from './widgetData'

/**
 * @internal
 * Contains the result data.
 */
export class GenericItem {
  /**
   * Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'createdAt'?: Date
  'createdBy'?: CreatedBy
  'data'?: WidgetData
  'geometry'?: Geometry
  /**
   * Unique identifier (ID) of an item.
   */
  'id': number
  /**
   * Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'modifiedAt'?: Date
  'modifiedBy'?: ModifiedBy
  'parent'?: Parent
  'position'?: Position
  /**
   * Type of item that is returned.
   */
  'type': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
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
      name: 'data',
      baseName: 'data',
      type: 'WidgetData',
    },
    {
      name: 'geometry',
      baseName: 'geometry',
      type: 'Geometry',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
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
      type: 'Parent',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'Position',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return GenericItem.attributeTypeMap
  }
}
