#!/usr/bin/env tsx
import { readFile } from 'fs/promises'
import isEqual from 'lodash/isEqual'
import { load } from 'js-yaml'
import glob from 'fast-glob'
import { Spec, baseSpecification } from './base-spec'
import { writeFile } from 'fs/promises';
import { fixDescriptionLinks, removeMultipleTagsFromEndpoints, mergeWithoutConflict } from './utils'

// NOTE: hard coding these files again to avoid inclusion of all yaml files.
// Using glob includes "enterprise-beta-apis.yaml" and "enterprise-audit-logs.yaml" which have duplicated apis that throw error
const apis = [
  './spec/public-api/platform.yaml',
  './spec/public-api/platform-tags.yaml',
  './spec/public-api/platform-experimental.yaml',
  './spec/public-api/platform-containers.yaml',
  './spec/public-api/platform-containers-experimental.yaml',
  './spec/public-api/platform-items-bulk.yaml',
  './spec/enterprise/enterprise-teams.yaml',
  './spec/enterprise/enterprise-organizations.yaml',
  './spec/enterprise/enterprise-board-classification.yaml',
  './spec/enterprise/enterprise-board-export.yaml',
  './spec/enterprise/enterprise-projects.yaml',
];

export const updateSpec = async (): Promise<Spec> => {

  const baseYml = await glob("./spec/base.yaml");

  apis.push(baseYml[0]);


  async function getSpecsForApi(fileName: string) {
    if (fileName) {
      load(await readFile(fileName, { encoding: 'utf8' }));
      return load(await readFile(fileName, { encoding: 'utf8' }))
    }
  }

  const specs = (await Promise.all(apis.map(getSpecsForApi))).flat() as Spec[]

  let mergedSpec = baseSpecification;
  try {
    mergedSpec = fixDescriptionLinks(
      // Create a single spec file that merges all endpoints, schemas, parameters
      // from all individual spec files
      specs.reduce<Spec>((acc: Spec, spec: Spec): Spec => {
        if (spec && spec?.info?.summary) { // summary is used in base.yml to identify it from other yaml files (to extract the postman collection description)
          baseSpecification.info = {
            ...baseSpecification.info,
            title: spec.info.title,
            description: spec.info.description,
            version: spec.info.version
          }
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
            const newKey = key.replace('boards/{board_id', 'boards/{board_id_' + specTitle);
            const pathConfig = JSON.parse(JSON.stringify(spec.paths[key]).replaceAll('board_id', 'board_id_' + specTitle))
            delete spec.paths[key]
            spec.paths[newKey] = pathConfig
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

  } catch (e) {
    console.log('error while merging specs into one file', e)
  } finally {
    return mergedSpec;
  }

}

export const writeSpecToFile = async (spec: Spec) => {
  try {
    await writeFile('packages/generator/spec.json', JSON.stringify(spec, null, 2))
  } catch (e) {
    console.log('error while writing spec to file', e)
  }
}

try {

  const mergedSpec = await updateSpec();
  writeSpecToFile(mergedSpec);
} catch (e) {
  console.log('error while processing specs', e);
}
