#!/usr/bin/env tsx
import {readFile} from 'fs/promises'
import isEqual from 'lodash/isEqual'
import mapValues from 'lodash/mapValues'
import {load} from 'js-yaml'
import {writeFile} from 'fs/promises'
import glob from 'fast-glob'


const specsToExclude = ['./spec/enterprise/enterprise-audit-logs.yaml', './spec/enterprise/enterprise-beta-apis.yaml'];
const apis = (await glob('./spec/**/*.yaml'))
  .filter((api) => !specsToExclude.includes(api))
  // First process enterprise specs because they were first historically
  .sort((a, b) => {
    if (a.startsWith('./spec/public-api')) return -1
    return a.localeCompare(b)
  })

type Endpoint = Record<
  string,
  {
    description: string
    summary: string
    operationId: string
    parameters?: unknown
    responses?: unknown
    tags?: string[]
  }
>

interface Spec {
  paths: Record<string, Endpoint>

  components: {
    schemas: Record<string, unknown>
    parameters: Record<string, unknown>
    securitySchemes: unknown
  }
  openapi: string
  info: {
    description: string
    title: string
    version: string
  }
  servers: Array<{url: string}>
}

/*
 * Define top level metadata for the api
 */
const baseSpecification: Spec = {
  openapi: '3.0.1',
  info: {
    description: 'Miro API',
    title: 'Miro API',
    version: '0.1',
  },
  servers: [{url: 'https://api.miro.com/'}],
  paths: {
    // revoke endpoint is missing from openapi specification generated by backend,
    // we might want to add this to backend in the future
    '/v1/oauth/revoke': {
      post: {
        tags: ['tokens'],
        summary: 'Revoke token',
        description:
          'Revoke the current access token. Revoking an access token means that the access token will no longer work. When an access token is revoked, the refresh token is also revoked and no longer valid. This does not uninstall the application for the user.',

        operationId: 'revoke-token',
        parameters: [
          {
            description: 'Access token that you want to revoke',
            in: 'query',
            name: 'access_token',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          204: {
            description: 'Token revoked',
          },
          400: {
            description: 'Failed to revoke token',
          },
        },
      },
    },

    '/v1/oauth-token': {
      get: {
        tags: ['tokens'],
        summary: 'Get access token information',
        description:
          'Get information about an access token, such as the token type, scopes, team, user, token creation date and time, and the user who created the token.',

        operationId: 'token-info',
        responses: {
          200: {
            description: 'Token information',
            content: {
              'application/json': {
                schema: {
                  title: 'Token information',
                  type: 'object',
                  required: ['type', 'team', 'createdBy', 'user'],
                  properties: {
                    type: {type: 'string'},
                    organization: {
                      title: 'Organization information',
                      type: 'object',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    team: {
                      title: 'Team information',
                      type: 'object',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    createdBy: {
                      type: 'object',
                      title: 'User information',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    user: {
                      type: 'object',
                      title: 'User information',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    scopes: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid token provided',
          },
        },
      },
    },
  },
  components: {
    schemas: {},
    parameters: {},
    securitySchemes: {
      // define standard OAuth2 endpoints and scopes
      oAuth2AuthCode: {
        type: 'oauth2',
        description:
          'For more information, see https://developers.miro.com/reference/authorization-flow-for-expiring-tokens',
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://miro.com/oauth/authorize',
            tokenUrl: 'https://api.miro.com/v1/oauth/token',
            scopes: {
              'boards:read': 'Retrieve information about boards, board members, or items',
              'boards:write': 'Create, update, or delete boards, board members, or items',
              'microphone:listen': "Access a user's microphone to record audio in an iFrame",
              'screen:record': "Access a user's screen to record it in an iFrame",
              'webcam:record': "Allows an iFrame to access a user's camera to record video",
              'organizations:read':
                'Read information about the organization, such as name, plan, number of licenses, organization settings, or organization members.',
              'organizations:teams:read':
                'Read team information, such as the list of teams, team settings, team members, for an organization.',
              'organizations:teams:write':
                'Create or delete teams, update team information, team settings, team members, for an organization.',
            },
          },
        },
      },
    },
  },
}

async function getSpecsForApi(fileName: string): Promise<Spec> {
  const spec = load(await readFile(fileName, {encoding: 'utf8'})) as Spec

  // normalize components to always have schemas and parameters defined
  return {
    ...spec,
    components: {
      ...spec.components,
      schemas: spec.components.schemas || {},
      parameters: spec.components.parameters || {},
    },
  }
}

const specs = (await Promise.all(apis.map(getSpecsForApi))).flat() as Spec[]

/*
 * Tries to merge objects, if there's conflicting properties it will throw
 */
function mergeWithoutConflict(first: any, second: any) {
  for (const key of Object.keys(first)) {
    if (second[key] && !isEqual(first[key], second[key])) throw new Error('Conflict: ' + key)
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

function updateDefinitionReferences(spec: Spec, reference: string, newReference: string): Spec {
  return JSON.parse(JSON.stringify(spec).replaceAll(`"${reference}"`, `"${newReference}"`))
}

const mergedSpec = fixDescriptionLinks(
  // Create a single spec file that merges all endpoints, schemas, parameters
  // from all individual spec files
  specs.reduce<Spec>((acc: Spec, spec: Spec): Spec => {
    const specTitle = spec.info?.title?.replace(/[ ()]/g, '')

    // Deduplicate schema definitions
    for (const key of Object.keys(spec.components.schemas)) {
      const existingDefinition = acc.components.schemas[key]
      const newDefinition = spec.components.schemas[key]

      if (!existingDefinition || isEqual(existingDefinition, newDefinition)) {
        continue;
      }

      const newKey = `${key}${specTitle}`
      delete spec.components.schemas[key]
      spec.components.schemas[newKey] = newDefinition

      spec = updateDefinitionReferences(spec, `#/components/schemas/${key}`, `#/components/schemas/${newKey}`)
    }

    // Deduplicate parameter definitions
    for (const key of Object.keys(spec.components.parameters)) {
      const existingDefinition = acc.components.parameters[key]
      const newDefinition = spec.components.parameters[key]

      if (!existingDefinition || isEqual(existingDefinition, newDefinition, )) {
        continue;
      }

      const newKey = `${key}${specTitle}`
      delete spec.components.parameters[key]
      spec.components.parameters[newKey] = newDefinition

      spec = updateDefinitionReferences(spec, `#/components/parameters/${key}`, `#/components/parameters/${newKey}`)
    }

    // Deduplicate paths
    //
    // there are some endpoint definitions in the spec that have the same path
    // but define different query parameters
    for (const key of Object.keys(spec.paths)) {
      if (acc.paths[key]) {
        const newKey = key.replace('boards/{board_id', 'boards/{board_id_' + specTitle)
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
        schemas: mergeWithoutConflict(acc.components.schemas, spec.components.schemas),
        parameters: mergeWithoutConflict(acc.components.parameters, spec.components.parameters),
      },
    }
  }, baseSpecification),
)

writeFile('packages/generator/spec.json', JSON.stringify(mergedSpec, null, 2))
