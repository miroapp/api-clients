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
 * Contains information about the parent this item attached to. Passing null for ID will attach widget to the canvas directly.
 */
export class ParentPlatformContainers {
  'id'?: number

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ParentPlatformContainers.attributeTypeMap
  }
}
