import fs from 'fs'
import { traverseOAS } from './utils/traverseOAS'
import { traverseComponents } from './utils/traverseComponents'
import { OpenAPIV3_1 } from './types/types'
import { convertOASToPostmanCollection } from './utils/convertOASToPostmanCollection'

try {
  const oasFile: string = fs.readFileSync('./../generator/spec.json', 'utf-8')
  const oas: OpenAPIV3_1.Document = JSON.parse(oasFile)

  traverseOAS(oas)
  traverseComponents(oas)

  convertOASToPostmanCollection(oas)
} catch (error) {
  console.error('An error occurred:', error)
}
