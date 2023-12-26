import {specWithoutExample, specWithOnlyComponents, specModified, liveCollection} from './spec'
import {traverseOAS} from '../utils/traverseOAS'
import {traverseComponents} from '../utils/traverseComponents'
import convertToPostmanCollection from '../utils/convertToPostmanCollection'
import fs from 'fs'

describe('Add default values as example', () => {
  it('should add example to schema when no default value or example is present', () => {
    const modifiedOAS = traverseOAS(specWithoutExample)
    expect(modifiedOAS?.paths['/v1/oauth/revoke']?.post?.parameters?.[0]?.schema?.example).toEqual('{{access_token}}')
  })
})

describe('Add Default Values to components', () => {
  it('should not change the example value', () => {
    const modifiedOAS = traverseComponents(specWithOnlyComponents)
    console.log(modifiedOAS)
    const original = specWithOnlyComponents.components.schemas['AppCardDataChanges'].properties.description.example
    expect(modifiedOAS.components.schemas['AppCardDataChanges'].properties.description.example).toBe(original)
  })

  it('should add example where missing', () => {
    const modifiedOAS = traverseComponents(specWithOnlyComponents)
    console.log(modifiedOAS)
    const statusEnums = specWithOnlyComponents.components.schemas['AppCardDataChanges'].properties.status.enum
    expect(modifiedOAS.components.schemas['AppCardDataChanges'].properties.status.example).toBe(statusEnums[0])
  })

  it('postman collection is generated based on tags', () => {
    convertToPostmanCollection({oas: specModified})
    fs.readFile('generated/postman-collection.json', 'utf8', function (err, data) {
      if (err) console.log("couldn't read file at generated/postman-collection.json")
      const postmanCollectionJson = JSON.parse(data)
      expect(postmanCollectionJson.item.length).toBe(29)
    })
  })
})

describe('Test against live collection', () => {
  let postmanCollectionJson = {event: [], variable: [], auth: {type: 'bearer'}}
  beforeEach(() => {
    fs.readFile('generated/postman-collection.json', 'utf8', function (err, data) {
      postmanCollectionJson = JSON.parse(data)
    })
  })
  it('should have event, variable and auth fields', () => {
    convertToPostmanCollection({oas: specModified})
    fs.readFile('generated/postman-collection.json', 'utf8', function (err, data) {
      if (err) console.log("couldn't read file at generated/postman-collection.json")
      expect(postmanCollectionJson.event.length).toBe(liveCollection.event.length)
      expect(postmanCollectionJson.variable.length).toBe(liveCollection.variable.length)
      expect(postmanCollectionJson.auth.type).toBe(liveCollection.auth.type)
      expect(JSON.stringify(postmanCollectionJson.auth)).toBe(JSON.stringify(liveCollection.auth))
    })
  })

  it('should have (at least) the same apis as the live one ', () => {
    convertToPostmanCollection({oas: specModified})
    fs.readFile('generated/postman-collection.json', 'utf8', function (err, data) {
      if (err) console.log("couldn't read file at generated/postman-collection.json")
      const postmanCollectionJson = JSON.parse(data)
      const postmanCollectionJsonNames = new Set(postmanCollectionJson.item.map((item) => item.name))
      liveCollection.item.forEach((item: any) => {
        expect(postmanCollectionJsonNames.has(item.name)).toBe(true)
      })
      expect(postmanCollectionJson.event.length).toBe(2)
      expect(postmanCollectionJson.variable.length).toBe(3)
    })
  })
})

// TODO: org_id/ apis are there in experimental and enterprise board export , both /v2/orgs/{org_id}/boards/export/jobs: (dupes)
