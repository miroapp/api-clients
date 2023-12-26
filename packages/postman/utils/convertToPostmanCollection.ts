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
        try {
          const postmanCollection = JSON.stringify(conversionResult.output[0].data, null, 2)
          let postmanCollectionJson = JSON.parse(postmanCollection)

          postmanCollectionJson = {
            ...postmanCollectionJson,
            variable: [...postmanCollectionJson.variable, ...missingPostmanVariables],
            ...auth,
            ...event,
          }

          // const modifiedPostmanJson = unselectOptionalQueryParams(postmanCollectionJson.item);

          // TODO: send postman collection to api
          fs.writeFileSync('generated/postman-collection.json', JSON.stringify(postmanCollectionJson, null, 2))
          console.log('Postman collection generated at : generated/postman-collection.json ')
        } catch (e) {
          console.error('operation with json failed', e)
        }
      }
    },
  )

// NOTE: hack to disable (unselect) all optional query params in postman collection
// so that requests with optional params work directly in postman
// openapi-to-postmanv2 doesn't seem to provide an ootb way to do this
// const unselectOptionalQueryParams = (items) => {
//   for (const item of items) {
//     if (Array.isArray(item)) {
//       item.forEach((o) => {
//         if (o.item) unselectOptionalQueryParams(o.item);

//         if (o.url && o.url.query) {
//           const allQueries = o.url.query.map((q) => !q.description.toLowerCase().startsWith("(Required)".toLowerCase()) ? { ...q, disabled: true } : q)
//           o.url.query = allQueries;
//         }

// TODO: consider "parameters" also for unselcting optional query params
//       })
//     }
//   }

//   return items;
// }
