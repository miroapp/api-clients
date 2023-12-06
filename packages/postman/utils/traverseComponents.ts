import {findReplacement} from './findReplacement'
import {OpenAPIV3_1} from 'openapi-types'

type OASDoc = OpenAPIV3_1.Document
// type SchemaProperty = OpenAPIV3_1.SchemaObject & { type: string }

export const traverseComponents = (oas: OASDoc) => {
  if (!oas.components || !oas.components.schemas) return oas

  for (const [schemaName, schema] of Object.entries(oas.components.schemas)) {
    if (schema.properties) {
      for (const [propertyName, property] of Object.entries(schema.properties)) {
        if (
          isSchemaObject(property) &&
          !property['$ref'] &&
          property.type !== 'array' &&
          !property.example &&
          !property.default
        ) {
          property.example = findReplacement(propertyName, property, '<value>')
        }
      }
      if (schemaName === 'ParentLinksEnvelope' || schemaName === 'Parent' || schemaName === 'ParentWithLinks') {
        if (isSchemaObject(schema.properties['id'])) {
          schema.properties['id'].example = '{{parent_id}}'
        }
      }
    }
  }
  return oas
}

function isSchemaObject(obj: any): obj is OpenAPIV3_1.SchemaObject {
  return obj && typeof obj === 'object' && 'type' in obj
}
