import fs from 'fs'

export function writeModifiedOASFile(oas: any, filePath: string) {
  const modifiedOasFile = JSON.stringify(oas, null, 2)
  fs.writeFileSync(filePath, modifiedOasFile)
  console.log('Default values added to schema parameters in the OAS file.')
}
