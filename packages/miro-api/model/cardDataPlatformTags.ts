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
 * Contains card item data, such as the title, description, due date, or assignee ID. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
 */
export class CardDataPlatformTags {
  /**
   * Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is numeric, and it is automatically assigned to a user when they first sign up.
   */
  'assigneeId'?: number
  /**
   * A short text description to add context about the card.
   */
  'description'?: string
  /**
   * The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'dueDate'?: Date
  /**
   * A short text header for the card.
   */
  'title'?: string = 'sample card item'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'assigneeId',
      baseName: 'assigneeId',
      type: 'number',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'dueDate',
      baseName: 'dueDate',
      type: 'Date',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return CardDataPlatformTags.attributeTypeMap
  }
}
