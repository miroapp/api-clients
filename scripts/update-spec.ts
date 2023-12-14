#!/usr/bin/env tsx
import { readFile } from 'fs/promises'
import isEqual from 'lodash/isEqual'
import { load } from 'js-yaml'
import glob from 'fast-glob'
import { Spec, baseSpecification } from './base-spec'
import fs from 'fs';
import { writeFile } from 'fs/promises';
import { fixDescriptionLinks, removeMultipleTagsFromEndpoints, mergeWithoutConflict } from './utils'



export const updateSpec = async (specFiles = ['./spec/**/*.yaml']): Promise<Spec> => {

  const baseYml = await glob("./spec/base.yaml");

  const apis = await glob(specFiles[0]);

  apis.push(baseYml[0]);


  async function getSpecsForApi(fileName: string) {
    if (fileName) {
      load(await readFile(fileName, { encoding: 'utf8' }));
      return load(await readFile(fileName, { encoding: 'utf8' }))
    }
  }

  const specs = (await Promise.all(apis.map(getSpecsForApi))).flat() as Spec[]

  fs.writeFileSync("specs.json", JSON.stringify(specs));
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
          try {
            if (existingDefinition && isEqual(existingDefinition, newSchema)) {
              newKey = `${key}${specTitle}`
              specPathsDef = JSON.parse(
                JSON.stringify(specPathsDef).replaceAll(`"#/components/schemas/${key}"`, `"#/components/schemas/${newKey}"`),
              )
            }
          } catch (e) {
            console.log(" error .... ", e);
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
  async function processOAS(files: string[]) {
    if (files && !files.length) { console.log("No files found to process"); return; }
    const mergedSpec = await updateSpec(files);
    writeSpecToFile(mergedSpec);
  }
  processOAS(['./spec/**/*.yaml']);
} catch (e) {
  console.log('error while processing specs', e);
}
