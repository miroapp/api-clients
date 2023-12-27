import { convertToPostmanCollection } from './convertToPostmanCollection'
import { OpenAPIV3_1 } from './../types/types'

export function convertOASToPostmanCollection(oas: OpenAPIV3_1.Document) {
  const modifiedOasFile = JSON.stringify(oas, null, 2)
  convertToPostmanCollection({ oas: modifiedOasFile })
}
