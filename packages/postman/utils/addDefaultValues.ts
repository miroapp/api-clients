import { findReplacement } from './findReplacement'

// Function to add default values to parameters
export function addDefaultValues(parameters) {
  parameters.forEach((parameter) => {
    if (parameter.schema && !parameter.schema.default && !parameter.schema.example) {
      parameter.schema.example = findReplacement(parameter.name, parameter.schema)
    }
  })
  console.log('Default values added to schema parameters in the OAS file.')
}
