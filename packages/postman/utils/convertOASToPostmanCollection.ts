import convertToPostmanCollection from './convertToPostmanCollection'

export function convertOASToPostmanCollection(oas: any) {
  const modifiedOasFile = JSON.stringify(oas, null, 2)
  convertToPostmanCollection({oas: modifiedOasFile})
}
