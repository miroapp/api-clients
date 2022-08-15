#!/usr/bin/env node

import fetch from 'node-fetch'

const apis = [
  'https://api.miro.com/api-docs/platform',
  'https://api.miro.com/api-docs/platform-containers',
  'https://api.miro.com/api-docs/platform-tags',
  'https://api.miro.com/api-docs/enterprise',
  'https://miro.com/api/v1/scim/openapi.json',
]

async function getSpec(url) {
  const response = await fetch(url)
  const spec = await response.json()

  // some specs are double encoded so we need to JSON.parse again
  if (typeof spec === 'string') {
    return JSON.parse(spec)
  }
  return spec
}

const specs = await Promise.all(apis.map(getSpec))

// console.log(specs)

const mergedSpec = specs.reduce((acc, spec) => {
  return {
    ...acc,
    paths: {
      ...acc.paths,
      ...spec.paths,
    },
    components: {
      ...acc.components,
      schemas: {
        ...acc.components.schemas,
        ...(spec.components?.schemas || {}),
      }
    },
  }
}, {
    openapi: '3.0.1',
    info: {
      description: 'Miro API',
      title: 'Miro API',
      version: '0.1'
    },
    servers: [ { url: 'https://api.miro.com/' } ],
    components: {
      schemas: {},
      securitySchemes: {
        oAuth2AuthCode: {
          type: "oauth2",
          description: "For more information, see https://developers.miro.com/reference/authorization-flow-for-expiring-tokens",
          flows: {
            authorizationCode: {
              authorizationUrl: "https://miro.com/oauth/authorize",
              tokenUrl: "https://api.miro.com/v1/oauth/token",
              scopes: {
                "boards:read": "Retrieve information about boards, board members, or items",
                "boards:write": "Create, update, or delete boards, board members, or items",
                "microphone:listen": "Access a user's microphone to record audio in an iFrame",
                "screen:record": "Access a user's screen to record it in an iFrame",
                "webcam:record": "Allows an iFrame to access a user's camera to record video",
                "organizations:read": "Read information about the organization, such as name, plan, number of licenses, organization settings, or organization members.",
                "organizations:teams:read": "Read team information, such as the list of teams, team settings, team members, for an organization.",
                "organizations:teams:write": "Create or delete teams, update team information, team settings, team members, for an organization."
              }
            }
          }
        },
      }
    }
  })

console.log(JSON.stringify(mergedSpec, null, 2))
