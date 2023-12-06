import {definedParams, variableParams} from './sample.constants'
import {camelToSnake} from './string-utils'

export function findReplacement(propertyName, obj, defaultValue = '') {
  if (propertyName in definedParams) {
    return definedParams[propertyName]
  }
  if (variableParams.includes(propertyName)) {
    return `{{${camelToSnake(propertyName)}}}`
  }
  if (obj.enum) {
    return obj.enum[0]
  }

  return defaultValue
}
