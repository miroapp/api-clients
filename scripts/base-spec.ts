export type Endpoint = Record<
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

export interface Spec {
    paths: Record<string, Endpoint>

    components: {
        schemas: Record<string, unknown>
        parameters: Record<string, unknown>
        securitySchemes: unknown
    }
    openapi: string
    info: {
        description?: string
        title: string
        version: string
        summary?: string
    }
    servers: Array<{ url: string }>
}

/*
 * Define top level metadata for the api
 */
export const baseSpecification: Spec = {
    openapi: '3.0.1',
    info: {
        title: 'Miro API',
        version: '0.1'

    },
    servers: [{ url: 'https://api.miro.com/' }],
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
                                        type: { type: 'string' },
                                        organization: {
                                            title: 'Organization information',
                                            type: 'object',
                                            properties: {
                                                type: { type: 'string' },
                                                name: { type: 'string' },
                                                id: { type: 'string' },
                                            },
                                            required: ['type', 'name', 'id'],
                                        },
                                        team: {
                                            title: 'Team information',
                                            type: 'object',
                                            properties: {
                                                type: { type: 'string' },
                                                name: { type: 'string' },
                                                id: { type: 'string' },
                                            },
                                            required: ['type', 'name', 'id'],
                                        },
                                        createdBy: {
                                            type: 'object',
                                            title: 'User information',
                                            properties: {
                                                type: { type: 'string' },
                                                name: { type: 'string' },
                                                id: { type: 'string' },
                                            },
                                            required: ['type', 'name', 'id'],
                                        },
                                        user: {
                                            type: 'object',
                                            title: 'User information',
                                            properties: {
                                                type: { type: 'string' },
                                                name: { type: 'string' },
                                                id: { type: 'string' },
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
            // "auth": {
            //     "type": "bearer",
            //     "bearer": [
            //         {
            //             "key": "token",
            //             "value": "{{access_token}}",
            //             "type": "string"
            //         }
            //     ]
            // }
        }
    }
}