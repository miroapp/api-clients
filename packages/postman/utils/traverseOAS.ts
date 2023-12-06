import {addDefaultValues} from './addDefaultValues'
import {snakeToTitleCase} from './string-utils'
import {OpenAPIV3_1} from 'openapi-types'

type OASDoc = OpenAPIV3_1.Document

export const traverseOAS = (oas: OASDoc) => {
  for (const path in oas.paths) {
    const pathItem = oas.paths[path]
    for (const method in pathItem) {
      const operation = pathItem[method]
      delete operation['responses']
      if (operation.parameters) {
        addDefaultValues(operation.parameters)
      }
      if (operation.tags) {
        operation.tags = operation.tags.map((tag) => snakeToTitleCase(tag))
      }
    }
  }

  return oas
}
