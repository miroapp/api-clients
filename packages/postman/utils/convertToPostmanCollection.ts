import Converter from 'openapi-to-postmanv2'
import fs from 'fs'
import {missingPostmanVariables, auth, event} from './sample.constants'

export default ({type = 'json', oas}) =>
  Converter.convert(
    {type, data: oas},
    {
      requestParametersResolution: 'Example',
      folderStrategy: 'Tags',
    },
    (_, conversionResult) => {
      if (!conversionResult.result) {
        console.log('Could not convert', conversionResult.reason)
      } else {
        const postmanCollection = JSON.stringify(conversionResult.output[0].data, null, 2)
        let postmanCollectionJson = JSON.parse(postmanCollection)

        postmanCollectionJson = {
          ...postmanCollectionJson,
          variable: [...postmanCollectionJson.variable, ...missingPostmanVariables],
          ...auth,
          ...event,
        }
        // TODO: send postman collection to api
        fs.writeFileSync('generated/postman-collection.json', JSON.stringify(postmanCollectionJson))
        console.log('Postman collection generated at : generated/postman-collection.json ')
      }
    },
  )
