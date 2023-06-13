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

/**
 * @internal
 * Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.
 */
export class PositionChangePlatformContainers {
  /**
   * X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'x'?: number
  /**
   * Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.
   */
  'y'?: number

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'x',
      baseName: 'x',
      type: 'number',
    },
    {
      name: 'y',
      baseName: 'y',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return PositionChangePlatformContainers.attributeTypeMap
  }
}
