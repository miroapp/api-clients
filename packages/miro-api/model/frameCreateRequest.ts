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

import {FrameChanges} from './frameChanges'
import {FrameStyle} from './frameStyle'
import {GeometryNoRotation} from './geometryNoRotation'
import {PositionChange} from './positionChange'

export class FrameCreateRequest {
  'data': FrameChanges
  'style'?: FrameStyle
  'position'?: PositionChange
  'geometry'?: GeometryNoRotation

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'FrameChanges',
    },
    {
      name: 'style',
      baseName: 'style',
      type: 'FrameStyle',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'PositionChange',
    },
    {
      name: 'geometry',
      baseName: 'geometry',
      type: 'GeometryNoRotation',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return FrameCreateRequest.attributeTypeMap
  }
}