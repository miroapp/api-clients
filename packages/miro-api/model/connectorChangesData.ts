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

import {Caption} from './caption'
import {ConnectorStyle} from './connectorStyle'
import {ItemConnectionChangesData} from './itemConnectionChangesData'

export class ConnectorChangesData {
  'startItem'?: ItemConnectionChangesData
  'endItem'?: ItemConnectionChangesData
  /**
   * The path type of the connector line, defines curvature. Default: curved.
   */
  'shape'?: string | (typeof ConnectorChangesData.ShapeEnum)[keyof typeof ConnectorChangesData.ShapeEnum]
  'captions'?: Array<Caption>
  'style'?: ConnectorStyle

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'startItem',
      baseName: 'startItem',
      type: 'ItemConnectionChangesData',
    },
    {
      name: 'endItem',
      baseName: 'endItem',
      type: 'ItemConnectionChangesData',
    },
    {
      name: 'shape',
      baseName: 'shape',
      type: 'ConnectorChangesData.ShapeEnum',
    },
    {
      name: 'captions',
      baseName: 'captions',
      type: 'Array<Caption>',
    },
    {
      name: 'style',
      baseName: 'style',
      type: 'ConnectorStyle',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ConnectorChangesData.attributeTypeMap
  }
}

export namespace ConnectorChangesData {
  export const ShapeEnum = {
    Straight: 'straight',
    Elbowed: 'elbowed',
    Curved: 'curved',
  } as const
}
