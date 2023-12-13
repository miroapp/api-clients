#!/usr/bin/env tsx
import { readFile } from 'fs/promises'
import isEqual from 'lodash/isEqual'
import mapValues from 'lodash/mapValues'
import { load } from 'js-yaml'
import { writeFile } from 'fs/promises'
import glob from 'fast-glob'
import { Spec, baseSpecification } from './base-spec'

const baseYml = await glob('./spec/base.yaml');
const apis = await glob('./spec/**/*.yaml')
apis.push(baseYml[0]);

async function getSpecsForApi(fileName: string) {
  load(await readFile(fileName, { encoding: 'utf8' }));
  return load(await readFile(fileName, { encoding: 'utf8' }))
}

const specs = (await Promise.all(apis.map(getSpecsForApi))).flat() as Spec[]
import fs from 'fs';

fs.writeFileSync("specs.json", JSON.stringify(specs));




/*
 * Tries to merge objects, if there's conflicting properties it will throw
 */
function mergeWithoutConflict(first: any, second: any) {
  for (const key of Object.keys(first)) {
    if (second[key] && !isEqual(first[key], second[key])) {
      throw new Error('Conflict: ' + key)
    }
  }
  return {
    ...first,
    ...second,
  }
}

/*
 * Will make sure that the links point to developer portal
 */
function fixDescriptionLinks(spec: Spec) {
  spec.paths = mapValues(spec.paths, (path) => {
    return mapValues(path, (method) => {
      if (!method.description) return method
      // correct
      method.description = method.description
        .replace(/target="_?blank"/gi, 'target=_blank')
        .replace(/href="([a-z/]+)"/gi, 'href=https://developers.miro.com$1')
      return method
    })
  })
  return spec
}

/*
 * Code generator does not support multiple tags since we have a single file for all tags
 */
function removeMultipleTagsFromEndpoints(spec: Spec) {
  Object.keys(spec.paths).forEach((path) => {
    const endpoint = spec.paths[path]
    Object.keys(endpoint).forEach((method) => {
      endpoint[method].tags = endpoint[method].tags?.slice(0, 1)
    })
  })
}

const mergedSpec = fixDescriptionLinks(
  // Create a single spec file that merges all endpoints, schemas, parameters
  // from all individual spec files
  specs.reduce<Spec>((acc: Spec, spec: Spec): Spec => {
    if (spec && spec?.info?.summary) {
      console.log("🚀 ~ file: update-spec.ts:281 ~ spec:", spec.info)
      baseSpecification.info = {
        ...baseSpecification.info,
        title: spec.info.title,
        description: spec.info.description,
        version: spec.info.version
      }
      console.log("🚀 ~ file: update-spec.ts:285 ~ baseSpecification:", baseSpecification)
    }

    const specTitle = spec.info?.title?.replace(/ |\(|\)/g, '')
    const specSchemasDef = spec.components?.schemas || {}
    const specParametersDef = spec.components?.parameters || {}
    if (!spec.paths) spec.paths = {};

    let specPathsDef = spec.paths

    // Deduplicate schema definitions
    for (const key of Object.keys(specSchemasDef)) {
      const existingDefinition = acc.components.schemas[key]
      delete acc.components.schemas[key]
      let newSchema = specSchemasDef[key]
      let newKey = key
      if (existingDefinition && isEqual(existingDefinition, newSchema)) {
        newKey = `${key}${specTitle}`
        specPathsDef = JSON.parse(
          JSON.stringify(specPathsDef).replaceAll(`"#/components/schemas/${key}"`, `"#/components/schemas/${newKey}"`),
        )
      }
      acc.components.schemas[newKey] = newSchema
    }

    // Deduplicate parameters
    for (const key of Object.keys(specParametersDef)) {
      const existingDefinition = acc.components.parameters[key]
      delete acc.components.parameters[key]
      let newSchema = specParametersDef[key]
      let newKey = key
      if (existingDefinition && isEqual(existingDefinition, newSchema)) {
        newKey = `${key}${specTitle}`
        specPathsDef = JSON.parse(
          JSON.stringify(specPathsDef).replaceAll(`"#/components/parameters/${key}"`, `"#/components/parameters/${newKey}"`),
        )
      }
      acc.components.parameters[newKey] = newSchema
    }

    // Deduplicate paths
    //
    // there are some endpoint definitions in the spec that have the same path
    // but define different query parameters

    for (const key of Object.keys(spec.paths)) {
      if (acc.paths[key]) {
        // if (key.includes('boards/{board_id')) {
        const newKey = key.replace('boards/{board_id', 'boards/{board_id_' + specTitle);
        const pathConfig = JSON.parse(JSON.stringify(spec.paths[key]).replaceAll('board_id', 'board_id_' + specTitle))
        spec.paths[newKey] = pathConfig

        // for issue with org_id dupes (it's silent right now , not sure why though 🤨 )
        // }
        // else if (key.includes('orgs/{org_id')) {
        //   const newKey = key.replace('orgs/{org_id', 'orgs/{org_id_' + specTitle)
        //   console.log("🚀 ~ file: update-spec.ts:320 ~ specTitle:", specTitle)
        //   const pathConfig = JSON.parse(JSON.stringify(spec.paths[key]).replaceAll('org_id', 'org_id_' + specTitle))
        //   spec.paths[newKey] = pathConfig
        // }

        // const newKey1 = key.replace('orgs/{org_id', 'orgs/{org_id_' + specTitle)
        delete spec.paths[key]
      }
    }

    removeMultipleTagsFromEndpoints(spec)

    return {
      ...acc,
      paths: mergeWithoutConflict(acc.paths, spec.paths),
      components: {
        ...acc.components,
        schemas: mergeWithoutConflict(acc.components.schemas, specSchemasDef),
        parameters: { ...acc.components.parameters, ...specParametersDef },
      },
    }
  }, baseSpecification),
)

writeFile('packages/generator/spec.json', JSON.stringify(mergedSpec, null, 2))
