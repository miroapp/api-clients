import {OpenAPIV3_1} from 'openapi-types'

const openAPI = {
  openapi: '3.0.1',
  info: {
    description: 'Miro API',
    title: 'Miro API',
    version: '0.1',
  },
}

export const specWithoutExample: OpenAPIV3_1.Document = {
  ...openAPI,
  servers: [
    {
      url: 'https://api.miro.com/',
    },
  ],
  paths: {
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
  },
}
export const specWithComponents1: OpenAPIV3_1.Document = {
  ...openAPI,
  components: {
    schemas: {
      AppCardCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/AppCardDataChanges',
          },
        },
      },
      AppCardDataChanges: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          status: {
            type: 'string',
            // "default": "disconnected", // NOTE: removed default value for the test case in api-clients/packages/postman/__tests__/addDefaultValues.test.js
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            default: 'sample app card item',
            description: 'A short text header to identify the app card.',
          },
        },
      },
      securitySchemes: {
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
  },
}
export const specWithComponents: OpenAPIV3_1.Document = {
  ...openAPI,
  components: {
    schemas: {
      AppCardCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/AppCardDataChanges',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      AppCardDataChanges: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          status: {
            type: 'string',
            default: 'disconnected',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            default: 'sample app card item',
            description: 'A short text header to identify the app card.',
          },
        },
      },
      AppCardItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/AppCardData',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'app_card',
          },
        },
        required: ['id', 'type'],
      },
      AppCardUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/AppCardDataChanges',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      Board: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          project: {
            $ref: '#/components/schemas/Project',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardChanges: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Description of the board.',
            maxLength: 300,
            minLength: 0,
          },
          name: {
            type: 'string',
            default: 'Untitled',
            description: 'Name for the board.',
            maxLength: 60,
            minLength: 1,
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicyChange',
          },
          teamId: {
            type: 'string',
            description: 'Unique identifier (ID) of the team where the board must be placed.',
          },
          projectId: {
            type: 'string',
            description: 'Unique identifier (ID) of the project to which the board must be added.',
          },
        },
      },
      CopyBoardChanges: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Description of the board.',
            maxLength: 300,
            minLength: 0,
          },
          name: {
            type: 'string',
            default: 'Untitled',
            description: 'Name for the board.',
            maxLength: 60,
            minLength: 1,
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicyChange',
          },
          teamId: {
            type: 'string',
            description: 'Unique identifier (ID) of the team where the board must be placed.',
          },
        },
      },
      BoardLinks: {
        type: 'object',
        description: 'Contains applicable links for the board.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the board members associated with the board.',
            example: 'http://api.miro.com/v2/boards/o9J_k1JKioQ=/members?limit=20&offset=0',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current board.',
            example: 'http://api.miro.com/v2/boards/o9J_k1JKioQ=',
          },
        },
      },
      BoardMember: {
        type: 'object',
        description:
          "Contains the current user's board membership details. The current user could be different from the board owner.",
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          role: {
            type: 'string',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, `type` returns `board_member`.',
            example: 'board_member',
          },
        },
        required: ['id', 'name', 'type'],
      },
      BoardMemberChanges: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            default: 'commenter',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
        },
      },
      BoardMemberWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          role: {
            type: 'string',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, `type` returns `board_member`.',
            example: 'board_member',
          },
        },
        required: ['id', 'name', 'type'],
      },
      BoardMembersInvite: {
        type: 'object',
        properties: {
          emails: {
            type: 'array',
            description:
              'Email IDs of the users you want to invite to the board. You can invite up to 20 members per call.',
            items: {
              type: 'string',
              example: 'member@email.com',
              description:
                'Email IDs of the users you want to invite to the board. You can invite up to 20 members per call.',
            },
            maxItems: 20,
            minItems: 1,
          },
          role: {
            type: 'string',
            default: 'commenter',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
          message: {
            type: 'string',
            description: 'The message that will be sent in the invitation email.',
            example: "Hey there! Join my board and let's collaborate on this project!",
          },
        },
        required: ['emails'],
      },
      BoardMembersPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/BoardMember',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: 0,
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
          },
        },
      },
      BoardPermissionsPolicy: {
        type: 'object',
        description: 'Defines the permissions policies for the board.',
        properties: {
          collaborationToolsStartAccess: {
            type: 'string',
            default: 'all_editors',
            description:
              'Defines who can start or stop timer, voting, video chat, screen sharing, attention management. Others will only be able to join. To change the value for the `collaborationToolsStartAccess` parameter, contact Miro Customer Support.',
            enum: ['all_editors', 'board_owners_and_coowners'],
          },
          copyAccess: {
            type: 'string',
            default: 'anyone',
            description:
              'Defines who can copy the board, copy objects, download images, and save the board as a template or PDF.',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner'],
          },
          sharingAccess: {
            type: 'string',
            default: 'team_members_with_editing_rights',
            description:
              'Defines who can change access and invite users to this board. To change the value for the `sharingAccess` parameter, contact Miro Customer Support.',
            enum: ['team_members_with_editing_rights', 'owner_and_coowners'],
          },
        },
      },
      BoardPolicy: {
        type: 'object',
        description: 'Defines the permissions policies and sharing policies for the board.',
        properties: {
          permissionsPolicy: {
            $ref: '#/components/schemas/BoardPermissionsPolicy',
          },
          sharingPolicy: {
            $ref: '#/components/schemas/BoardSharingPolicy',
          },
        },
      },
      BoardPolicyChange: {
        type: 'object',
        description: 'Defines the permissions policies and sharing policies for the board.',
        properties: {
          permissionsPolicy: {
            $ref: '#/components/schemas/BoardPermissionsPolicy',
          },
          sharingPolicy: {
            $ref: '#/components/schemas/BoardSharingPolicyChange',
          },
        },
      },
      BoardSharingPolicy: {
        type: 'object',
        description:
          'Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.',
        properties: {
          access: {
            type: 'string',
            description: 'Defines the public-level access to the board.',
            enum: ['private', 'view', 'edit', 'comment'],
          },
          inviteToAccountAndBoardLinkAccess: {
            type: 'string',
            default: 'no_access',
            description:
              'Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access`.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner', 'guest', 'no_access'],
          },
          organizationAccess: {
            type: 'string',
            default: 'private',
            description:
              'Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          teamAccess: {
            type: 'string',
            description: 'Defines the team-level access to the board.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
        },
      },
      BoardSharingPolicyChange: {
        type: 'object',
        description:
          'Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.',
        properties: {
          access: {
            type: 'string',
            default: 'private',
            description: 'Defines the public-level access to the board.',
            enum: ['private', 'view', 'edit', 'comment'],
          },
          inviteToAccountAndBoardLinkAccess: {
            type: 'string',
            default: 'no_access',
            description:
              'Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access` regardless of the value that you assign for this parameter.',
            enum: ['viewer', 'commenter', 'editor', 'no_access'],
          },
          organizationAccess: {
            type: 'string',
            default: 'private',
            description:
              'Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          teamAccess: {
            type: 'string',
            default: 'private',
            description: 'Defines the team-level access to the board.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
        },
      },
      BoardWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          project: {
            $ref: '#/components/schemas/Project',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          links: {
            $ref: '#/components/schemas/BoardLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardWithLinksAndWithoutProject: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          links: {
            $ref: '#/components/schemas/BoardLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardsPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Board',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: 0,
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
          },
        },
      },
      Caption: {
        type: 'object',
        description: "Contains the connector's caption data, such as content and its position.",
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the connector. Supports inline HTML tags.',
            example: '<p>Caption text</p>',
            maxLength: 200,
            minLength: 0,
          },
          position: {
            type: 'string',
            description:
              'The relative position of the text on the connector, in percentage, minimum 0%, maximum 100%. With 50% value, the text will be placed in the middle of the connector line. Default: 50%',
            example: '50%',
          },
          textAlignVertical: {
            type: 'string',
            description: 'The vertical position of the text on the connector. Default: middle',
            enum: ['top', 'middle', 'bottom'],
          },
        },
        required: ['content'],
      },
      CardCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      CardItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'card',
          },
        },
        required: ['id', 'type'],
      },
      CardUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ConnectorChangesData: {
        type: 'object',
        description: 'If both are provided, startItem.id must be different from endItem.id',
        properties: {
          startItem: {
            $ref: '#/components/schemas/ItemConnectionChangesData',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionChangesData',
          },
          shape: {
            type: 'string',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
          },
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
            maxItems: 20,
            maxLength: 20,
            minItems: 0,
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
        },
      },
      ConnectorCreationData: {
        type: 'object',
        description: 'startItem.id must be different from endItem.id',
        properties: {
          startItem: {
            $ref: '#/components/schemas/ItemConnectionCreationData',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionCreationData',
          },
          shape: {
            type: 'string',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
          },
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
            maxItems: 20,
            maxLength: 20,
            minItems: 0,
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
        },
        required: ['endItem', 'startItem'],
      },
      ConnectorStyle: {
        type: 'object',
        description: 'Contains information about the style of a connector, such as the color or caption font size',
        properties: {
          color: {
            type: 'string',
            description: 'Hex value representing the color for the captions on the connector. Default: `#1a1a1a`',
            example: '#9510ac',
          },
          endStrokeCap: {
            type: 'string',
            description: 'The decoration cap of the connector end, like an arrow or circle. Default: stealth.',
            enum: [
              'none',
              'stealth',
              'diamond',
              'diamond_filled',
              'oval',
              'oval_filled',
              'arrow',
              'triangle',
              'triangle_filled',
              'erd_one',
              'erd_many',
              'erd_only_one',
              'erd_zero_or_one',
              'erd_one_or_many',
              'erd_zero_or_many',
            ],
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the captions on the connector. Default: 14',
            example: '15',
            maximum: 288,
            minimum: 10,
          },
          startStrokeCap: {
            type: 'string',
            description: 'The decoration cap of the connector end, like an arrow or circle. Default: none.',
            enum: [
              'none',
              'stealth',
              'diamond',
              'diamond_filled',
              'oval',
              'oval_filled',
              'arrow',
              'triangle',
              'triangle_filled',
              'erd_one',
              'erd_many',
              'erd_only_one',
              'erd_zero_or_one',
              'erd_one_or_many',
              'erd_zero_or_many',
            ],
          },
          strokeColor: {
            type: 'string',
            description: 'Hex value of the color of the connector line. Default: #000000.',
            example: '#2d9bf0',
          },
          strokeStyle: {
            type: 'string',
            description: 'The stroke pattern of the connector line. Default: normal.',
            enum: ['normal', 'dotted', 'dashed'],
          },
          strokeWidth: {
            type: 'string',
            description: 'The thickness of the connector line, in dp. Default: 1.0.',
            example: '2.0',
            maximum: 24,
            minimum: 1,
          },
          textOrientation: {
            type: 'string',
            description: 'The captions orientation relatively to the connector line curvature. Default: aligned.',
            enum: ['horizontal', 'aligned'],
          },
        },
      },
      ConnectorWithLinks: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the connector was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionWithLinks',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a connector.',
            example: '3458764517517818867',
          },
          isSupported: {
            type: 'boolean',
            description:
              'Indicates whether the connector is supported at the moment. If this parameter returns `false`, we do not support the connector at the moment. We do not allow updates for unsupported connectors and we might not return all data about the connector, such as intermediate points and connection points to the canvas.',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the connector was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          shape: {
            type: 'string',
            default: 'curved',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
          },
          startItem: {
            $ref: '#/components/schemas/ItemConnectionWithLinks',
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
          type: {
            type: 'string',
            description: 'Type of board object that is returned.',
          },
        },
        required: ['id'],
      },
      ConnectorsCursorPaged: {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/ConnectorWithLinks',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      DocumentCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/DocumentUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      DocumentItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/DocumentData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'document',
          },
        },
        required: ['id', 'type'],
      },
      DocumentUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/DocumentUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      DocumentUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
          },
          url: {
            type: 'string',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
      },
      EmbedCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/EmbedUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      EmbedItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/EmbedData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'embed',
          },
        },
        required: ['id', 'type'],
      },
      EmbedUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/EmbedUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      EmbedUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      FixedRatioGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item, such as its width or rotation. You can set either the width or height, you cannot set both the width and height at the same time.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
        },
      },
      FixedRatioNoRotationGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item. You can set either the width or height. You cannot set both the width and height at the same time.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
          },
        },
      },
      GenericItemUpdate: {
        type: 'object',
        properties: {
          parent: {
            $ref: '#/components/schemas/Parent',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
        },
      },
      ImageCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ImageUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      ImageItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/ImageData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'image',
          },
        },
        required: ['id', 'type'],
      },
      ImageUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ImageUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      InvitationError: {
        type: 'object',
        description: 'Contains information about the invites that failed.',
        properties: {
          email: {
            type: 'string',
            description: 'Email ID for which the invitation failed.',
            example: 'john.smith.demo@miro.com',
          },
          reason: {
            type: 'string',
            description: 'Reason why the invitation failed.',
            example: 'INVITATION_FAILED',
          },
        },
      },
      InvitationResult: {
        type: 'object',
        properties: {
          failed: {
            type: 'array',
            description: 'Contains information about the invites that failed.',
            items: {
              $ref: '#/components/schemas/InvitationError',
            },
          },
          successful: {
            type: 'array',
            description: 'Contains information about the invites that were successfully sent.',
            example: 3074457350804038700,
            items: {
              type: 'integer',
              format: 'int64',
              description: 'Contains information about the invites that were successfully sent.',
              example: 3074457350804038700,
            },
          },
        },
      },
      ItemConnectionChangesData: {
        type: 'object',
        description:
          'The ending point of the connector. If startItem is also provided, endItem.id must be different from startItem.id',
        properties: {
          id: {
            type: 'string',
            description:
              'Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.',
            example: '3458764517517818867',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
          snapTo: {
            type: 'string',
            description:
              'The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default.',
            enum: ['auto', 'top', 'right', 'bottom', 'left'],
          },
        },
      },
      ItemConnectionCreationData: {
        type: 'object',
        description: 'The end point of the connector. endItem.id must be different from startItem.id',
        properties: {
          id: {
            type: 'string',
            description:
              'Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.',
            example: '3458764517517818867',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
          snapTo: {
            type: 'string',
            description:
              'The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default.',
            enum: ['auto', 'top', 'right', 'bottom', 'left'],
          },
        },
      },
      ItemConnectionWithLinks: {
        type: 'object',
        description: 'The starting point of the connector.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the item the connector is attached to.',
            example: '3458764517517818867',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
        },
      },
      RelativeOffset: {
        type: 'object',
        description:
          'The relative position of the point on an item where the connector is attached. Position with x=0% and y=0% correspond to the top-left corner of the item, x=100% and y=100% correspond to the right-bottom corner.',
        properties: {
          x: {
            type: 'string',
            description:
              'X-axis relative coordinate of the location where the connector connects with an item, in percentage, minimum 0%, maximum 100%.',
            example: '50%',
          },
          y: {
            type: 'string',
            description:
              'Y-axis relative coordinate of the location where the connector connects with an item, in percentage, minimum 0%, maximum 100%.',
            example: '0%',
          },
        },
      },
      StickyNoteCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      StickyNoteItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'sticky_note',
          },
        },
        required: ['id', 'type'],
      },
      StickyNoteUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      TextCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/WidthOnlyAdjustableGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      TextItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'text',
          },
        },
        required: ['id', 'type'],
      },
      TextUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/WidthOnlyAdjustableGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      UserInfoShort: {
        type: 'object',
        description: 'Contains information about the user who created the board.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
        required: ['id', 'name', 'type'],
      },
      WidthOnlyAdjustableGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item, such as its width or rotation. You can only specify the width of the text item as the height is dynamically updated based on the content.',
        properties: {
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description:
              'Width of the item, in pixels.\nThe minimum `width` of a `text` widget is relative to the font size of the `text` widget. The width must be at least 1.7 times wider than the font size.\nFor example, if the font size of the `text` item is `14`, the minimum `width` is `24`.',
          },
        },
      },
      AppCardDataPlatformTags: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          owned: {
            type: 'boolean',
            description: 'Defines whether the card is owned by the application making the call.',
          },
          status: {
            type: 'string',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the app card.',
            example: 'sample app card item',
          },
        },
      },
      CustomFieldPlatformTags: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      DocumentDataPlatformTags: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      EmbedData: {
        type: 'object',
        properties: {
          contentType: {
            type: 'string',
            description: "Type of the embedded item's content.",
            example: 'video',
          },
          description: {
            type: 'string',
            description: 'Short description of the embedded item.',
            example:
              'So this is how to organize your life with Miro (a virtual whiteboard) for collaboration, brainstorming, and project management. Students, designers, agile en...',
          },
          html: {
            type: 'string',
            description: 'Html code of the embedded item.',
            example:
              '<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=...&display_name=YouTube&url=...&schema=youtube\\" width=\\"854\\" height=\\"480\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>',
          },
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
          },
          previewUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          providerName: {
            type: 'string',
            description: "Name of the content's provider.",
            example: 'YouTube',
          },
          providerUrl: {
            type: 'string',
            description: "Url of the content's provider.",
            example: 'https://www.youtube.com/',
          },
          title: {
            type: 'string',
            description: 'Title of the embedded item.',
            example: 'HOW TO ORGANIZE YOUR LIFE WITH MIRO! ✏ Virtual Whiteboard Tour',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      EmptyStyle: {
        type: 'object',
        description: 'Contains information about the style of an item, such as the color, font, or border style.',
      },
      FrameDataPlatformTags: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom', 'desktop', 'phone', 'tablet', 'a4', 'letter', 'ratio_1x1', 'ratio_4x3', 'ratio_16x9'],
          },
          title: {
            type: 'string',
            description: 'Title of the frame. This title appears at the top of the frame.',
            example: 'Sample frame title',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform', 'heap', 'grid', 'rows', 'columns'],
          },
        },
      },
      GeometryPlatformTags: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      GetTagsResponse: {
        type: 'object',
        properties: {
          tags: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Tag',
            },
          },
        },
      },
      ImageDataPlatformTags: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      ItemPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericItem',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: 0,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          type: {
            type: 'string',
          },
        },
      },
      PageLinksPlatformTags: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      SelfLinkPlatformTags: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      StickyNoteDataPlatformTags: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      Tag: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Background color of the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
            example: 'red',
          },
          id: {
            type: 'string',
            description: 'Unique identifier of the tag.',
            example: 3074457363306854000,
          },
          title: {
            type: 'string',
            description: 'Text of the tag',
            example: 'delayed',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `tag`.',
          },
        },
        required: ['fillColor', 'id', 'title', 'type'],
      },
      TagCreateRequest: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            default: 'red',
            description: 'Fill color for the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
          },
          title: {
            type: 'string',
            description: 'Text of the tag. Case-sensitive. Must be unique.',
            example: 'to do',
            maxLength: 120,
            minLength: 0,
          },
        },
        required: ['title'],
      },
      TagUpdateRequest: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            default: 'red',
            description: 'Fill color for the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
          },
          title: {
            type: 'string',
            description: 'Text of the tag. Case-sensitive. Must be unique.',
            example: 'done',
            maxLength: 120,
            minLength: 0,
          },
        },
      },
      TagWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier of the tag.',
            example: 3074457363306854000,
          },
          title: {
            type: 'string',
            description: 'Text of the tag',
            example: 'delayed',
          },
          fillColor: {
            type: 'string',
            description: 'Background color of the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
            example: 'red',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `tag`.',
          },
        },
        required: ['fillColor', 'id', 'title', 'type'],
      },
      TagsPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Tag',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: 0,
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
          },
        },
      },
      TextDataPlatformTags: {
        type: 'object',
        description:
          'Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the text item.',
            example: 'Hello',
          },
        },
        required: ['content'],
      },
      WidgetDataOutputPlatformTags: {
        type: 'object',
        description: 'Contains the item data, such as the item title, content, or description.',
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
          {
            $ref: '#/components/schemas/EmbedData',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/ImageData',
          },
          {
            $ref: '#/components/schemas/DocumentData',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/FrameData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
        ],
      },
      createdByPlatformTags: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedByPlatformTags: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      DocumentData: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      ImageData: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      BoardSubscription: {
        type: 'object',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://api.asana.com/v2/webhooks_endpoint',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was created.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          data: {
            $ref: '#/components/schemas/BoardSubscriptionData',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a webhook subscription.',
            example: '99c152bb-8259-4c7a-96d8-ad8eef47ecd4',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled', 'lost_access'],
          },
          type: {
            type: 'string',
            description: 'The type of object associated with the webhook subscription.',
            example: 'board_subscription',
          },
        },
      },
      BoardSubscriptionData: {
        type: 'object',
        description:
          'Contains information about a webhook subscription, such as the board ID associated with the webhook subscription, the date and time when the webhook subscription was last updated, and the type of board item that the subscription is associated with.',
        properties: {
          boardId: {
            type: 'string',
            description:
              '[Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) with which the webhook subscription is associated.',
            example: 'uXjVOfjmfkE=',
          },
        },
      },
      CreateBoardSubscriptionRequest: {
        type: 'object',
        description:
          'Contains the board ID associated with the webhook subscription, the webhook callback URL, and the status of the webhook subscription.',
        properties: {
          boardId: {
            type: 'string',
            description:
              '[Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to associate with the webhook subscription.',
          },
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://yourwebhooklistener.com/v2/webhooks_endpoint',
            maxLength: 256,
            minLength: 8,
            pattern: '^https:\\/\\/(.*)',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription.`enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled'],
          },
        },
      },
      GenericSubscription: {
        type: 'object',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://api.asana.com/v2/webhooks_endpoint',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was created.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          data: {
            $ref: '#/components/schemas/SubscriptionData',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a webhook subscription.',
            example: '99c152bb-8259-4c7a-96d8-ad8eef47ecd4',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled', 'lost_access'],
          },
          type: {
            type: 'string',
            description: 'The type of object associated with the webhook subscription.',
            example: 'board_subscription',
          },
        },
      },
      GenericSubscriptionsCursorPaged: {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericSubscription',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
          },
        },
      },
      SubscriptionData: {
        type: 'object',
        description:
          'Contains information about a webhook subscription, such as the board ID that the webhook subscription is associated with.',
        oneOf: [
          {
            $ref: '#/components/schemas/BoardSubscriptionData',
          },
        ],
      },
      UpdateBoardSubscriptionRequest: {
        type: 'object',
        description: 'Contains updated information about a subscription.',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://yourwebhooklistener.com/v2/webhooks_endpoint',
            maxLength: 256,
            minLength: 8,
            pattern: '^https:\\/\\/(.*)',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled'],
          },
        },
      },
      PageLinksPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      MindmapWidgetDataOutput: {
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
        description: 'Contains the mind map node data, such as the item title, content, or description.',
      },
      SelfLinkPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      ShapeCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ShapeDataForCreate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForCreate',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ShapeDataForCreate: {
        type: 'object',
        description: 'Contains shape item data, such as the content or the type of the shape.',
        properties: {
          content: {
            type: 'string',
            description:
              'The text you want to display on the shape.\n<br>**Not supported for shapes:**\n<ul>\n  <li>flow_chart_or</li>\n  <li>flow_chart_summing_junction</li>\n</ul>',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description:
              'Defines the geometric shape of the item when it is rendered on the board. <details>\n  <summary>Basic shapes</summary>\n  <ul>\n    <li>rectangle</li>\n    <li>round_rectangle</li>\n    <li>circle</li>\n    <li>triangle</li>\n    <li>rhombus</li>\n    <li>parallelogram</li>\n    <li>trapezoid</li>\n    <li>pentagon</li>\n    <li>hexagon</li>\n    <li>octagon</li>\n    <li>wedge_round_rectangle_callout</li>\n    <li>star</li>\n    <li>flow_chart_predefined_process</li>\n    <li>cloud</li>\n    <li>cross</li>\n    <li>can</li>\n    <li>right_arrow</li>\n    <li>left_arrow</li>\n    <li>left_right_arrow</li>\n    <li>left_brace</li>\n    <li>right_brace</li>\n  </ul>\n</details>\n<details>\n  <summary>Flowchart shapes</summary>\n  <ul>\n    <li>flow_chart_connector</li>\n    <li>flow_chart_magnetic_disk</li>\n    <li>flow_chart_input_output</li>\n    <li>flow_chart_decision</li>\n    <li>flow_chart_delay</li>\n    <li>flow_chart_display</li>\n    <li>flow_chart_document</li>\n    <li>flow_chart_magnetic_drum</li>\n    <li>flow_chart_internal_storage</li>\n    <li>flow_chart_manual_input</li>\n    <li>flow_chart_manual_operation</li>\n    <li>flow_chart_merge</li>\n    <li>flow_chart_multidocuments</li>\n    <li>flow_chart_note_curly_left</li>\n    <li>flow_chart_note_curly_right</li>\n    <li>flow_chart_note_square</li>\n    <li>flow_chart_offpage_connector</li>\n    <li>flow_chart_or</li>\n    <li>flow_chart_predefined_process_2</li>\n    <li>flow_chart_preparation</li>\n    <li>flow_chart_process</li>\n    <li>flow_chart_online_storage</li>\n    <li>flow_chart_summing_junction</li>\n    <li>flow_chart_terminator</li>\n  </ul>\n</details>',
          },
        },
      },
      ShapeDataForUpdate: {
        type: 'object',
        description: 'Contains shape item data, such as the content or the type of the shape.',
        properties: {
          content: {
            type: 'string',
            description:
              'The text you want to display on the shape.\n**Note: When updating a shape type to one of the types below, existing `content` will be lost.**\n<br>**Not supported for shapes:**\n<ul>\n  <li>flow_chart_or</li>\n  <li>flow_chart_summing_junction</li>\n</ul>',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description:
              'Defines the geometric shape of the item when it is rendered on the board. <details>\n  <summary>Basic shapes</summary>\n  <ul>\n    <li>rectangle</li>\n    <li>round_rectangle</li>\n    <li>circle</li>\n    <li>triangle</li>\n    <li>rhombus</li>\n    <li>parallelogram</li>\n    <li>trapezoid</li>\n    <li>pentagon</li>\n    <li>hexagon</li>\n    <li>octagon</li>\n    <li>wedge_round_rectangle_callout</li>\n    <li>star</li>\n    <li>flow_chart_predefined_process</li>\n    <li>cloud</li>\n    <li>cross</li>\n    <li>can</li>\n    <li>right_arrow</li>\n    <li>left_arrow</li>\n    <li>left_right_arrow</li>\n    <li>left_brace</li>\n    <li>right_brace</li>\n  </ul>\n</details>\n<details>\n  <summary>Flowchart shapes</summary>\n  <ul>\n    <li>flow_chart_connector</li>\n    <li>flow_chart_magnetic_disk</li>\n    <li>flow_chart_input_output</li>\n    <li>flow_chart_decision</li>\n    <li>flow_chart_delay</li>\n    <li>flow_chart_display</li>\n    <li>flow_chart_document</li>\n    <li>flow_chart_magnetic_drum</li>\n    <li>flow_chart_internal_storage</li>\n    <li>flow_chart_manual_input</li>\n    <li>flow_chart_manual_operation</li>\n    <li>flow_chart_merge</li>\n    <li>flow_chart_multidocuments</li>\n    <li>flow_chart_note_curly_left</li>\n    <li>flow_chart_note_curly_right</li>\n    <li>flow_chart_note_square</li>\n    <li>flow_chart_offpage_connector</li>\n    <li>flow_chart_or</li>\n    <li>flow_chart_predefined_process_2</li>\n    <li>flow_chart_preparation</li>\n    <li>flow_chart_process</li>\n    <li>flow_chart_online_storage</li>\n    <li>flow_chart_summing_junction</li>\n    <li>flow_chart_terminator</li>\n  </ul>\n</details>',
          },
        },
      },
      ShapeItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: '3458764517517819000',
          },
          data: {
            $ref: '#/components/schemas/ShapeDataForCreate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForCreate',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'shape',
          },
        },
        required: ['id', 'type'],
      },
      ShapeStyleForCreate: {
        type: 'object',
        description:
          'Contains information about the shape style, such as the border color or opacity. <br> All properties in style object are supported for shape types aren\'t listed below. <br> <table>\n  <tr>\n    <th align="left">Shape type</th>\n    <th align="left">Unsupported properties</th>\n  </tr>\n  <tr>\n    <td>flow_chart_or</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_summing_junction</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_left</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_right</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_square</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n</table>',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault:  `Flowchart` shapes: `1.0`. `Basic` shapes: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided.\n',
            maximum: 1,
            minimum: 0,
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
          },
          textAlign: {
            type: 'string',
            description:
              'Defines how the shape text is horizontally aligned.\nDefault: \nFlowchart shapes: `center`.\nBasic shapes: `left`.\n\n`unknown` is returned for unsupported shapes.',
            enum: ['left', 'right', 'center', 'unknown'],
          },
          textAlignVertical: {
            type: 'string',
            description:
              'Defines how the shape text is vertically aligned.\nDefault: \nFlowchart shapes: `middle`.\nBasic shapes: `top`.\n\n`unknown` is returned for unsupported shapes.',
            enum: ['top', 'middle', 'bottom', 'unknown'],
          },
        },
      },
      ShapeStyleForUpdate: {
        type: 'object',
        description:
          'Contains information about the shape style, such as the border color or opacity. <br> All properties in style object are supported for shape types aren\'t listed below. <br> <table>\n  <tr>\n    <th align="left">Shape type</th>\n    <th align="left">Unsupported properties</th>\n  </tr>\n  <tr>\n    <td>flow_chart_or</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_summing_junction</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_left</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_right</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_square</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n</table>',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault:  Flowchart shapes: `1.0`. Basic shapes: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided.\n',
            maximum: 1,
            minimum: 0,
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
          },
          textAlign: {
            type: 'string',
            description:
              'Defines how the sticky note text is horizontally aligned.\nDefault: \nFlowchart shapes: `center`.\nBasic shapes: `left`.',
            enum: ['left', 'right', 'center'],
          },
          textAlignVertical: {
            type: 'string',
            description:
              'Defines how the sticky note text is vertically aligned.\nDefault: \nFlowchart shapes: `middle`.\nBasic shapes: `top`.',
            enum: ['top', 'middle', 'bottom'],
          },
        },
      },
      ShapeUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ShapeDataForUpdate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForUpdate',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      WidgetLinksPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child items related to the frame.',
            example:
              'http://api.miro.com/v2/boards/o9J_koQspF4=/items?parent_item_id=307445734914369434&limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current item.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/item/3074457349143649487',
          },
        },
      },
      GeometryPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      FrameChanges: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom'],
          },
          title: {
            type: 'string',
            default: 'Sample frame title',
            description: 'Title of the frame. This title appears at the top of the frame.',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform'],
          },
          showContent: {
            type: 'boolean',
            default: true,
            description: 'Hide or reveal the content inside a frame (Enterprise plan only).',
          },
        },
      },
      FrameCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/FrameChanges',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/GeometryNoRotation',
          },
        },
        required: ['data'],
      },
      FrameData: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom', 'desktop', 'phone', 'tablet', 'a4', 'letter', 'ratio_1x1', 'ratio_4x3', 'ratio_16x9'],
          },
          title: {
            type: 'string',
            description: 'Title of the frame. This title appears at the top of the frame.',
            example: 'Sample frame title',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform', 'heap', 'grid', 'rows', 'columns'],
          },
          showContent: {
            type: 'boolean',
            default: true,
            description: 'Hide or reveal the content inside a frame (Enterprise plan only).',
          },
        },
      },
      FrameItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/FrameData',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'frame',
          },
        },
        required: ['id', 'type'],
      },
      FrameStyle: {
        type: 'object',
        description: 'Contains information about the style of a frame item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              'Fill color for the frame.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffffff (transparent).',
            example: '#ffffffff',
          },
        },
      },
      FrameUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/FrameChanges',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/GeometryNoRotation',
          },
        },
      },
      GenericItem: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          data: {
            $ref: '#/components/schemas/OpaqueData',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: '3458764517517819000',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'sticky_note',
          },
        },
        required: ['id', 'type'],
      },
      GenericItemCursorPaged: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericItem',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
        },
      },
      GeometryPlatformContainers: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      GeometryNoRotation: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
          },
        },
      },
      OpaqueData: {
        type: 'object',
      },
      PageLinksPlatformContainers: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      SelfLinkPlatformContainers: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      WidgetLinksPlatformContainers: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child items related to the frame.',
            example:
              'http://api.miro.com/v2/boards/o9J_koQspF4=/items?parent_item_id=307445734914369434&limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current item.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/item/3074457349143649487',
          },
        },
      },
      createdByPlatformContainers: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedByPlatformContainers: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      createdBy: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedBy: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      MindmapCursorPaged: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/MindmapItem',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
          },
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
        },
      },
      ParentLinksEnvelope: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of the parent mind map node for the item.',
            example: 3074457362577955300,
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
        description: 'Contains information about the parent mind map node for the item.',
      },
      MindmapItemPlatformContainersExperimental: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of an item.',
            example: 3074457362577955300,
          },
          data: {
            $ref: '#/components/schemas/MindmapData',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
          },
        },
        required: ['id', 'type'],
      },
      MindmapData: {
        type: 'object',
        description: 'Contains mind map node data, such as `nodeView` or `isRoot`.',
        properties: {
          nodeView: {
            $ref: '#/components/schemas/MindmapNodeView',
          },
          isRoot: {
            type: 'boolean',
            description: 'Indicates whether this node is the root node of the mind map.',
          },
        },
      },
      WidgetLinks: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child nodes.',
          },
          self: {
            type: 'string',
          },
        },
      },
      MindmapNodeView: {
        type: 'object',
        description: 'Contains information about the item used as a mind map node.',
        properties: {
          type: {
            type: 'string',
            description: 'Type of mind map node. Currently, `type` can only be set to `text`.',
          },
          data: {
            $ref: '#/components/schemas/WidgetDataOutput',
          },
        },
      },
      WidgetDataOutput: {
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
        description: 'Contains the item data, such as the item title, content, or description.',
      },
      MindmapItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of an item.',
            example: 3074457362577955300,
          },
          data: {
            $ref: '#/components/schemas/MindmapData',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
          },
        },
        required: ['id', 'type'],
      },
      AppCardData: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          status: {
            type: 'string',
            default: 'disconnected',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            default: 'sample app card item',
            description: 'A short text header to identify the app card.',
          },
        },
      },
      AppCardDataResponse: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          owned: {
            type: 'boolean',
            description: 'Defines whether the card is owned by the application making the call.',
          },
          status: {
            type: 'string',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the app card.',
            example: 'sample app card item',
          },
        },
      },
      AppCardStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the style of an app card item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Hex value of the border color of the app card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      CardData: {
        type: 'object',
        description: 'Contains card item data, such as the title, description, due date, or assignee ID.',
        properties: {
          assigneeId: {
            type: 'string',
            format: 'int64',
            description:
              'Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is a string containing  numbers, and it is automatically assigned to a user when they first sign up.',
            example: 3074457362577955300,
          },
          description: {
            type: 'string',
            description: 'A short text description to add context about the card.',
            example: 'sample card description',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
            description:
              'The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2023-10-12T22:00:55.000Z',
          },
          title: {
            type: 'string',
            default: 'sample card item',
            description: 'A short text header for the card.',
            example: 'sample card item',
          },
        },
      },
      CardStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the style of a card item, such as the card theme.',
        properties: {
          cardTheme: {
            type: 'string',
            description: 'Hex value of the border color of the card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      DocumentUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
          url: {
            type: 'string',
            default: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
        required: ['url'],
      },
      DocumentDataResponse: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      EmbedUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
          },
          url: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
          },
        },
        required: ['url'],
      },
      EmbedDataResponse: {
        type: 'object',
        properties: {
          contentType: {
            type: 'string',
            description: "Type of the embedded item's content.",
            example: 'video',
          },
          description: {
            type: 'string',
            description: 'Short description of the embedded item.',
            example:
              'So this is how to organize your life with Miro (a virtual whiteboard) for collaboration, brainstorming, and project management. Students, designers, agile en...',
          },
          html: {
            type: 'string',
            description: 'HTML code of the embedded item.',
            example:
              '<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=...&display_name=YouTube&url=...&schema=youtube\\" width=\\"854\\" height=\\"480\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>',
          },
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
          },
          previewUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          providerName: {
            type: 'string',
            description: "Name of the content's provider.",
            example: 'YouTube',
          },
          providerUrl: {
            type: 'string',
            description: "Url of the content's provider.",
            example: 'https://www.youtube.com/',
          },
          title: {
            type: 'string',
            description: 'Title of the embedded item.',
            example: 'HOW TO ORGANIZE YOUR LIFE WITH MIRO! ?? Virtual Whiteboard Tour',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      ShapeDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains shape item data, such as the content or shape type of the shape.',
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the shape.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description: 'Defines the geometric shape of the item when it is rendered on the board.',
            enum: [
              'rectangle',
              'round_rectangle',
              'circle',
              'triangle',
              'rhombus',
              'parallelogram',
              'trapezoid',
              'pentagon',
              'hexagon',
              'octagon',
              'wedge_round_rectangle_callout',
              'star',
              'flow_chart_predefined_process',
              'cloud',
              'cross',
              'can',
              'right_arrow',
              'left_arrow',
              'left_right_arrow',
              'left_brace',
              'right_brace',
            ],
          },
        },
      },
      ShapeStyle: {
        type: 'object',
        description: 'Contains information about the shape style, such as the border color or opacity.',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible.\n`1.0`: the background color is completely opaque or solid.\n\n Default: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.\n',
            maximum: 1,
            minimum: 0,
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
          },
        },
      },
      StickyNoteDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      StickyNoteStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description:
          'Contains information about the style of a sticky note item, such as the fill color or text alignment.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Fill color for the sticky note.\nDefault: `light_yellow`.',
            enum: [
              'gray',
              'light_yellow',
              'yellow',
              'orange',
              'light_green',
              'green',
              'dark_green',
              'cyan',
              'light_pink',
              'pink',
              'violet',
              'red',
              'light_blue',
              'blue',
              'dark_blue',
              'black',
            ],
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
          },
        },
      },
      TextData: {
        type: 'object',
        description:
          'Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the text item.',
            example: 'Hello',
          },
        },
        required: ['content'],
      },
      TextStyle: {
        type: 'object',
        description: 'Contains information about the style of a text item, such as the fill color or font family.',
        properties: {
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the text item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description: 'Background color of the text item.\nDefault: `#ffffff`.',
            example: '#e6e6e6',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the background color.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible.\n`1.0`: the background color is completely opaque or solid.\nDefault: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.',
            maximum: 1,
            minimum: 0,
          },
          fontFamily: {
            type: 'string',
            description: 'Font type for the text in the text item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
          },
          fontSize: {
            type: 'string',
            description: 'Font size, in dp.\nDefault: `14`.',
            minimum: 1,
          },
          textAlign: {
            type: 'string',
            description: "Horizontal alignment for the item's content.\nDefault: `center.`",
            enum: ['left', 'right', 'center'],
          },
        },
      },
      CustomFieldPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      GeometryPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      Item: {
        type: 'object',
        description: 'Contains information about an item.',
        properties: {
          id: {
            $ref: '#/components/schemas/ItemId',
          },
          data: {
            $ref: '#/components/schemas/ItemData',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/ParentWithLinks',
          },
          isSupported: {
            type: 'boolean',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          createdAt: {
            $ref: '#/components/schemas/CreationTime',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          modifiedAt: {
            $ref: '#/components/schemas/ModificationTime',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
        required: ['id', 'type', 'links'],
      },
      ItemChanges: {
        type: 'object',
        description: 'Updates one or more items in one request. You can update up to 20 items per request.',
        properties: {
          id: {
            $ref: '#/components/schemas/ItemId',
          },
          type: {
            $ref: '#/components/schemas/ItemTypeChange',
          },
          data: {
            $ref: '#/components/schemas/ItemDataChanges',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ItemCreate: {
        type: 'object',
        description: 'Creates one or more items in one request. You can create up to 20 items per request.',
        properties: {
          type: {
            $ref: '#/components/schemas/ItemTypeChange',
          },
          data: {
            $ref: '#/components/schemas/ItemDataCreate',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['type'],
      },
      ItemData: {
        type: 'object',
        description: 'Contains information about item-specific data.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardDataResponse',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/DocumentDataResponse',
          },
          {
            $ref: '#/components/schemas/EmbedDataResponse',
          },
          {
            $ref: '#/components/schemas/ImageDataResponse',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
      },
      ItemDataChanges: {
        type: 'object',
        description: 'Provides information about item-specific fields for update request.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/ImageUrlDataChanges',
          },
        ],
      },
      ItemDataCreate: {
        type: 'object',
        description: 'Contains data information applicable for each item type.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/DocumentUrlData',
          },
          {
            $ref: '#/components/schemas/EmbedUrlData',
          },
          {
            $ref: '#/components/schemas/ImageUrlData',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
      },
      ItemId: {
        type: 'string',
        description: 'Unique identifier (ID) of an item.',
        format: 'int64',
        example: '3458764517517819000',
      },
      Items: {
        type: 'object',
        description: 'Contains items resulting from a bulk create or update operation.',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Item',
            },
          },
          type: {
            type: 'string',
            description: 'Type of the object.',
            example: 'fixed-list',
          },
        },
        required: ['type', 'data'],
      },
      ItemsPage: {
        type: 'object',
        description: 'Contains cursor-based items page information.',
        properties: {
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 10,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description: 'Total number of results available for the given request.',
            example: 11,
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Item',
            },
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object.',
            example: 'cursor-list',
          },
        },
        required: ['type', 'size', 'limit', 'total', 'data', 'links'],
      },
      ItemStyle: {
        type: 'object',
        description: 'Contains information about item-specific styles.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardStyle',
          },
          {
            $ref: '#/components/schemas/CardStyle',
          },
          {
            $ref: '#/components/schemas/ShapeStyle',
          },
          {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          {
            $ref: '#/components/schemas/TextStyle',
          },
        ],
      },
      ItemTypeChange: {
        type: 'string',
        description: 'Type of item that you want to create.',
        enum: ['app_card', 'text', 'shape', 'sticky_note', 'image', 'document', 'card', 'frame', 'embed'],
        example: 'text',
      },
      ImageDataResponse: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters: `format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`. `redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file. If the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      ImageUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
          url: {
            type: 'string',
            default: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
        required: ['url'],
      },
      ImageUrlDataChangesPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Test image title',
          },
          url: {
            type: 'string',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
      },
      CreationTime: {
        type: 'string',
        format: 'date-time',
        description:
          'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
        example: '2022-03-30T17:26:50.000Z',
      },
      ModificationTime: {
        type: 'string',
        format: 'date-time',
        description:
          'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
        example: '2022-03-30T17:26:50.000Z',
      },
      CreatedBy: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      ModifiedBy: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      PageLinks: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      Parent: {
        type: 'object',
        description:
          'Contains information about the parent this item must be attached to. A maximum of 1000 items can be attached to a frame. Passing `null` for `parent.id` directly attaches an item to the canvas.',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            example: '3458764517517819001',
            description: 'Unique identifier (ID) of the parent for the item.',
          },
        },
      },
      ParentWithLinks: {
        type: 'object',
        description: 'Contains information about the parent this item attached to.',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            example: '3458764517517819001',
            description: 'Unique identifier (ID) of a container item.',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
      },
      Position: {
        type: 'object',
        description:
          'Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.',
        properties: {
          origin: {
            type: 'string',
            default: 'center',
            description:
              'Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported.',
            enum: ['center'],
          },
          relativeTo: {
            type: 'string',
            enum: ['canvas_center', 'parent_top_left'],
          },
          x: {
            $ref: '#/components/schemas/XCoordinate',
          },
          y: {
            $ref: '#/components/schemas/YCoordinate',
          },
        },
      },
      PositionChange: {
        type: 'object',
        description:
          'Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.',
        properties: {
          x: {
            $ref: '#/components/schemas/XCoordinate',
          },
          y: {
            $ref: '#/components/schemas/YCoordinate',
          },
        },
      },
      SelfLink: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'https://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      XCoordinate: {
        type: 'number',
        format: 'double',
        description:
          'X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.',
        example: 100,
      },
      YCoordinate: {
        type: 'number',
        format: 'double',
        description:
          'Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.',
        example: 100,
      },
      Error: {
        type: 'object',
        description: 'Error information',
        properties: {
          code: {
            type: 'string',
            description: 'Code of the error',
            example: 2.074,
          },
          message: {
            type: 'string',
            description: 'Description of the error',
            example: 'Error message',
          },
          context: {
            type: 'object',
          },
          status: {
            type: 'integer',
            format: 'int32',
            description: 'Status code of the error',
            example: 400,
          },
          type: {
            type: 'string',
            description: 'Type of entity that is returned.',
            example: 'error',
          },
        },
        required: ['message', 'type'],
      },
      BulkOperationError: {
        type: 'object',
        description: 'Error information with details about operation failure',
        properties: {
          type: {
            type: 'string',
            description: 'Type of the error',
            example: 'error',
          },
          code: {
            type: 'string',
            description: 'Code of the error',
            example: 2.074,
          },
          message: {
            type: 'string',
            description: 'Description of the error',
            example: 'Error message',
          },
          context: {
            type: 'object',
            properties: {
              fields: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BulkSubOperationError',
                },
              },
            },
          },
          status: {
            type: 'integer',
            format: 'int32',
            description: 'Status code of the error',
            example: 400,
          },
        },
        required: ['message'],
      },
      BulkSubOperationError: {
        type: 'object',
        properties: {
          field: {
            type: 'string',
            description:
              '0-based index indicating a sub-operations from the input that caused a failure followed by parameter name',
          },
          message: {
            type: 'string',
            description: 'Description of the sub-operation related error',
            example: 'Invalid parameters',
          },
          context: {
            type: 'object',
          },
        },
        required: ['field', 'message'],
      },
      AppCardStyle: {
        type: 'object',
        description: 'Contains information about the style of an app card item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Hex value of the border color of the app card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      CardStyle: {
        type: 'object',
        description: 'Contains information about the style of a card item, such as the card theme.',
        properties: {
          cardTheme: {
            type: 'string',
            description: 'Hex value of the border color of the card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      DocumentUrlData: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
          url: {
            type: 'string',
            default: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
        required: ['url'],
      },
      EmbedUrlData: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
          },
          url: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
          },
        },
        required: ['url'],
      },
      ShapeData: {
        type: 'object',
        description: 'Contains shape item data, such as the content or shape type of the shape.',
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the shape.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description: 'Defines the geometric shape of the item when it is rendered on the board.',
            enum: [
              'rectangle',
              'round_rectangle',
              'circle',
              'triangle',
              'rhombus',
              'parallelogram',
              'trapezoid',
              'pentagon',
              'hexagon',
              'octagon',
              'wedge_round_rectangle_callout',
              'star',
              'flow_chart_predefined_process',
              'cloud',
              'cross',
              'can',
              'right_arrow',
              'left_arrow',
              'left_right_arrow',
              'left_brace',
              'right_brace',
            ],
          },
        },
      },
      StickyNoteData: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      StickyNoteStyle: {
        type: 'object',
        description:
          'Contains information about the style of a sticky note item, such as the fill color or text alignment.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Fill color for the sticky note.\nDefault: `light_yellow`.',
            enum: [
              'gray',
              'light_yellow',
              'yellow',
              'orange',
              'light_green',
              'green',
              'dark_green',
              'cyan',
              'light_pink',
              'pink',
              'violet',
              'red',
              'light_blue',
              'blue',
              'dark_blue',
              'black',
            ],
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
          },
        },
      },
      CustomField: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      Geometry: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      ImageUrlData: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
          url: {
            type: 'string',
            default: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
        required: ['url'],
      },
      ImageUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Test image title',
          },
          url: {
            type: 'string',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
      },
      Picture: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the picture',
            example: 3074457345618261500,
          },
          imageURL: {
            type: 'string',
            description: 'Url of the picture',
            example: 'https://miro.images/5252525252/125252/266/144/1/size210.jpg',
          },
          originalUrl: {
            type: 'string',
            description: 'Original team picture url for icon generation',
            example: 'https://miro.com/original-image.jpg',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'picture',
          },
        },
      },
      Team: {
        required: ['id', 'name'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Team id',
            example: 3074457345618265000,
          },
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team',
          },
        },
      },
      CreateTeamRequest: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
        },
      },
      TeamAccountDiscoverySettings: {
        type: 'object',
        properties: {
          accountDiscovery: {
            type: 'string',
            description:
              '\n* "hidden":  Only invited users can see and access the team.\n* "request": Members of organization can find and request to join with admin approval.\n* "join":    Members of organization can find and join.\n',
            enum: ['hidden', 'request', 'join'],
          },
        },
        description: 'Team account discovery settings',
      },
      TeamAccountDiscoverySettingsChanges: {
        type: 'object',
        properties: {
          accountDiscovery: {
            type: 'string',
            description:
              '\n* "hidden":  Only invited users can see and access the team.\n* "request": Members of organization can find and request to join with admin approval.\n* "join":    Members of organization can find and join.\n',
            enum: ['hidden', 'request', 'join'],
          },
        },
        description: 'Team account discovery settings',
      },
      TeamChanges: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
        },
      },
      TeamCollaborationSettings: {
        type: 'object',
        properties: {
          coOwnerRole: {
            type: 'string',
            description:
              '\n* "enabled": Enable Co-owner role on boards and projects\n* "disabled": Disabled Co-owner role on boards and projects\n',
            enum: ['enabled', 'disabled'],
          },
        },
        description: 'Team collaboration settings',
      },
      TeamCollaborationSettingsChanges: {
        type: 'object',
        properties: {
          coOwnerRole: {
            type: 'string',
            description:
              '\n* "enabled": Enable Co-owner role on boards and projects\n* "disabled": Disabled Co-owner role on boards and projects\n',
            enum: ['enabled', 'disabled'],
          },
        },
        description: 'Team collaboration settings',
      },
      TeamCopyAccessLevelSettings: {
        type: 'object',
        properties: {
          copyAccessLevel: {
            type: 'string',
            description:
              '\n* "anyone":       Anyone with the board access can copy board content on newly created boards.\n* "team_members": Team members can copy board content on newly created boards.\n* "team_editors": Team members with editing rights can copy board content on newly created boards.\n* "board_owner":  Board owners only can copy board content on newly created boards.\n',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner            -'],
          },
          copyAccessLevelLimitation: {
            type: 'string',
            description:
              '\n* "anyone":       Team members and users outside team can be given permission to copy board content.\n* "team_members": Only team members can be given permission to copy board content.\n',
            enum: ['anyone', 'team_members'],
          },
        },
        description: 'Team copy access settings',
      },
      TeamCopyAccessLevelSettingsChanges: {
        type: 'object',
        properties: {
          copyAccessLevel: {
            type: 'string',
            description:
              '\n* "anyone":       Anyone with the board access can copy board content on newly created boards.\n* "team_members": Team members can copy board content on newly created boards.\n* "team_editors": Team members with editing rights can copy board content on newly created boards.\n* "board_owner":  Board owners only can copy board content on newly created boards.\n',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner'],
          },
          copyAccessLevelLimitation: {
            type: 'string',
            description:
              '\n* "anyone":       Team members and users outside team can be given permission to copy board content.\n* "team_members": Only team members can be given permission to copy board content.\n',
            enum: ['anyone', 'team_members'],
          },
        },
        description: 'Team copy access settings',
      },
      TeamInvitationSettings: {
        type: 'object',
        properties: {
          inviteExternalUsers: {
            type: 'string',
            description:
              '\n* "allowed": Allow non-team collaborators for team\n* "not_allowed": Not Allow non-team collaborators for team\n',
            enum: ['allowed', 'not_allowed'],
          },
          whoCanInvite: {
            type: 'string',
            description:
              '\n* "only_org_admins": Company admins only can invite\n* "admins":          Company admins and team admins can invite\n* "all_members":     All team members can invite\n',
            enum: ['only_org_admins', 'admins', 'all_members'],
          },
        },
        description: 'Team invitation settings',
      },
      TeamInvitationSettingsChanges: {
        type: 'object',
        properties: {
          inviteExternalUsers: {
            type: 'string',
            description:
              '\n* "allowed": Allow non-team collaborators for team\n* "not_allowed": Not Allow non-team collaborators for team\n',
            enum: ['allowed', 'not_allowed'],
          },
          whoCanInvite: {
            type: 'string',
            description:
              '\n* "only_org_admins": Company admins only can invite\n* "admins":          Company admins and team admins can invite\n* "all_members":     All team members can invite\n',
            enum: ['only_org_admins', 'admins', 'all_members'],
          },
        },
        description: 'Team invitation settings',
      },
      TeamMember: {
        required: ['id', 'teamId', 'role'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Team member id.',
            example: 3074457345618264000,
          },
          role: {
            type: 'string',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "non_team":   External user, non-team user.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['non_team', 'member', 'admin', 'team_guest'],
          },
          createdAt: {
            type: 'string',
            description: 'Date and time when member was invited to the team.',
            format: 'date-time',
          },
          createdBy: {
            type: 'string',
            description: 'Id of the user who invited the team member.',
            example: 3074457345618264000,
          },
          modifiedAt: {
            type: 'string',
            description: "Date and time when the user's membership was last updated.",
            format: 'date-time',
          },
          modifiedBy: {
            type: 'string',
            description: "Id of the user who last updated the user's membership.",
            example: 3074457345618264000,
          },
          teamId: {
            type: 'string',
            description: 'Team id',
            example: 3074457345618265000,
          },
          type: {
            description: 'Type of the object returned.',
            type: 'string',
            default: 'team-member',
          },
        },
      },
      TeamMemberChanges: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            example: 'member',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['member', 'admin', 'team_guest'],
          },
        },
      },
      TeamMemberInvite: {
        type: 'object',
        required: ['email'],
        properties: {
          email: {
            type: 'string',
            description: 'User email to add to a team',
            example: 'user@miro.com',
          },
          role: {
            type: 'string',
            example: 'member',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['member', 'admin', 'team_guest'],
          },
        },
      },
      TeamSettings: {
        type: 'object',
        properties: {
          organizationId: {
            type: 'string',
            description: 'Organization id',
            example: 3074457345618265000,
          },
          teamAccountDiscoverySettings: {
            $ref: '#/components/schemas/TeamAccountDiscoverySettings',
          },
          teamCollaborationSettings: {
            $ref: '#/components/schemas/TeamCollaborationSettings',
          },
          teamCopyAccessLevelSettings: {
            $ref: '#/components/schemas/TeamCopyAccessLevelSettings',
          },
          teamId: {
            type: 'string',
            description: 'Team id',
            example: '3074457345618265000',
          },
          teamInvitationSettings: {
            $ref: '#/components/schemas/TeamInvitationSettings',
          },
          teamSharingPolicySettings: {
            $ref: '#/components/schemas/TeamSharingPolicySettings',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team-settings',
          },
        },
      },
      TeamSettingsChanges: {
        type: 'object',
        properties: {
          teamAccountDiscoverySettings: {
            $ref: '#/components/schemas/TeamAccountDiscoverySettingsChanges',
          },
          teamCollaborationSettings: {
            $ref: '#/components/schemas/TeamCollaborationSettingsChanges',
          },
          teamCopyAccessLevelSettings: {
            $ref: '#/components/schemas/TeamCopyAccessLevelSettingsChanges',
          },
          teamInvitationSettings: {
            $ref: '#/components/schemas/TeamInvitationSettingsChanges',
          },
          teamSharingPolicySettings: {
            $ref: '#/components/schemas/TeamSharingPolicySettingsChanges',
          },
        },
      },
      TeamSharingPolicySettings: {
        type: 'object',
        properties: {
          allowListedDomains: {
            type: 'array',
            description: 'Allow listed domains',
            items: {
              type: 'string',
              description: 'Allow listed domains',
            },
          },
          createAssetAccessLevel: {
            type: 'string',
            description:
              '\n* "company_admins": Only company admins can create assets in a team\n* "admins": Both team and company admins can create assets in a team.\n* "all_members": all_members\n',
            enum: ['company_admins', 'admins', 'all_members'],
          },
          defaultBoardAccess: {
            type: 'string',
            description:
              '\nDefault board access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          defaultOrganizationAccess: {
            type: 'string',
            description:
              '\nDefault organization access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          defaultProjectAccess: {
            type: 'string',
            description:
              '\nDefault project access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n',
            enum: ['private', 'view'],
          },
          moveBoardToAccount: {
            type: 'string',
            description: '\n* "allowed": Allow move board to team\n* "not_allowed": Not allow move board to team\n',
            enum: ['allowed', 'not_allowed'],
          },
          restrictAllowedDomains: {
            type: 'string',
            description:
              '\n* "enabled": Enabled. Restrict to listed domain.\n* "disabled": Disabled. No domain restriction.\n* "enabled_with_external_users_access": Enabled. Restrict to listed domain but allows external users to access.\n',
            enum: ['enabled', 'enabled_with_external_user_access', 'disabled'],
          },
          sharingOnAccount: {
            type: 'string',
            description: '\n* "allowed": Allow sharing on team\n* "not_allowed": Not allow sharing on team\n',
            enum: ['allowed', 'not_allowed'],
          },
          sharingOnOrganization: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing on organization\n* "allowed_with_editing": Allow sharing with editing on organization\n* "not_allowed": Not allow sharing on organization\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
          },
          sharingViaPublicLink: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing via public link\n* "allowed_with_editing": Allow sharing with editing via public link\n* "not_allowed": Not allow sharing via public link\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
          },
        },
        description: 'Team sharing policy settings',
      },
      TeamSharingPolicySettingsChanges: {
        type: 'object',
        properties: {
          allowListedDomains: {
            type: 'array',
            description: 'Allow listed domains',
            items: {
              type: 'string',
              description: 'Allow listed domains',
            },
          },
          createAssetAccessLevel: {
            type: 'string',
            description:
              '\n* "company_admins": Only company admins can create assets in a team\n* "admins": Both team and company admins can create assets in a team.\n* "all_members": all_members\n',
            enum: ['company_admins', 'admins', 'all_members'],
          },
          defaultBoardAccess: {
            type: 'string',
            description:
              '\nDefault board access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          defaultOrganizationAccess: {
            type: 'string',
            description:
              '\nDefault organization access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          defaultProjectAccess: {
            type: 'string',
            description:
              '\nDefault project access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n',
            enum: ['private', 'view'],
          },
          moveBoardToAccount: {
            type: 'string',
            description: '\n* "allowed": Allow move board to team\n* "not_allowed": Not allow move board to team\n',
            enum: ['allowed', 'not_allowed'],
          },
          restrictAllowedDomains: {
            type: 'string',
            description:
              '\n* "enabled": Enabled. Restrict to listed domain.\n* "disabled": Disabled. No domain restriction.\n* "enabled_with_external_users_access": Enabled. Restrict to listed domain but allows external users to access.\n',
            enum: ['enabled', 'enabled_with_external_user_access', 'disabled'],
          },
          sharingOnAccount: {
            type: 'string',
            description: '\n* "allowed": Allow sharing on team\n* "not_allowed": Not allow sharing on team\n',
            enum: ['allowed', 'not_allowed'],
          },
          sharingOnOrganization: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing on organization\n* "allowed_with_editing": Allow sharing with editing on organization\n* "not_allowed": Not allow sharing on organization\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
          },
          sharingViaPublicLink: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing via public link\n* "allowed_with_editing": Allow sharing with editing via public link\n* "not_allowed": Not allow sharing via public link\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
          },
        },
        description: 'Team sharing policy settings',
      },
      PageLimit: {
        type: 'integer',
        format: 'int32',
        minimum: 1,
        maximum: 100,
        default: 100,
        example: 100,
        description:
          'The maximum number of results to return per call. If the number of project in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
      },
      PageSize: {
        type: 'integer',
        format: 'int32',
        minimum: 0,
        maximum: 100,
        default: 100,
        example: 87,
        description:
          'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
      },
      PageCursor: {
        type: 'string',
        description:
          'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
        example: '3074457345821140946',
      },
      PageType: {
        type: 'string',
        description: 'Type of the object returned.',
        default: 'cursor-list',
      },
      TeamsPage: {
        type: 'object',
        description: 'Page of teams that match the search query.',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            $ref: '#/components/schemas/PageLimit',
          },
          size: {
            $ref: '#/components/schemas/PageSize',
          },
          data: {
            type: 'array',
            description: 'List of teams',
            items: {
              $ref: '#/components/schemas/Team',
            },
          },
          cursor: {
            $ref: '#/components/schemas/PageCursor',
          },
          type: {
            $ref: '#/components/schemas/PageType',
          },
        },
      },
      TeamMembersPage: {
        type: 'object',
        description: 'Page of team members that match the search query.',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            $ref: '#/components/schemas/PageLimit',
          },
          size: {
            $ref: '#/components/schemas/PageSize',
          },
          data: {
            type: 'array',
            description: 'List of team members',
            items: {
              $ref: '#/components/schemas/TeamMember',
            },
          },
          cursor: {
            $ref: '#/components/schemas/PageCursor',
          },
          type: {
            $ref: '#/components/schemas/PageType',
          },
        },
      },
      BasicErrorOrganizationsEnterprisePlan: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'error',
          },
        },
      },
      Organization: {
        required: ['fullLicensesPurchased', 'id', 'name', 'plan'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the organization',
            example: '3074457345821140946',
          },
          fullLicensesPurchased: {
            type: 'integer',
            description: 'Purchased FULL licenses',
            format: 'int32',
          },
          name: {
            type: 'string',
            description: 'Name of the organization',
            example: 'Miro company',
          },
          plan: {
            type: 'string',
            description: 'Organization plan type',
            example: 'company',
            enum: [
              'company',
              'consultant',
              'consultant_slf',
              'business',
              'paid_team_org',
              'integration_org',
              'professional_2022',
              'edu_team_org',
              'free_team_org',
              'dev_team_org',
              'unknown',
            ],
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'organization',
          },
        },
      },
      OrganizationMember: {
        description: 'Organization member',
        required: ['active', 'email', 'id', 'license', 'role'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the user',
            example: '3074457345821140934',
          },
          active: {
            type: 'boolean',
            description: 'Flag is user active',
            example: true,
          },
          email: {
            type: 'string',
            description: 'User email',
            example: 'user@miro.com',
          },
          lastActivityAt: {
            type: 'string',
            description: 'Last time when the user was active',
            format: 'date-time',
          },
          license: {
            type: 'string',
            description: 'Name of the current user license in the organization',
            example: 'full',
            enum: ['full', 'occasional', 'free', 'free_restricted', 'full_trial', 'unknown'],
          },
          licenseAssignedAt: {
            type: 'string',
            description: 'Time when the license was assigned to the user',
            format: 'date-time',
          },
          role: {
            type: 'string',
            description: 'Name of the user role in the organization',
            example: 'organization_internal_user',
            enum: [
              'organization_internal_admin',
              'organization_internal_user',
              'organization_external_user',
              'organization_team_guest_user',
              'unknown',
            ],
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'organization-member',
          },
        },
      },
      OrganizationMembersSearchByEmailsResponse: {
        description: 'Response for search organization members by user emails',
        type: 'array',
        properties: {
          empty: {
            type: 'boolean',
          },
        },
        items: {
          $ref: '#/components/schemas/OrganizationMember',
        },
      },
      OrganizationMembersSearchResponse: {
        type: 'object',
        description: 'Response for query by cursor and filter parameters',
        properties: {
          limit: {
            type: 'integer',
            description:
              'Maximum number of results returned based on the limit specified in the request. For example, if there are 20 results, the request has no cursor value, and the limit is set to 20, the size of the results will be 20. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the cursor parameter value.',
            format: 'int32',
            example: 20,
          },
          size: {
            type: 'integer',
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10.',
            format: 'int32',
            example: 1,
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrganizationMember',
            },
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      BoardDataClassificationLabel: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            description: 'Label color',
            example: 'blue',
          },
          description: {
            type: 'string',
            description: 'Label description',
            example: 'Board could not be shared publicly',
          },
          id: {
            type: 'string',
            description: 'Label id',
            example: '3000457366756290996',
          },
          name: {
            type: 'string',
            description: 'Label name',
            example: 'internal',
          },
          sharingRecommendation: {
            type: 'string',
            description:
              'Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ) ',
            example: 'NO_SHARING_RESTRICTIONS',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'board-data-classification-label',
          },
        },
      },
      DataClassificationLabel: {
        description: 'Data classification label',
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Label id',
            example: '3000457366756290996',
          },
          color: {
            type: 'string',
            description: 'Label color',
            example: '#F5DC80',
          },
          default: {
            type: 'boolean',
            description: 'Label is default',
            example: false,
          },
          description: {
            type: 'string',
            description: 'Label description',
            example: 'Board could not be shared publicly',
          },
          name: {
            type: 'string',
            description: 'Label name',
            example: 'internal',
          },
          orderNumber: {
            type: 'integer',
            description: 'Label order number',
            format: 'int32',
            example: 2,
          },
          sharingRecommendation: {
            type: 'string',
            description:
              'Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ) ',
            example: 'NO_SHARING_RESTRICTIONS',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'data-classification-label',
          },
        },
      },
      DataClassificationLabelId: {
        type: 'object',
        properties: {
          labelId: {
            type: 'string',
            description: 'Data classification label id',
            example: '3000457366756290996',
          },
        },
      },
      DataClassificationOrganizationSettings: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for organization',
            example: true,
          },
          labels: {
            type: 'array',
            description: 'Data classification labels',
            items: {
              $ref: '#/components/schemas/DataClassificationLabel',
            },
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'data-classification-organization-settings',
          },
        },
      },
      DataClassificationTeamSettings: {
        type: 'object',
        properties: {
          defaultLabelId: {
            type: 'string',
            description: 'Data classification default label id',
            example: '3000457366756290996',
          },
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for team',
            example: true,
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team-data-classification-settings',
          },
        },
      },
      UpdateBoardsDataClassificationLabel: {
        type: 'object',
        properties: {
          numberUpdatedBoards: {
            type: 'integer',
            description: 'Number of boards updated in the team',
            format: 'int64',
            example: 10,
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'boards-data-classification-label-changed',
          },
        },
      },
      UpdateBoardsDataClassificationLabelRequest: {
        type: 'object',
        properties: {
          labelId: {
            type: 'integer',
            description: 'Data classification label id for team',
            format: 'int64',
            example: 3000457366756291000,
          },
          notClassifiedOnly: {
            type: 'boolean',
            description: 'Assign data classification label to not-classified only or to all boards of team',
            example: true,
          },
        },
      },
      UpdateTeamSettingsRequest: {
        type: 'object',
        properties: {
          defaultLabelId: {
            type: 'integer',
            description: 'Data classification default label id',
            format: 'int64',
            example: 3000457366756291000,
          },
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for team',
            example: true,
          },
        },
      },
      BasicErrorBoardExportJobEnterprisePlan: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      BoardExportJobId: {
        required: ['jobId'],
        type: 'object',
        properties: {
          jobId: {
            type: 'string',
            description: 'Unique identifier of the board export job.',
            format: 'uuid',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
          },
        },
      },
      BoardExportJobStatus: {
        required: ['jobStatus'],
        type: 'object',
        properties: {
          jobStatus: {
            type: 'string',
            description:
              'Indicates the current state of the board export job.\nPossible values:\n `CREATED`: the job has been created but not yet started. Retry the status call after some time.\n`IN_PROGRESS`: the job is in progress, and the results are not ready yet. Retry the status call after some time.\n`FINISHED`: the job is complete. You can now get results for the board export job.',
            example: 'CREATED',
          },
        },
      },
      BoardExportResult: {
        type: 'object',
        properties: {
          jobId: {
            type: 'string',
            description: 'Unique identifier of the board export job.',
            format: 'uuid',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
          },
          results: {
            type: 'array',
            description: 'Board export task results.',
            items: {
              $ref: '#/components/schemas/BoardExportTaskResult',
            },
          },
        },
      },
      BoardExportTaskResult: {
        required: ['boardId', 'status'],
        type: 'object',
        properties: {
          boardId: {
            type: 'string',
            description: 'Unique identifier of the board.',
            example: 'o9J_kzlUDmo=',
          },
          errorMessage: {
            type: 'string',
            description: 'Contains the description of the error that occurred during a board export task.',
          },
          exportLink: {
            type: 'string',
            description: 'URL of the S3 bucket that contains the exported files.',
          },
          status: {
            type: 'string',
            description:
              'Indicates the status of the individual board export task.\nPossible values:\n`SUCCESS`: the board export task was completed successfully and the results are available.\n`ERROR`: the board export task encountered an error and failed to complete. The `errorMessage` field provides more information on the error.',
            example: 'CREATED',
          },
        },
        description: 'Board export task results.',
      },
      CreateBoardExportRequest: {
        type: 'object',
        properties: {
          boardIds: {
            maxItems: 50,
            minItems: 1,
            type: 'array',
            description: 'List of board IDs to be exported.',
            example: 'o9J_kzlUDmo=',
            items: {
              type: 'string',
              description: 'List of board IDs to be exported.',
              example: 'o9J_kzlUDmo=',
            },
          },
        },
        description: 'List of board IDs to be exported.',
      },
      BasicError: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      ProjectPage: {
        type: 'object',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: 1,
            maximum: 100,
            default: 100,
            example: 100,
            description:
              'The maximum number of results to return per call. If the number of project in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
          },
          size: {
            type: 'integer',
            format: 'int32',
            minimum: 0,
            maximum: 100,
            default: 100,
            example: 87,
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Project',
            },
            description: 'Contains the result data.',
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      Project: {
        type: 'object',
        required: ['id', 'name', 'type'],
        properties: {
          id: {
            type: 'string',
            description: 'Project ID.',
            example: '3074457345618265000',
          },
          name: {
            type: 'string',
            description: 'Name of the project.',
            example: 'Product Guild project',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'project',
          },
        },
      },
      CreateProjectRequest: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            description: 'Project name',
            example: 'Product Guild project',
          },
        },
      },
      UpdateProjectRequest: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            description: 'Project name',
            example: 'Product Guild project',
          },
        },
      },
      UpdateProjectSettingsRequest: {
        type: 'object',
        properties: {
          sharingPolicySettings: {
            $ref: '#/components/schemas/SharingPolicySettings',
          },
        },
      },
      ProjectSettings: {
        type: 'object',
        required: ['sharingPolicySettings', 'type'],
        properties: {
          sharingPolicySettings: {
            $ref: '#/components/schemas/SharingPolicySettings',
          },
          type: {
            type: 'string',
            description: 'Type of the object',
            default: 'project_settings',
          },
        },
      },
      ProjectMemberPage: {
        type: 'object',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: 1,
            maximum: 100,
            default: 100,
            example: 100,
            description:
              'The maximum number of results to return per call. If the number of project member in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
          },
          size: {
            type: 'integer',
            format: 'int32',
            minimum: 0,
            maximum: 100,
            default: 100,
            example: 87,
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ProjectMember',
            },
            description: 'Contains the result data.',
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      ProjectMember: {
        type: 'object',
        required: ['id', 'email', 'role', 'type'],
        properties: {
          id: {
            type: 'string',
            description: 'ID of the project member.',
            example: '3074457345618265000',
          },
          email: {
            type: 'string',
            description: 'Email ID of the project member.',
            example: 'someone@domain.com',
          },
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
          type: {
            type: 'string',
            description: 'Type of the object',
            default: 'project_member',
          },
        },
      },
      AddProjectMemberRequest: {
        type: 'object',
        required: ['email', 'role'],
        properties: {
          email: {
            type: 'string',
            description: 'Email ID of the user.',
            example: 'someone@domain.com',
          },
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
        },
      },
      UpdateProjectMemberRequest: {
        type: 'object',
        properties: {
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
        },
      },
      SharingPolicySettings: {
        type: 'object',
        properties: {
          teamAccess: {
            $ref: '#/components/schemas/TeamAccess',
          },
        },
      },
      TeamAccess: {
        type: 'string',
        description:
          'Team access\n* "private": Only the members of the project can access the information within the project.\n* "view":    Anyone in the team can view the information in within the project.\n',
        enum: ['private', 'view'],
        default: 'private',
        example: 'private',
      },
      ProjectRole: {
        type: 'string',
        description: 'Role of the project member.',
        enum: ['owner', 'editor', 'viewer', 'commentator', 'coowner'],
        example: 'viewer',
      },
      ProjectRoleToAdd: {
        type: 'string',
        description: 'Role of the project member.',
        enum: ['editor', 'viewer', 'commentator', 'coowner'],
        example: 'viewer',
      },
      Error400: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 400,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            default: 'invalidParameters',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error401: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 401,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            default: 'tokenNotProvided',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error403: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 403,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'forbiddenAccess',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error404: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 404,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'notFound',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error409: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 409,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'conflict',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error429: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 429,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'tooManyRequests',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
    },
    parameters: {
      boardId: {
        description: 'Unique identifier (ID) of the board where you want to create the item.',
        required: true,
        in: 'path',
        name: 'board_id',
        schema: {
          type: 'string',
        },
      },
      pathOrgId: {
        name: 'org_id',
        description: 'The id of the Organization.',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
      pathTeamId: {
        name: 'team_id',
        description: 'The id of the Team.',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
      pathTeamMemberId: {
        name: 'member_id',
        description: 'The id of the Team Member',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
    },
    securitySchemes: {
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

export const dupedSpec = {
  ...openAPI,
  '/v2/orgs/{org_id}/boards/export/jobs': {
    post: {
      'x-settings': {
        'skip-tests': true,
      },
      description:
        'Creates an export job for one or more boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p>',
      operationId: 'enterprise-create-board-export',
      parameters: [
        {
          description: 'Unique identifier of the organization.',
          example: 3074457345821141000,
          in: 'path',
          name: 'org_id',
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          description: 'Unique identifier of the board export job.',
          example: '92343229-c532-446d-b8cb-2f155bedb807',
          in: 'query',
          name: 'request_id',
          required: true,
          schema: {
            type: 'string',
            format: 'uuid',
          },
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateBoardExportRequest',
            },
          },
        },
        required: true,
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BoardExportJobId',
              },
            },
          },
          description: 'Unique identifier of the board export job',
        },
        '400': {
          $ref: '#/components/responses/400',
        },
        '401': {
          $ref: '#/components/responses/401',
        },
        '403': {
          $ref: '#/components/responses/403',
        },
        '404': {
          $ref: '#/components/responses/404',
        },
        '429': {
          $ref: '#/components/responses/429',
        },
      },
      summary: 'Create board export job',
      tags: ['Board export job'],
    },
  },
}

export const specModified = {
  openapi: '3.0.1',
  info: {
    description:
      "Our APIs are based on a RESTful approach (see <a href='https://en.wikipedia.org/wiki/REST'>REST</a>). It features predictable and resource-oriented URLs and uses HTTP response codes to indicate API errors.",
    title: 'Miro API',
    version: '0.1',
  },
  servers: [
    {
      url: 'https://api.miro.com/',
    },
  ],
  paths: {
    '/v1/oauth/revoke': {
      post: {
        tags: ['Tokens'],
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
              example: '{{access_token}}',
            },
          },
        ],
      },
    },
    '/v1/oauth-token': {
      get: {
        tags: ['Tokens'],
        summary: 'Get access token information',
        description:
          'Get information about an access token, such as the token type, scopes, team, user, token creation date and time, and the user who created the token.',
        operationId: 'token-info',
      },
    },
    '/v2/boards': {
      post: {
        description:
          'Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'create-board',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BoardChanges',
              },
            },
          },
        },
        summary: 'Create board',
        tags: ['Boards'],
      },
      get: {
        description:
          "Retrieves a list of boards that match the search criteria provided in the request. If you are an Enterprise customer and a Company Admin, you can retrieve all boards, including all private boards (boards that haven't been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins). Note that you only get results instantaneously when you filter by the `team_id`, `project_id`, or both the `team_id` and `project_id`. If you use any other filter,  you need to give a few seconds for the indexing of newly created boards before retrieving boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>",
        operationId: 'get-boards',
        parameters: [
          {
            in: 'query',
            name: 'team_id',
            schema: {
              type: 'string',
              description:
                'The team_id for which you want to retrieve the list of boards. If this parameter is sent in the request, the `query` and `owner` parameters are ignored.',
              example: '{{team_id}}',
            },
          },
          {
            in: 'query',
            name: 'project_id',
            schema: {
              type: 'string',
              description:
                'The `project_id` for which you want to retrieve the list of boards. If this parameter is sent in the request, the `query` and `owner` parameters are ignored.',
              example: '',
            },
          },
          {
            in: 'query',
            name: 'query',
            schema: {
              type: 'string',
              description:
                'Retrieves a list of boards that contain the query string provided in the board name or board description. For example, if you want to retrieve a list of boards that have the word `beta` in the board name or description, add `beta` as the `query` parameter value. You can use the `query` parameter with the owner parameter to narrow down the board search results.',
              maxLength: 500,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'owner',
            schema: {
              type: 'string',
              description:
                "Retrieves a list of boards that belong to a specific owner ID. You must pass the owner ID (for example, 3074457353169356300), not the owner name. You can use the 'owner' parameter with the `query` parameter to narrow down the board search results. Note that if you pass the `team_id` in the same request, the `owner` parameter is ignored.",
              example: '',
            },
          },
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              description: 'The maximum number of boards to retrieve.\nDefault: `20`',
              maximum: 50,
              minimum: 1,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'offset',
            schema: {
              type: 'string',
              description: 'The (zero-based) offset of the first item in the collection to return.\nDefault: `0`.',
              example: '',
            },
          },
          {
            in: 'query',
            name: 'sort',
            schema: {
              type: 'string',
              default: 'default',
              description:
                'Sort order in which you want to view the result set. Options `last_created` and `alphabetically` are applicable only when you search for boards by team.\n* `default` - If `team_id` is present, `last_created`. Otherwise, `last_opened`.\n* `last_modified` - sort by the date and time when the board was last modified.\n* `last_opened` - sort by the date and time when the board was last opened.\n* `last_created` - sort by the date and time when the board was created.\n* `alphabetically` - sort by the board name (alphabetically).',
              enum: ['default', 'last_modified', 'last_opened', 'last_created', 'alphabetically'],
            },
          },
        ],
        summary: 'Get boards',
        tags: ['Boards'],
      },
      put: {
        description:
          'Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>',
        operationId: 'copy-board',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board that you want to copy.',
            in: 'query',
            name: 'copy_from',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CopyBoardChanges',
              },
            },
          },
        },
        summary: 'Copy board',
        tags: ['Boards'],
      },
    },
    '/v2/boards/{board_id}': {
      get: {
        description:
          'Retrieves information about a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-specific-board',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board that you want to retrieve.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get specific board',
        tags: ['Boards'],
      },
      patch: {
        description:
          'Updates a specific board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-board',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board that you want to update.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BoardChanges',
              },
            },
          },
          required: true,
        },
        summary: 'Update board',
        tags: ['Boards'],
      },
      delete: {
        description:
          'Deletes a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-board',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board that you want to delete.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Delete board',
        tags: ['Boards'],
      },
    },
    '/v2/boards/{board_id}/app_cards': {
      post: {
        description:
          'Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-app-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AppCardCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create app card item',
        tags: ['App Cards'],
      },
    },
    '/v2/boards/{board_id}/app_cards/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-app-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get app card item',
        tags: ['App Cards'],
      },
      patch: {
        description:
          'Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-app-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AppCardUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update app card item',
        tags: ['App Cards'],
      },
      delete: {
        description:
          'Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-app-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete an item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete app card item',
        tags: ['App Cards'],
      },
    },
    '/v2/boards/{board_id}/cards': {
      post: {
        description:
          'Adds a card item to a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CardCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create card item',
        tags: ['Cards'],
      },
    },
    '/v2/boards/{board_id}/cards/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific card item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get card item',
        tags: ['Cards'],
      },
      patch: {
        description:
          'Updates a card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CardUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update card item',
        tags: ['Cards'],
      },
      delete: {
        description:
          'Deletes a card item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-card-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete card item',
        tags: ['Cards'],
      },
    },
    '/v2/boards/{board_id}/connectors': {
      post: {
        description:
          'Adds a connector to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-connector',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board for which you want to create the connector.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConnectorCreationData',
              },
            },
          },
          required: true,
        },
        summary: 'Create connector',
        tags: ['Connectors'],
      },
      get: {
        description:
          "Retrieves a list of connectors for a specific board.\n\nThis method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
        operationId: 'get-connectors',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              default: '10',
              description:
                'The maximum number of results to return per call. If the number of connectors in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
              maximum: 50,
              minimum: 10,
            },
          },
          {
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              description:
                'A cursor-paginated method returns a portion of the total set of results based on the limit specified and a `cursor` that points to the next portion of the results. To retrieve the next portion of the collection, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request.',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a list of connectors.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get connectors',
        tags: ['Connectors'],
      },
    },
    '/v2/boards/{board_id}/connectors/{connector_id}': {
      get: {
        description:
          'Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-connector',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific connector.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the connector that you want to retrieve.',
            in: 'path',
            name: 'connector_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get specific connector',
        tags: ['Connectors'],
      },
      patch: {
        description:
          'Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-connector',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board for which you want to update the connector.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the connector that you want to update.',
            in: 'path',
            name: 'connector_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConnectorChangesData',
              },
            },
          },
          required: true,
        },
        summary: 'Update connector',
        tags: ['Connectors'],
      },
      delete: {
        description:
          'Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-connector',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the connector.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the connector that you want to delete.',
            in: 'path',
            name: 'connector_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Delete connector',
        tags: ['Connectors'],
      },
    },
    '/v2/boards/{board_id}/documents': {
      post: {
        description:
          'Adds a document item to a board by specifying the URL where the document is hosted.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-document-item-using-url',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DocumentCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create document item using URL',
        tags: ['Documents'],
      },
    },
    '/v2/boards/{board_id}/documents/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-document-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get document item',
        tags: ['Documents'],
      },
      patch: {
        description:
          'Updates a document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-document-item-using-url',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DocumentUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update document item using URL',
        tags: ['Documents'],
      },
      delete: {
        description:
          'Deletes a document item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-document-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete document item',
        tags: ['Documents'],
      },
    },
    '/v2/boards/{board_id}/embeds': {
      post: {
        description:
          'Adds an embed item containing external content to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-embed-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EmbedCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create embed item',
        tags: ['Embeds'],
      },
    },
    '/v2/boards/{board_id}/embeds/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific embed item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-embed-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get embed item',
        tags: ['Embeds'],
      },
      patch: {
        description:
          'Updates an embed item on a board based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-embed-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/EmbedUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update embed item',
        tags: ['Embeds'],
      },
      delete: {
        description:
          'Deletes an embed item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-embed-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete embed item',
        tags: ['Embeds'],
      },
    },
    '/v2/boards/{board_id}/images': {
      post: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Adds an image item to a board by specifying an image URL.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-image-item-using-url',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ImageCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create image item using URL',
        tags: ['Images'],
      },
    },
    '/v2/boards/{board_id}/images/{item_id}': {
      get: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Retrieves information for a specific image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-image-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get image item',
        tags: ['Images'],
      },
      patch: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-image-item-using-url',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ImageUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update image item using URL',
        tags: ['Images'],
      },
      delete: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Deletes an image item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-image-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete image item',
        tags: ['Images'],
      },
    },
    '/v2/boards/{board_id}/items': {
      get: {
        description:
          "Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.\n\nThis method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
        operationId: 'get-items',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              default: '10',
              description:
                'The maximum number of results to return per call. If the number of items in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
              maximum: 50,
              minimum: 10,
            },
          },
          {
            in: 'query',
            name: 'type',
            schema: {
              type: 'string',
              enum: [
                'text',
                'shape',
                'sticky_note',
                'image',
                'document',
                'card',
                'app_card',
                'preview',
                'frame',
                'embed',
              ],
              description:
                'If you want to get a list of items of a specific type, specify an item type. For example, if you want to retrieve the list of card items, set `type` to `cards`.\n Possible values: `app_card`, `card`, `document`, `embed`, `frame`, `image`, `shape`, `sticky_note`, `text`',
              example: 'text',
            },
          },
          {
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              description:
                'A cursor-paginated method returns a portion of the total set of results based on the limit specified and a `cursor` that points to the next portion of the results. To retrieve the next portion of the collection, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request.',
              example: '',
            },
          },
          {
            description:
              'Unique identifier (ID) of the board for which you want to retrieve the list of available items.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get items on board',
        tags: ['Items'],
      },
    },
    '/v2/boards/{board_id}/items/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-specific-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get specific item on board',
        tags: ['Items'],
      },
      patch: {
        description:
          'Updates the position or the parent of an item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-item-position-or-parent',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/GenericItemUpdate',
              },
            },
          },
          required: true,
        },
        summary: 'Update item position or parent',
        tags: ['Items'],
      },
      delete: {
        description:
          'Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete item',
        tags: ['Items'],
      },
    },
    '/v2/boards/{board_id}/members': {
      post: {
        description:
          "Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board's Sharing policy, there might be various scenarios where membership in the team is required in order to share the board with a user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>",
        operationId: 'share-board',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board to which the board member belongs.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BoardMembersInvite',
              },
            },
          },
          required: true,
        },
        summary: 'Share board',
        tags: ['Board Members'],
      },
      get: {
        description:
          'Retrieves a pageable list of members for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-board-members',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              description: 'The maximum number of board members to retrieve.\nDefault: `20`.',
              maximum: 50,
              minimum: 1,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'offset',
            schema: {
              type: 'string',
              description: 'The (zero-based) offset of the first item in the collection to return.\nDefault: `0`.',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the board to which the board member belongs.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get all board members',
        tags: ['Board Members'],
      },
    },
    '/v2/boards/{board_id}/members/{board_member_id}': {
      get: {
        description:
          'Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-specific-board-member',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board to which the board member belongs.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the board member whose role you want to retrieve.',
            in: 'path',
            name: 'board_member_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_member_id}}',
            },
          },
        ],
        summary: 'Get specific board member',
        tags: ['Board Members'],
      },
      patch: {
        description:
          'Updates the role of a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-board-member',
        parameters: [
          {
            description:
              'Unique identifier (ID) of the board for which you want to update the role of the board member.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the board member whose role you want to update.',
            in: 'path',
            name: 'board_member_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_member_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BoardMemberChanges',
              },
            },
          },
          required: true,
        },
        summary: 'Update board member',
        tags: ['Board Members'],
      },
      delete: {
        description:
          'Removes a board member from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'remove-board-member',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete an item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the board member whose role you want to delete.',
            in: 'path',
            name: 'board_member_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_member_id}}',
            },
          },
        ],
        summary: 'Remove board member',
        tags: ['Board Members'],
      },
    },
    '/v2/boards/{board_id}/shapes': {
      post: {
        description:
          'Adds a shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-shape-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ShapeCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create shape item',
        tags: ['Shapes'],
      },
    },
    '/v2/boards/{board_id}/shapes/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-shape-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get shape item',
        tags: ['Shapes'],
      },
      patch: {
        description:
          'Updates a shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-shape-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ShapeUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update shape item',
        tags: ['Shapes'],
      },
      delete: {
        description:
          'Deletes a shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-shape-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete shape item',
        tags: ['Shapes'],
      },
    },
    '/v2/boards/{board_id}/sticky_notes': {
      post: {
        description:
          'Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-sticky-note-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/StickyNoteCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create sticky note item',
        tags: ['Sticky Notes'],
      },
    },
    '/v2/boards/{board_id}/sticky_notes/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-sticky-note-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get sticky note item',
        tags: ['Sticky Notes'],
      },
      patch: {
        description:
          'Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-sticky-note-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/StickyNoteUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update sticky note item',
        tags: ['Sticky Notes'],
      },
      delete: {
        description:
          'Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-sticky-note-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete sticky note item',
        tags: ['Sticky Notes'],
      },
    },
    '/v2/boards/{board_id}/texts': {
      post: {
        description:
          'Adds a text item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-text-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TextCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create text item',
        tags: ['Texts'],
      },
    },
    '/v2/boards/{board_id}/texts/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-text-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to retrieve a specific item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get text item',
        tags: ['Texts'],
      },
      patch: {
        description:
          'Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-text-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TextUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update text item',
        tags: ['Texts'],
      },
      delete: {
        description:
          'Deletes a text item from the board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-text-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the item.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete text item',
        tags: ['Texts'],
      },
    },
    '/v2/boards/{board_id}/items/{item_id}/tags': {
      get: {
        description:
          'Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-tags-from-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board with the item whose tags you want to retrieve.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the item whose tags you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get tags from item',
        tags: ['Tags'],
      },
    },
    '/v2/boards/{board_id}/tags': {
      post: {
        description:
          'Creates a tag on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'create-tag',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create the tag.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TagCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create tag',
        tags: ['Tags'],
      },
      get: {
        description:
          'Retrieves all the tags from the specified board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-tags-from-board',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              description: 'The maximum number of items that can be returned for a single request.\nDefault: `20`.',
              maximum: 50,
              minimum: 1,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'offset',
            schema: {
              type: 'string',
              description: 'The displacement of the first item in the collection to return.\nDefault: `0`.',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the board whose tags you want to retrieve.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get tags from board',
        tags: ['Tags'],
      },
    },
    '/v2/boards/{board_id}/tags/{tag_id}': {
      get: {
        description:
          'Retrieves information for a specific tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-tag',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to retrieve a specific tag.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag that you want to retrieve.',
            in: 'path',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        summary: 'Get tag',
        tags: ['Tags'],
      },
      patch: {
        description:
          'Updates a tag based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'update-tag',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update a specific tag.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag that you want to update.',
            in: 'path',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TagUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update tag',
        tags: ['Tags'],
      },
      delete: {
        description:
          'Deletes the specified tag from the board. The tag is also removed from all cards and sticky notes on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'delete-tag',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to delete a specific tag.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag that you want to delete.',
            in: 'path',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        summary: 'Delete tag',
        tags: ['Tags'],
      },
    },
    '/v2/boards/{board_id_PlatformTags}/items': {
      get: {
        description:
          'Retrieves all the items that have the specified tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-items-by-tag',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              description: 'The maximum number of items that can be returned for a single request.\nDefault: `20`.',
              maximum: 50,
              minimum: 1,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'offset',
            schema: {
              type: 'string',
              description: 'The displacement of the first item in the collection to return.\nDefault: `0`.',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the board where you want to retrieve a specific tag.',
            in: 'path',
            name: 'board_id_PlatformTags',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag that you want to retrieve.',
            in: 'query',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        summary: 'Get items by tag',
        tags: ['Tags'],
      },
    },
    '/v2/boards/{board_id_PlatformTags}/items/{item_id}': {
      post: {
        description:
          'Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'attach-tag-to-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board with the item that you want to add a tag to.',
            in: 'path',
            name: 'board_id_PlatformTags',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the item to which you want to add a tag.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag you want to add to the item.',
            in: 'query',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        summary: 'Attach tag to item',
        tags: ['Tags'],
      },
      delete: {
        description:
          'Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'remove-tag-from-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board with the item that you want to remove a tag from.',
            in: 'path',
            name: 'board_id_PlatformTags',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier (ID) of the item that you want to remove the tag from.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the tag that you want to remove from the item.',
            in: 'query',
            name: 'tag_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{tag_id}}',
            },
          },
        ],
        summary: 'Remove tag from item',
        tags: ['Tags'],
      },
    },
    '/v2-experimental/webhooks/board_subscriptions': {
      post: {
        description:
          'Creates a webhook subscription to receive notifications when an item on a board is updated. Subscriptions are created per user, per board. You can create multiple subscriptions. We currently support all board items barring tags, connectors, and comments. Changes in item position do not trigger an event at the moment.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-board-subscription',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateBoardSubscriptionRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create webhook subscription',
        tags: ['Webhooks (experimental)'],
      },
    },
    '/v2-experimental/webhooks/board_subscriptions/{subscription_id}': {
      patch: {
        description:
          'Updates the status or the callback URL of an existing webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-board-subscription',
        parameters: [
          {
            in: 'path',
            name: 'subscription_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateBoardSubscriptionRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update webhook subscription',
        tags: ['Webhooks (experimental)'],
      },
    },
    '/v2-experimental/webhooks/subscriptions': {
      get: {
        description:
          'Retrieves information about all webhook subscriptions for a specific user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>',
        operationId: 'get-user-subscriptions',
        parameters: [
          {
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              type: 'string',
              default: '10',
              description:
                'The maximum number of results to return per call. If the number of webhook subscriptions in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
              maximum: 100,
              minimum: 1,
            },
          },
          {
            in: 'query',
            name: 'cursor',
            required: false,
            schema: {
              type: 'string',
              description:
                'A cursor-paginated method returns a portion of the total set of results based on the limit specified and a `cursor` that points to the next portion of the results. To retrieve the next portion of the collection, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request.',
              example: '',
            },
          },
        ],
        summary: 'Get webhook subscriptions',
        tags: ['Webhooks (experimental)'],
      },
    },
    '/v2-experimental/webhooks/subscriptions/{subscription_id}': {
      get: {
        description:
          'Retrieves information for a specific webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'get-subscription-by-id',
        parameters: [
          {
            in: 'path',
            name: 'subscription_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            description: 'Unique identifier (ID) of the subscription that you want to retrieve',
          },
        ],
        summary: 'Get specific webhook subscription',
        tags: ['Webhooks (experimental)'],
      },
      delete: {
        description:
          'Deletes the specified webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'delete-subscription-by-id',
        parameters: [
          {
            in: 'path',
            name: 'subscription_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            description: 'Unique identifier (ID) of the subscription that you want to delete',
          },
        ],
        summary: 'Delete webhook subscription',
        tags: ['Webhooks (experimental)'],
      },
    },
    '/v2-experimental/boards/{board_id}/mindmap_nodes': {
      parameters: [
        {
          schema: {
            type: 'string',
          },
          name: 'board_id',
          in: 'path',
          required: true,
          description: 'Unique identifier (ID) of the board from which you want to retrieve mind map nodes.',
        },
      ],
    },
    '/v2/boards/{board_id}/frames': {
      post: {
        description:
          'Adds a frame to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'create-frame-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to create a frame.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/FrameCreateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create frame',
        tags: ['Frames'],
      },
    },
    '/v2/boards/{board_id}/frames/{item_id}': {
      get: {
        description:
          'Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
        operationId: 'get-frame-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board that contains the frame that you want to retrieve',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the frame that you want to retrieve.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Get frame',
        tags: ['Frames'],
      },
      patch: {
        description:
          'Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
        operationId: 'update-frame-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board where you want to update the frame.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the frame that you want to update.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/FrameUpdateRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update frame',
        tags: ['Frames'],
      },
      delete: {
        description:
          'Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
        operationId: 'delete-frame-item',
        parameters: [
          {
            description: 'Unique identifier (ID) of the board from which you want to delete the frame.',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
          {
            description: 'Unique identifier (ID) of the frame that you want to delete.',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{item_id}}',
            },
          },
        ],
        summary: 'Delete frame',
        tags: ['Frames'],
      },
    },
    '/v2/boards/{board_id_PlatformContainers}/items': {
      get: {
        description:
          "Retrieves a list of items within a specific frame. A frame is a parent item and all items within a frame are child items. This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
        operationId: 'get-items-within-frame',
        parameters: [
          {
            description:
              'Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items.',
            in: 'path',
            name: 'board_id_PlatformContainers',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'ID of the frame for which you want to retrieve the list of available items.',
            in: 'query',
            name: 'parent_item_id',
            required: true,
            schema: {
              type: 'string',
              minimum: 0,
              example: '',
            },
          },
          {
            in: 'query',
            name: 'limit',
            schema: {
              type: 'string',
              default: '10',
              description:
                'The maximum number of results to return per call. If the number of items in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
              maximum: 50,
              minimum: 10,
            },
          },
          {
            in: 'query',
            name: 'type',
            schema: {
              type: 'string',
              description:
                'If you want to get a list of items of a specific type, specify an item type. For example, if you want to retrieve the list of card items, set `type` to `cards`.\n Possible values: `app_card`, `card`, `document`, `embed`, `frame`, `image`, `shape`, `sticky_note`, `text`',
              example: '',
            },
          },
          {
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              description:
                'A cursor-paginated method returns a portion of the total set of results based on the limit specified and a `cursor` that points to the next portion of the results. To retrieve the next portion of the collection, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request.',
              example: '',
            },
          },
        ],
        summary: 'Get items within frame',
        tags: ['Items'],
      },
    },
    '/v2-experimental/boards/{board_id}/items': {
      parameters: [
        {
          schema: {
            type: 'string',
          },
          name: 'board_id',
          in: 'path',
          required: true,
          description:
            'Unique identifier (ID) of the board from which you want to retrieve the child nodes of a mind map node.',
        },
      ],
    },
    '/v2-experimental/boards/{board_id}/items/bulk': {
      parameters: [
        {
          $ref: '#/components/parameters/boardId',
        },
      ],
      post: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Adds different types of items to a board. You can add up to 20 items of the same or different type per create call. For example, you can create 3 shape items, 4 card items, and 5 sticky notes in one create call. The bulk create operation is transactional. If any item\'s create operation fails, the create operation for all the remaining items also fails, and none of the items will be created. <br/><br>To try out this API in our documentation:<br/><br>1. In the **BODY PARAMS** section, scroll down until you see **ADD OBJECT** (Figure 1).<br><br><img alt=“add src="https://files.readme.io/570dac1-small-add_object.png"><br>Figure 1. Add object user interface in readme<br><br>2. Click **ADD OBJECT**, and then select or enter the appropriate values for parameters of the item that you want to add.<br><br>3. Repeat steps 1 and 2 for each item that you want to add.<br> <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a>\n<br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> per item. For example, if you want to create one sticky note, one card, and one shape item in one call, the rate limiting applicable will be 300 credits. This is because create item calls take Level 2 rate limiting of 100 credits each, 100 for sticky note, 100 for card, and 100 for shape item.',
        operationId: 'create-items',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ItemCreate',
                },
                minItems: 1,
                maxItems: 20,
              },
            },
          },
          required: true,
        },
        summary: 'Create items in bulk',
      },
    },
    '/v2-experimental/boards/{board_id_PlatformBulkCreateOperationExperimentalRelease}/items': {
      parameters: [
        {
          $ref: '#/components/parameters/boardId',
        },
      ],
    },
    '/v2/orgs/{org_id}/teams': {
      post: {
        description:
          'Creates a new team in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-create-team',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateTeamRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create team',
        tags: ['Teams'],
      },
      get: {
        description:
          'Retrieves list of teams in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-teams',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            name: 'limit',
            in: 'query',
            schema: {
              maximum: 100,
              minimum: 1,
              type: 'integer',
              description: 'Limit for the number of teams returned in the result list.',
              format: 'int32',
              example: 100,
              default: 100,
            },
          },
          {
            description:
              'An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.',
            example: 3055557345821140500,
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description:
              'Name query. Filters teams by name using case insensitive partial match. A value "dev" will return both "Developer\'s team" and "Team for developers".',
            example: 'My team',
            in: 'query',
            name: 'name',
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'List teams',
        tags: ['Teams'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}': {
      get: {
        description:
          'Retrieves team information for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-team',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        summary: 'Get team',
        tags: ['Teams'],
      },
      patch: {
        description:
          'Updates an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-team',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamChanges',
              },
            },
          },
          required: true,
        },
        summary: 'Update team',
        tags: ['Teams'],
      },
      delete: {
        description:
          'Deletes an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-delete-team',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        summary: 'Delete team',
        tags: ['Teams'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/members': {
      post: {
        description:
          'Invites a new Miro user to an existing team. The user must exist in your Miro organization. Users who do not exist in your Miro organization can be invited to the team via [SCIM](https://developers.miro.com/docs/scim) and an external identity provider, such as Okta or Azure Active Directory.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-invite-team-member',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamMemberInvite',
              },
            },
          },
          required: true,
        },
        summary: 'Invite team members',
        tags: ['Team Members'],
      },
      get: {
        description:
          'Retrieves team members by cursor.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-team-members',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
          {
            name: 'limit',
            in: 'query',
            schema: {
              maximum: 100,
              minimum: 1,
              type: 'integer',
              description: 'Limit for the number of team members returned in the result list.',
              format: 'int32',
              example: 100,
              default: 100,
            },
          },
          {
            description:
              'An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.',
            example: 3055557345821140500,
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description:
              '\nRole query. Filters members by role using full word match. Accepted values are:            \n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "non_team":   External user, non-team user.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            in: 'query',
            name: 'role',
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'List team members',
        tags: ['Team Members'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}': {
      get: {
        description:
          'Retrieves team member by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-team-member',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
          {
            $ref: '#/components/parameters/pathTeamMemberId',
          },
        ],
        summary: 'Get team member',
        tags: ['Team Members'],
      },
      patch: {
        description:
          'Updates team member role in team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-team-member',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
          {
            $ref: '#/components/parameters/pathTeamMemberId',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamMemberChanges',
              },
            },
          },
          required: true,
        },
        summary: 'Update team member',
        tags: ['Team Members'],
      },
      delete: {
        description:
          'Deletes team member from team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-delete-team-member',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
          {
            $ref: '#/components/parameters/pathTeamMemberId',
          },
        ],
        summary: 'Delete team member from team',
        tags: ['Team Members'],
      },
    },
    '/v2/orgs/{org_id}/default_teams_settings': {
      get: {
        description:
          'Retrieves default team settings of an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-default-team-settings',
        parameters: [
          {
            description: 'The id of an Organization.',
            example: 3074457345618265000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get default team settings',
        tags: ['Team Settings'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/settings': {
      get: {
        description:
          'Retrieves team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-team-settings',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        summary: 'Get team settings',
        tags: ['Team Settings'],
      },
      patch: {
        description:
          'Updates team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-team-settings',
        parameters: [
          {
            $ref: '#/components/parameters/pathOrgId',
          },
          {
            $ref: '#/components/parameters/pathTeamId',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TeamSettingsChanges',
              },
            },
          },
          required: true,
        },
        summary: 'Update team settings',
        tags: ['Team Settings'],
      },
    },
    '/v2/orgs/{org_id}': {
      get: {
        description:
          'Retrieves organization information.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-organization',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get organization info',
        tags: ['Organizations'],
      },
    },
    '/v2/orgs/{org_id}/members': {
      get: {
        description:
          'Retrieves organization members based on the organization ID and the cursor, or based on the user emails provided in the request.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-organization-members',
        parameters: [
          {
            in: 'query',
            name: 'emails',
            schema: {
              type: 'string',
              description:
                'Emails of the organization members you want to retrieve. If you specify a value for the `emails` parameter, only the `emails` parameter is considered. All other filtering parameters are ignored. Maximum emails size is 10. Example: `emails=someEmail1@miro.com,someEmail2@miro.com`',
              example: 'someEmail1@miro.com',
            },
          },
          {
            in: 'query',
            name: 'role',
            schema: {
              type: 'string',
              description: 'Filter organization members by role',
              enum: [
                'organization_internal_admin',
                'organization_internal_user',
                'organization_external_user',
                'organization_team_guest_user',
                'unknown',
              ],
              example: 'organization_internal_admin',
            },
          },
          {
            in: 'query',
            name: 'license',
            schema: {
              type: 'string',
              description: 'Filter organization members by license',
              enum: ['full', 'occasional', 'free', 'free_restricted', 'full_trial', 'unknown'],
              example: 'full',
            },
          },
          {
            in: 'query',
            name: 'active',
            schema: {
              type: 'boolean',
              example: '',
            },
          },
          {
            in: 'query',
            name: 'cursor',
            schema: {
              type: 'string',
              description:
                "The ID of the organization member used as the reference for pagination. To retrieve the first portion of the collection don't pass a cursor value. To retrieve the next portion of the collection, set the `cursor` parameter value to the ID of the last organization member you received in the response of the previous request.",
              example: 3055557345821141000,
            },
          },
          {
            in: 'query',
            name: 'limit',
            schema: {
              maximum: 100,
              minimum: 1,
              type: 'integer',
              description: 'Limit for the number of organization members returned in the result list.',
              format: 'int32',
              example: 100,
              default: 100,
            },
          },
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get organization members',
        tags: ['Organization Members'],
      },
    },
    '/v2/orgs/{org_id}/members/{member_id}': {
      get: {
        description:
          'Retrieves organization member information for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-organization-member',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the organization member',
            example: 3055557345821141000,
            in: 'path',
            name: 'member_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get organization member',
        tags: ['Organization Members'],
      },
    },
    '/v2/orgs/{org_id}/data-classification-settings': {
      get: {
        description:
          'Retrieves board classification settings for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-organization-settings-get',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
        ],
        summary: 'Get organization settings',
        tags: ['Board classification: Organization level'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/data-classification': {
      patch: {
        description:
          'Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-team-boards-bulk',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the team',
            example: 3074457345618265000,
            in: 'path',
            name: 'team_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateBoardsDataClassificationLabelRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Bulk update boards classification',
        tags: ['Board classification: Team level'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/data-classification-settings': {
      get: {
        description:
          'Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-team-settings-get',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the team',
            example: 3074457345618265000,
            in: 'path',
            name: 'team_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
          },
        ],
        summary: 'Get team settings',
        tags: ['Board classification: Team level'],
      },
      patch: {
        description:
          'Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-team-settings-set',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the team',
            example: 3074457345618265000,
            in: 'path',
            name: 'team_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateTeamSettingsRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update team settings',
        tags: ['Board classification: Team level'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification': {
      get: {
        description:
          'Retrieves board classification for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-board-get',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the team',
            example: 3074457345618265000,
            in: 'path',
            name: 'team_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
          },
          {
            description: 'Unique identifier of the board that you want to retrieve.',
            example: 'o9J_kzlUDmo=',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        summary: 'Get board classification',
        tags: ['Board classification: Board level'],
      },
      post: {
        description:
          'Updates board classification for an existing board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-dataclassification-board-set',
        parameters: [
          {
            description: 'id of the organization',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'id of the team',
            example: 3074457345618265000,
            in: 'path',
            name: 'team_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
          },
          {
            description: 'Unique identifier of the board that you want to update.',
            example: 'o9J_kzlUDmo=',
            in: 'path',
            name: 'board_id',
            required: true,
            schema: {
              type: 'string',
              example: '{{board_id}}',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DataClassificationLabelId',
              },
            },
          },
          required: true,
        },
        summary: 'Update board classification',
        tags: ['Board classification: Board level'],
      },
    },
    '/v2/orgs/{org_id}/boards/export/jobs': {
      post: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Creates an export job for one or more boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p>',
        operationId: 'enterprise-create-board-export',
        parameters: [
          {
            description: 'Unique identifier of the organization.',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier of the board export job.',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
            in: 'query',
            name: 'request_id',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateBoardExportRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create board export job',
        tags: ['Board export job'],
      },
    },
    '/v2/orgs/{org_id}/boards/export/jobs/{job_id}': {
      get: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Retrieves the status of the board export job.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p>',
        operationId: 'enterprise-board-export-job-status',
        parameters: [
          {
            description: 'Unique identifier of the organization.',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier of the board export job.',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '',
            },
          },
        ],
        summary: 'Get board export job status',
        tags: ['Board export job'],
      },
    },
    '/v2/orgs/{org_id}/boards/export/jobs/{job_id}/results': {
      get: {
        'x-settings': {
          'skip-tests': true,
        },
        description:
          'Retrieves the result of the board export job. The response provides more information about the board export job, such as the S3 link to the files created.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p>',
        operationId: 'enterprise-board-export-job-results',
        parameters: [
          {
            description: 'Unique identifier of the organization.',
            example: 3074457345821141000,
            in: 'path',
            name: 'org_id',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
          },
          {
            description: 'Unique identifier of the job.',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
            in: 'path',
            name: 'job_id',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '',
            },
          },
        ],
        summary: 'Get results for board export job',
        tags: ['Board export job'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/projects': {
      post: {
        description:
          'Projects are essentially folders of boards with the option to manage user access for a smaller group of people within a team. Projects are here to help you organize your boards and make them easier to find and share. In other words, a project is a group of boards that you can share with your teammates all at once. For more information, see our <a href="https://help.miro.com/hc/en-us/articles/360018262033-Projects" target=_blank>Help Center page on Projects</a>. <br><br>This API creates a new project in an existing team of an organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-create-project',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization within which you you want to create a project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team within which you you want to create a project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CreateProjectRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Create project',
        tags: ['Projects'],
      },
      get: {
        description:
          'Retrieves the list of projects in an existing team of an organization. You can retrieve all projects, including all private projects (projects that haven\'t been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins).<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-projects',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization from which you want to retrieve the list of available projects.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team from which you want to retrieve the list of available projects.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'limit',
            description:
              'The maximum number of results to return per call. If the number of projects in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
            in: 'query',
            schema: {
              type: 'integer',
              format: 'int32',
              minimum: 1,
              maximum: 100,
              default: 100,
            },
            example: 100,
          },
          {
            name: 'cursor',
            description:
              'An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.',
            in: 'query',
            schema: {
              type: 'string',
              example: '',
            },
            example: 3074457345618265000,
          },
        ],
        summary: 'List of projects',
        tags: ['Projects'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}': {
      get: {
        description:
          'Retrieves project information, such as a name for an existing project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-project',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization from which you want to retrieve the project information.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team from which you want to retrieve the project information.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project for which you want to retrieve the information.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        summary: 'Get project',
        tags: ['Projects'],
      },
      patch: {
        description:
          'Update information about a project, such as the project name.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-project',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of an Organization.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of a Team.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of a Project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateProjectRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update project',
        tags: ['Projects'],
      },
      delete: {
        description:
          'Deletes a project. After a project is deleted, all boards and users that belong to the project remain in the team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-delete-project',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization from which you want to delete a project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team from which you want to delete a project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project that you want to delete.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        summary: 'Delete project',
        tags: ['Projects'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/settings': {
      get: {
        description:
          'Retrieves the project settings.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-project-settings',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012091',
          },
          {
            name: 'project_id',
            description: 'The ID of the project for which you want to retrieve the project settings.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        summary: 'Get project settings',
        tags: ['Project Settings'],
      },
      patch: {
        description:
          'Updates the settings of a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-project-settings',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project whose settings you want to update.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateProjectSettingsRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update project settings',
        tags: ['Project Settings'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members': {
      post: {
        description:
          'Add a Miro user to a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-add-project-member',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project to which you want to add a user.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AddProjectMemberRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Add member in a project',
        tags: ['Project Members'],
      },
      get: {
        description:
          'Retrieves the list of members for a specific project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-project-members',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project for which you want to retrieve the list of members.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'limit',
            description:
              'The maximum number of results to return per call. If the number of project members in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
            in: 'query',
            schema: {
              type: 'integer',
              format: 'int32',
              minimum: 1,
              maximum: 100,
              default: 100,
            },
            example: 100,
          },
          {
            name: 'cursor',
            description:
              'An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.',
            in: 'query',
            schema: {
              type: 'string',
              example: '',
            },
            example: 3074457345618265000,
          },
        ],
        summary: 'List of project members',
        tags: ['Project Members'],
      },
    },
    '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}': {
      get: {
        description:
          'Retrieves information for a specific project member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-get-project-member',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project from which you want to retrieve specific member information.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'member_id',
            description: 'The ID of the member for which you want to retrieve information.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '307445734562315000',
          },
        ],
        summary: 'Get project member',
        tags: ['Project Members'],
      },
      patch: {
        description:
          'Updates details of a project member, such as the member\'s role.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-update-project-member',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project member belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project member belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of a Project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'member_id',
            description: 'The ID of the member whose details you want to update.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '307445734562315000',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UpdateProjectMemberRequest',
              },
            },
          },
          required: true,
        },
        summary: 'Update project member',
        tags: ['Project Members'],
      },
      delete: {
        description:
          'Remove a member from a project. The user remains in the team even after the member is removed from a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href="/reference/api-reference#enterprise-plan">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href="https://miro-survey.typeform.com/to/BVPTNWJ9">this form</a>.</p>',
        operationId: 'enterprise-delete-project-member',
        parameters: [
          {
            name: 'org_id',
            description: 'The ID of the organization to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'team_id',
            description: 'The ID of the team to which the project belongs.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '{{team_id}}',
            },
            example: '3074457345619012000',
          },
          {
            name: 'project_id',
            description: 'The ID of the project from which you want to remove a member.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
          {
            name: 'member_id',
            description: 'The ID of the member that you want to remove from a project.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              example: '',
            },
            example: '3074457345618265000',
          },
        ],
        summary: 'Remove project member',
        tags: ['Project Members'],
      },
    },
  },
  components: {
    schemas: {
      AppCardCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/AppCardDataChanges',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      AppCardDataChanges: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          status: {
            type: 'string',
            default: 'disconnected',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            default: 'sample app card item',
            description: 'A short text header to identify the app card.',
          },
        },
      },
      AppCardItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/AppCardData',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'app_card',
          },
        },
        required: ['id', 'type'],
      },
      AppCardUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/AppCardDataChanges',
          },
          style: {
            $ref: '#/components/schemas/AppCardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      Board: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          project: {
            $ref: '#/components/schemas/Project',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardChanges: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Description of the board.',
            maxLength: 300,
            minLength: 0,
            example: 'Description',
          },
          name: {
            type: 'string',
            default: 'Untitled',
            description: 'Name for the board.',
            maxLength: 60,
            minLength: 1,
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicyChange',
          },
          teamId: {
            type: 'string',
            description: 'Unique identifier (ID) of the team where the board must be placed.',
            example: '{{team_id}}',
          },
          projectId: {
            type: 'string',
            description: 'Unique identifier (ID) of the project to which the board must be added.',
            example: '<value>',
          },
        },
      },
      CopyBoardChanges: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Description of the board.',
            maxLength: 300,
            minLength: 0,
            example: 'Description',
          },
          name: {
            type: 'string',
            default: 'Untitled',
            description: 'Name for the board.',
            maxLength: 60,
            minLength: 1,
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicyChange',
          },
          teamId: {
            type: 'string',
            description: 'Unique identifier (ID) of the team where the board must be placed.',
            example: '{{team_id}}',
          },
        },
      },
      BoardLinks: {
        type: 'object',
        description: 'Contains applicable links for the board.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the board members associated with the board.',
            example: 'http://api.miro.com/v2/boards/o9J_k1JKioQ=/members?limit=20&offset=0',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current board.',
            example: 'http://api.miro.com/v2/boards/o9J_k1JKioQ=',
          },
        },
      },
      BoardMember: {
        type: 'object',
        description:
          "Contains the current user's board membership details. The current user could be different from the board owner.",
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          role: {
            type: 'string',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
            example: 'viewer',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, `type` returns `board_member`.',
            example: 'board_member',
          },
        },
        required: ['id', 'name', 'type'],
      },
      BoardMemberChanges: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            default: 'commenter',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
        },
      },
      BoardMemberWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          role: {
            type: 'string',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
            example: 'viewer',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, `type` returns `board_member`.',
            example: 'board_member',
          },
        },
        required: ['id', 'name', 'type'],
      },
      BoardMembersInvite: {
        type: 'object',
        properties: {
          emails: {
            type: 'array',
            description:
              'Email IDs of the users you want to invite to the board. You can invite up to 20 members per call.',
            items: {
              type: 'string',
              example: 'member@email.com',
              description:
                'Email IDs of the users you want to invite to the board. You can invite up to 20 members per call.',
            },
            maxItems: 20,
            minItems: 1,
          },
          role: {
            type: 'string',
            default: 'commenter',
            description: 'Role of the board member.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner'],
          },
          message: {
            type: 'string',
            description: 'The message that will be sent in the invitation email.',
            example: "Hey there! Join my board and let's collaborate on this project!",
          },
        },
        required: ['emails'],
      },
      BoardMembersPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/BoardMember',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: '<value>',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
            example: '<value>',
          },
        },
      },
      BoardPermissionsPolicy: {
        type: 'object',
        description: 'Defines the permissions policies for the board.',
        properties: {
          collaborationToolsStartAccess: {
            type: 'string',
            default: 'all_editors',
            description:
              'Defines who can start or stop timer, voting, video chat, screen sharing, attention management. Others will only be able to join. To change the value for the `collaborationToolsStartAccess` parameter, contact Miro Customer Support.',
            enum: ['all_editors', 'board_owners_and_coowners'],
          },
          copyAccess: {
            type: 'string',
            default: 'anyone',
            description:
              'Defines who can copy the board, copy objects, download images, and save the board as a template or PDF.',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner'],
          },
          sharingAccess: {
            type: 'string',
            default: 'team_members_with_editing_rights',
            description:
              'Defines who can change access and invite users to this board. To change the value for the `sharingAccess` parameter, contact Miro Customer Support.',
            enum: ['team_members_with_editing_rights', 'owner_and_coowners'],
          },
        },
      },
      BoardPolicy: {
        type: 'object',
        description: 'Defines the permissions policies and sharing policies for the board.',
        properties: {
          permissionsPolicy: {
            $ref: '#/components/schemas/BoardPermissionsPolicy',
          },
          sharingPolicy: {
            $ref: '#/components/schemas/BoardSharingPolicy',
          },
        },
      },
      BoardPolicyChange: {
        type: 'object',
        description: 'Defines the permissions policies and sharing policies for the board.',
        properties: {
          permissionsPolicy: {
            $ref: '#/components/schemas/BoardPermissionsPolicy',
          },
          sharingPolicy: {
            $ref: '#/components/schemas/BoardSharingPolicyChange',
          },
        },
      },
      BoardSharingPolicy: {
        type: 'object',
        description:
          'Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.',
        properties: {
          access: {
            type: 'string',
            description: 'Defines the public-level access to the board.',
            enum: ['private', 'view', 'edit', 'comment'],
            example: 'private',
          },
          inviteToAccountAndBoardLinkAccess: {
            type: 'string',
            default: 'no_access',
            description:
              'Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access`.',
            enum: ['viewer', 'commenter', 'editor', 'coowner', 'owner', 'guest', 'no_access'],
          },
          organizationAccess: {
            type: 'string',
            default: 'private',
            description:
              'Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          teamAccess: {
            type: 'string',
            description: 'Defines the team-level access to the board.',
            enum: ['private', 'view', 'comment', 'edit'],
            example: 'private',
          },
        },
      },
      BoardSharingPolicyChange: {
        type: 'object',
        description:
          'Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.',
        properties: {
          access: {
            type: 'string',
            default: 'private',
            description: 'Defines the public-level access to the board.',
            enum: ['private', 'view', 'edit', 'comment'],
          },
          inviteToAccountAndBoardLinkAccess: {
            type: 'string',
            default: 'no_access',
            description:
              'Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access` regardless of the value that you assign for this parameter.',
            enum: ['viewer', 'commenter', 'editor', 'no_access'],
          },
          organizationAccess: {
            type: 'string',
            default: 'private',
            description:
              'Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
          teamAccess: {
            type: 'string',
            default: 'private',
            description: 'Defines the team-level access to the board.',
            enum: ['private', 'view', 'comment', 'edit'],
          },
        },
      },
      BoardWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          project: {
            $ref: '#/components/schemas/Project',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          links: {
            $ref: '#/components/schemas/BoardLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardWithLinksAndWithoutProject: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the board.',
            example: 'uXjVOD6LSME=',
          },
          name: {
            type: 'string',
            description: 'Name of the board.',
            example: 'Sample board name',
          },
          description: {
            type: 'string',
            description: 'Description of the board.',
            example: 'Sample board description',
          },
          team: {
            $ref: '#/components/schemas/Team',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          policy: {
            $ref: '#/components/schemas/BoardPolicy',
          },
          viewLink: {
            type: 'string',
            description: 'URL to view the board.',
            example: 'https://miro.com/app/board/uXjVOD6LSME=',
          },
          owner: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          currentUserMembership: {
            $ref: '#/components/schemas/BoardMember',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          modifiedBy: {
            $ref: '#/components/schemas/UserInfoShort',
          },
          links: {
            $ref: '#/components/schemas/BoardLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `board`.',
            example: 'board',
          },
        },
        required: ['description', 'id', 'name', 'type'],
      },
      BoardsPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Board',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: '<value>',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
            example: '<value>',
          },
        },
      },
      Caption: {
        type: 'object',
        description: "Contains the connector's caption data, such as content and its position.",
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the connector. Supports inline HTML tags.',
            example: '<p>Caption text</p>',
            maxLength: 200,
            minLength: 0,
          },
          position: {
            type: 'string',
            description:
              'The relative position of the text on the connector, in percentage, minimum 0%, maximum 100%. With 50% value, the text will be placed in the middle of the connector line. Default: 50%',
            example: '50%',
          },
          textAlignVertical: {
            type: 'string',
            description: 'The vertical position of the text on the connector. Default: middle',
            enum: ['top', 'middle', 'bottom'],
            example: 'top',
          },
        },
        required: ['content'],
      },
      CardCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      CardItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'card',
          },
        },
        required: ['id', 'type'],
      },
      CardUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/CardData',
          },
          style: {
            $ref: '#/components/schemas/CardStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ConnectorChangesData: {
        type: 'object',
        description: 'If both are provided, startItem.id must be different from endItem.id',
        properties: {
          startItem: {
            $ref: '#/components/schemas/ItemConnectionChangesData',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionChangesData',
          },
          shape: {
            type: 'string',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
            example: 'straight',
          },
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
            maxItems: 20,
            maxLength: 20,
            minItems: 0,
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
        },
      },
      ConnectorCreationData: {
        type: 'object',
        description: 'startItem.id must be different from endItem.id',
        properties: {
          startItem: {
            $ref: '#/components/schemas/ItemConnectionCreationData',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionCreationData',
          },
          shape: {
            type: 'string',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
            example: 'straight',
          },
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
            maxItems: 20,
            maxLength: 20,
            minItems: 0,
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
        },
        required: ['endItem', 'startItem'],
      },
      ConnectorStyle: {
        type: 'object',
        description: 'Contains information about the style of a connector, such as the color or caption font size',
        properties: {
          color: {
            type: 'string',
            description: 'Hex value representing the color for the captions on the connector. Default: `#1a1a1a`',
            example: '#9510ac',
          },
          endStrokeCap: {
            type: 'string',
            description: 'The decoration cap of the connector end, like an arrow or circle. Default: stealth.',
            enum: [
              'none',
              'stealth',
              'diamond',
              'diamond_filled',
              'oval',
              'oval_filled',
              'arrow',
              'triangle',
              'triangle_filled',
              'erd_one',
              'erd_many',
              'erd_only_one',
              'erd_zero_or_one',
              'erd_one_or_many',
              'erd_zero_or_many',
            ],
            example: 'none',
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the captions on the connector. Default: 14',
            example: '15',
            maximum: 288,
            minimum: 10,
          },
          startStrokeCap: {
            type: 'string',
            description: 'The decoration cap of the connector end, like an arrow or circle. Default: none.',
            enum: [
              'none',
              'stealth',
              'diamond',
              'diamond_filled',
              'oval',
              'oval_filled',
              'arrow',
              'triangle',
              'triangle_filled',
              'erd_one',
              'erd_many',
              'erd_only_one',
              'erd_zero_or_one',
              'erd_one_or_many',
              'erd_zero_or_many',
            ],
            example: 'none',
          },
          strokeColor: {
            type: 'string',
            description: 'Hex value of the color of the connector line. Default: #000000.',
            example: '#2d9bf0',
          },
          strokeStyle: {
            type: 'string',
            description: 'The stroke pattern of the connector line. Default: normal.',
            enum: ['normal', 'dotted', 'dashed'],
            example: 'normal',
          },
          strokeWidth: {
            type: 'string',
            description: 'The thickness of the connector line, in dp. Default: 1.0.',
            example: '2.0',
            maximum: 24,
            minimum: 1,
          },
          textOrientation: {
            type: 'string',
            description: 'The captions orientation relatively to the connector line curvature. Default: aligned.',
            enum: ['horizontal', 'aligned'],
            example: 'horizontal',
          },
        },
      },
      ConnectorWithLinks: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          captions: {
            type: 'array',
            description: 'Blocks of text you want to display on the connector.',
            items: {
              $ref: '#/components/schemas/Caption',
            },
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the connector was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          endItem: {
            $ref: '#/components/schemas/ItemConnectionWithLinks',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a connector.',
            example: '3458764517517818867',
          },
          isSupported: {
            type: 'boolean',
            description:
              'Indicates whether the connector is supported at the moment. If this parameter returns `false`, we do not support the connector at the moment. We do not allow updates for unsupported connectors and we might not return all data about the connector, such as intermediate points and connection points to the canvas.',
            example: '<value>',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the connector was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          shape: {
            type: 'string',
            default: 'curved',
            description: 'The path type of the connector line, defines curvature. Default: curved.',
            enum: ['straight', 'elbowed', 'curved'],
          },
          startItem: {
            $ref: '#/components/schemas/ItemConnectionWithLinks',
          },
          style: {
            $ref: '#/components/schemas/ConnectorStyle',
          },
          type: {
            type: 'string',
            description: 'Type of board object that is returned.',
            example: '<value>',
          },
        },
        required: ['id'],
      },
      ConnectorsCursorPaged: {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/ConnectorWithLinks',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
            example: '<value>',
          },
        },
      },
      DocumentCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/DocumentUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      DocumentItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/DocumentData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'document',
          },
        },
        required: ['id', 'type'],
      },
      DocumentUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/DocumentUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      DocumentUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: '<value>',
          },
          url: {
            type: 'string',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
      },
      EmbedCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/EmbedUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      EmbedItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/EmbedData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'embed',
          },
        },
        required: ['id', 'type'],
      },
      EmbedUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/EmbedUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      EmbedUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
            example: 'inline',
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      FixedRatioGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item, such as its width or rotation. You can set either the width or height, you cannot set both the width and height at the same time.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 100,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 100,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
        },
      },
      FixedRatioNoRotationGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item. You can set either the width or height. You cannot set both the width and height at the same time.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 100,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 100,
          },
        },
      },
      GenericItemUpdate: {
        type: 'object',
        properties: {
          parent: {
            $ref: '#/components/schemas/Parent',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
        },
      },
      ImageCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ImageUrlData',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      ImageItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/ImageData',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'image',
          },
        },
        required: ['id', 'type'],
      },
      ImageUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ImageUrlDataChanges',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      InvitationError: {
        type: 'object',
        description: 'Contains information about the invites that failed.',
        properties: {
          email: {
            type: 'string',
            description: 'Email ID for which the invitation failed.',
            example: 'john.smith.demo@miro.com',
          },
          reason: {
            type: 'string',
            description: 'Reason why the invitation failed.',
            example: 'INVITATION_FAILED',
          },
        },
      },
      InvitationResult: {
        type: 'object',
        properties: {
          failed: {
            type: 'array',
            description: 'Contains information about the invites that failed.',
            items: {
              $ref: '#/components/schemas/InvitationError',
            },
          },
          successful: {
            type: 'array',
            description: 'Contains information about the invites that were successfully sent.',
            example: 3074457350804038700,
            items: {
              type: 'integer',
              format: 'int64',
              description: 'Contains information about the invites that were successfully sent.',
              example: 3074457350804038700,
            },
          },
        },
      },
      ItemConnectionChangesData: {
        type: 'object',
        description:
          'The ending point of the connector. If startItem is also provided, endItem.id must be different from startItem.id',
        properties: {
          id: {
            type: 'string',
            description:
              'Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.',
            example: '3458764517517818867',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
          snapTo: {
            type: 'string',
            description:
              'The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default.',
            enum: ['auto', 'top', 'right', 'bottom', 'left'],
            example: 'auto',
          },
        },
      },
      ItemConnectionCreationData: {
        type: 'object',
        description: 'The end point of the connector. endItem.id must be different from startItem.id',
        properties: {
          id: {
            type: 'string',
            description:
              'Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment.',
            example: '3458764517517818867',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
          snapTo: {
            type: 'string',
            description:
              'The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option `auto` allows to pick a connection point automatically. Only either `position` or `snapTo` parameter is allowed to be set, if neither provided `snapTo: auto` will be used by default.',
            enum: ['auto', 'top', 'right', 'bottom', 'left'],
            example: 'auto',
          },
        },
      },
      ItemConnectionWithLinks: {
        type: 'object',
        description: 'The starting point of the connector.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the item the connector is attached to.',
            example: '3458764517517818867',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          position: {
            $ref: '#/components/schemas/RelativeOffset',
          },
        },
      },
      RelativeOffset: {
        type: 'object',
        description:
          'The relative position of the point on an item where the connector is attached. Position with x=0% and y=0% correspond to the top-left corner of the item, x=100% and y=100% correspond to the right-bottom corner.',
        properties: {
          x: {
            type: 'string',
            description:
              'X-axis relative coordinate of the location where the connector connects with an item, in percentage, minimum 0%, maximum 100%.',
            example: '50%',
          },
          y: {
            type: 'string',
            description:
              'Y-axis relative coordinate of the location where the connector connects with an item, in percentage, minimum 0%, maximum 100%.',
            example: '0%',
          },
        },
      },
      StickyNoteCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      StickyNoteItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'sticky_note',
          },
        },
        required: ['id', 'type'],
      },
      StickyNoteUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/StickyNoteData',
          },
          style: {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/FixedRatioNoRotationGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      TextCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/WidthOnlyAdjustableGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['data'],
      },
      TextItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'text',
          },
        },
        required: ['id', 'type'],
      },
      TextUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/TextData',
          },
          style: {
            $ref: '#/components/schemas/TextStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/WidthOnlyAdjustableGeometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      UserInfoShort: {
        type: 'object',
        description: 'Contains information about the user who created the board.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: 3074457353169356300,
          },
          name: {
            type: 'string',
            description: 'Name of the user.',
            example: 'John Smith',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
        required: ['id', 'name', 'type'],
      },
      WidthOnlyAdjustableGeometry: {
        type: 'object',
        description:
          'Contains geometrical information about the item, such as its width or rotation. You can only specify the width of the text item as the height is dynamically updated based on the content.',
        properties: {
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description:
              'Width of the item, in pixels.\nThe minimum `width` of a `text` widget is relative to the font size of the `text` widget. The width must be at least 1.7 times wider than the font size.\nFor example, if the font size of the `text` item is `14`, the minimum `width` is `24`.',
            example: 100,
          },
        },
      },
      AppCardDataPlatformTags: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          owned: {
            type: 'boolean',
            description: 'Defines whether the card is owned by the application making the call.',
            example: '<value>',
          },
          status: {
            type: 'string',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
            example: 'disconnected',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the app card.',
            example: 'sample app card item',
          },
        },
      },
      CustomFieldPlatformTags: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      DocumentDataPlatformTags: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      EmbedData: {
        type: 'object',
        properties: {
          contentType: {
            type: 'string',
            description: "Type of the embedded item's content.",
            example: 'video',
          },
          description: {
            type: 'string',
            description: 'Short description of the embedded item.',
            example:
              'So this is how to organize your life with Miro (a virtual whiteboard) for collaboration, brainstorming, and project management. Students, designers, agile en...',
          },
          html: {
            type: 'string',
            description: 'Html code of the embedded item.',
            example:
              '<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=...&display_name=YouTube&url=...&schema=youtube\\" width=\\"854\\" height=\\"480\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>',
          },
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
            example: 'inline',
          },
          previewUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          providerName: {
            type: 'string',
            description: "Name of the content's provider.",
            example: 'YouTube',
          },
          providerUrl: {
            type: 'string',
            description: "Url of the content's provider.",
            example: 'https://www.youtube.com/',
          },
          title: {
            type: 'string',
            description: 'Title of the embedded item.',
            example: 'HOW TO ORGANIZE YOUR LIFE WITH MIRO! ✏ Virtual Whiteboard Tour',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      EmptyStyle: {
        type: 'object',
        description: 'Contains information about the style of an item, such as the color, font, or border style.',
      },
      FrameDataPlatformTags: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom', 'desktop', 'phone', 'tablet', 'a4', 'letter', 'ratio_1x1', 'ratio_4x3', 'ratio_16x9'],
          },
          title: {
            type: 'string',
            description: 'Title of the frame. This title appears at the top of the frame.',
            example: 'Sample frame title',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform', 'heap', 'grid', 'rows', 'columns'],
          },
        },
      },
      GeometryPlatformTags: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      GetTagsResponse: {
        type: 'object',
        properties: {
          tags: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Tag',
            },
          },
        },
      },
      ImageDataPlatformTags: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      ItemPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericItem',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: '<value>',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          type: {
            type: 'string',
            example: '<value>',
          },
        },
      },
      PageLinksPlatformTags: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      SelfLinkPlatformTags: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      StickyNoteDataPlatformTags: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      Tag: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Background color of the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
            example: 'red',
          },
          id: {
            type: 'string',
            description: 'Unique identifier of the tag.',
            example: 3074457363306854000,
          },
          title: {
            type: 'string',
            description: 'Text of the tag',
            example: 'delayed',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `tag`.',
            example: '<value>',
          },
        },
        required: ['fillColor', 'id', 'title', 'type'],
      },
      TagCreateRequest: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            default: 'red',
            description: 'Fill color for the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
          },
          title: {
            type: 'string',
            description: 'Text of the tag. Case-sensitive. Must be unique.',
            example: 'to do',
            maxLength: 120,
            minLength: 0,
          },
        },
        required: ['title'],
      },
      TagUpdateRequest: {
        type: 'object',
        properties: {
          fillColor: {
            type: 'string',
            default: 'red',
            description: 'Fill color for the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
          },
          title: {
            type: 'string',
            description: 'Text of the tag. Case-sensitive. Must be unique.',
            example: 'done',
            maxLength: 120,
            minLength: 0,
          },
        },
      },
      TagWithLinks: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier of the tag.',
            example: 3074457363306854000,
          },
          title: {
            type: 'string',
            description: 'Text of the tag',
            example: 'delayed',
          },
          fillColor: {
            type: 'string',
            description: 'Background color of the tag.',
            enum: [
              'red',
              'light_green',
              'cyan',
              'yellow',
              'magenta',
              'green',
              'blue',
              'gray',
              'violet',
              'dark_green',
              'dark_blue',
              'black',
            ],
            example: 'red',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
          type: {
            type: 'string',
            description: 'Type of the object that is returned. In this case, type returns `tag`.',
            example: '<value>',
          },
        },
        required: ['fillColor', 'id', 'title', 'type'],
      },
      TagsPagedResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Tag',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: 1,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response. The `size` is the number of results returned considering the `offset` and the `limit` values sent in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`.<br>If there are `10` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `10`.<br>If there are `30` results, and the request has the offset set to `28` and the `limit` set to `20`, the `size` of the results will be `2` as the `offset` is the zero-based offset of the first item in the collection.',
            example: 1,
          },
          offset: {
            type: 'integer',
            format: 'int32',
            description:
              'Zero-based index of the first item in the collection. For example, If there are `30` results, and the request has the offset set to `28`, the response will return `2` results.',
            example: '<value>',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `30` results, and the request has the offset set to `0` and the `limit` set to `20`, the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.\n',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
            example: '<value>',
          },
        },
      },
      TextDataPlatformTags: {
        type: 'object',
        description:
          'Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the text item.',
            example: 'Hello',
          },
        },
        required: ['content'],
      },
      WidgetDataOutputPlatformTags: {
        type: 'object',
        description: 'Contains the item data, such as the item title, content, or description.',
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
          {
            $ref: '#/components/schemas/EmbedData',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/ImageData',
          },
          {
            $ref: '#/components/schemas/DocumentData',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/FrameData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
        ],
      },
      createdByPlatformTags: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedByPlatformTags: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      DocumentData: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      ImageData: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      BoardSubscription: {
        type: 'object',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://api.asana.com/v2/webhooks_endpoint',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was created.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          data: {
            $ref: '#/components/schemas/BoardSubscriptionData',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a webhook subscription.',
            example: '99c152bb-8259-4c7a-96d8-ad8eef47ecd4',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled', 'lost_access'],
          },
          type: {
            type: 'string',
            description: 'The type of object associated with the webhook subscription.',
            example: 'board_subscription',
          },
        },
      },
      BoardSubscriptionData: {
        type: 'object',
        description:
          'Contains information about a webhook subscription, such as the board ID associated with the webhook subscription, the date and time when the webhook subscription was last updated, and the type of board item that the subscription is associated with.',
        properties: {
          boardId: {
            type: 'string',
            description:
              '[Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) with which the webhook subscription is associated.',
            example: 'uXjVOfjmfkE=',
          },
        },
      },
      CreateBoardSubscriptionRequest: {
        type: 'object',
        description:
          'Contains the board ID associated with the webhook subscription, the webhook callback URL, and the status of the webhook subscription.',
        properties: {
          boardId: {
            type: 'string',
            description:
              '[Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to associate with the webhook subscription.',
            example: '{{board_id}}',
          },
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://yourwebhooklistener.com/v2/webhooks_endpoint',
            maxLength: 256,
            minLength: 8,
            pattern: '^https:\\/\\/(.*)',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription.`enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled'],
          },
        },
      },
      GenericSubscription: {
        type: 'object',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://api.asana.com/v2/webhooks_endpoint',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was created.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          data: {
            $ref: '#/components/schemas/SubscriptionData',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of a webhook subscription.',
            example: '99c152bb-8259-4c7a-96d8-ad8eef47ecd4',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the webhook subscription was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled', 'lost_access'],
          },
          type: {
            type: 'string',
            description: 'The type of object associated with the webhook subscription.',
            example: 'board_subscription',
          },
        },
      },
      GenericSubscriptionsCursorPaged: {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericSubscription',
            },
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: '<value>',
          },
        },
      },
      SubscriptionData: {
        type: 'object',
        description:
          'Contains information about a webhook subscription, such as the board ID that the webhook subscription is associated with.',
        oneOf: [
          {
            $ref: '#/components/schemas/BoardSubscriptionData',
          },
        ],
      },
      UpdateBoardSubscriptionRequest: {
        type: 'object',
        description: 'Contains updated information about a subscription.',
        properties: {
          callbackUrl: {
            type: 'string',
            description: 'Indicates the HTTPS URL to which Miro sends a webhook when an event occurs.',
            example: 'https://yourwebhooklistener.com/v2/webhooks_endpoint',
            maxLength: 256,
            minLength: 8,
            pattern: '^https:\\/\\/(.*)',
          },
          status: {
            type: 'string',
            default: 'enabled',
            description:
              'Indicates whether the status of the webhook subscription. `enabled`: Miro sends a webhook when an event occurs in the associated board.\n`disabled`: Miro does not send a webhook even when an event occurs in the associated board.\n`lost_access`: The user with which the webhook subscription is associated has lost access to the board.\nThe user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to `enabled` by using the update webhook endpoint.',
            enum: ['enabled', 'disabled'],
          },
        },
      },
      PageLinksPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      MindmapWidgetDataOutput: {
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
        description: 'Contains the mind map node data, such as the item title, content, or description.',
      },
      SelfLinkPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      ShapeCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ShapeDataForCreate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForCreate',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ShapeDataForCreate: {
        type: 'object',
        description: 'Contains shape item data, such as the content or the type of the shape.',
        properties: {
          content: {
            type: 'string',
            description:
              'The text you want to display on the shape.\n<br>**Not supported for shapes:**\n<ul>\n  <li>flow_chart_or</li>\n  <li>flow_chart_summing_junction</li>\n</ul>',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description:
              'Defines the geometric shape of the item when it is rendered on the board. <details>\n  <summary>Basic shapes</summary>\n  <ul>\n    <li>rectangle</li>\n    <li>round_rectangle</li>\n    <li>circle</li>\n    <li>triangle</li>\n    <li>rhombus</li>\n    <li>parallelogram</li>\n    <li>trapezoid</li>\n    <li>pentagon</li>\n    <li>hexagon</li>\n    <li>octagon</li>\n    <li>wedge_round_rectangle_callout</li>\n    <li>star</li>\n    <li>flow_chart_predefined_process</li>\n    <li>cloud</li>\n    <li>cross</li>\n    <li>can</li>\n    <li>right_arrow</li>\n    <li>left_arrow</li>\n    <li>left_right_arrow</li>\n    <li>left_brace</li>\n    <li>right_brace</li>\n  </ul>\n</details>\n<details>\n  <summary>Flowchart shapes</summary>\n  <ul>\n    <li>flow_chart_connector</li>\n    <li>flow_chart_magnetic_disk</li>\n    <li>flow_chart_input_output</li>\n    <li>flow_chart_decision</li>\n    <li>flow_chart_delay</li>\n    <li>flow_chart_display</li>\n    <li>flow_chart_document</li>\n    <li>flow_chart_magnetic_drum</li>\n    <li>flow_chart_internal_storage</li>\n    <li>flow_chart_manual_input</li>\n    <li>flow_chart_manual_operation</li>\n    <li>flow_chart_merge</li>\n    <li>flow_chart_multidocuments</li>\n    <li>flow_chart_note_curly_left</li>\n    <li>flow_chart_note_curly_right</li>\n    <li>flow_chart_note_square</li>\n    <li>flow_chart_offpage_connector</li>\n    <li>flow_chart_or</li>\n    <li>flow_chart_predefined_process_2</li>\n    <li>flow_chart_preparation</li>\n    <li>flow_chart_process</li>\n    <li>flow_chart_online_storage</li>\n    <li>flow_chart_summing_junction</li>\n    <li>flow_chart_terminator</li>\n  </ul>\n</details>',
          },
        },
      },
      ShapeDataForUpdate: {
        type: 'object',
        description: 'Contains shape item data, such as the content or the type of the shape.',
        properties: {
          content: {
            type: 'string',
            description:
              'The text you want to display on the shape.\n**Note: When updating a shape type to one of the types below, existing `content` will be lost.**\n<br>**Not supported for shapes:**\n<ul>\n  <li>flow_chart_or</li>\n  <li>flow_chart_summing_junction</li>\n</ul>',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description:
              'Defines the geometric shape of the item when it is rendered on the board. <details>\n  <summary>Basic shapes</summary>\n  <ul>\n    <li>rectangle</li>\n    <li>round_rectangle</li>\n    <li>circle</li>\n    <li>triangle</li>\n    <li>rhombus</li>\n    <li>parallelogram</li>\n    <li>trapezoid</li>\n    <li>pentagon</li>\n    <li>hexagon</li>\n    <li>octagon</li>\n    <li>wedge_round_rectangle_callout</li>\n    <li>star</li>\n    <li>flow_chart_predefined_process</li>\n    <li>cloud</li>\n    <li>cross</li>\n    <li>can</li>\n    <li>right_arrow</li>\n    <li>left_arrow</li>\n    <li>left_right_arrow</li>\n    <li>left_brace</li>\n    <li>right_brace</li>\n  </ul>\n</details>\n<details>\n  <summary>Flowchart shapes</summary>\n  <ul>\n    <li>flow_chart_connector</li>\n    <li>flow_chart_magnetic_disk</li>\n    <li>flow_chart_input_output</li>\n    <li>flow_chart_decision</li>\n    <li>flow_chart_delay</li>\n    <li>flow_chart_display</li>\n    <li>flow_chart_document</li>\n    <li>flow_chart_magnetic_drum</li>\n    <li>flow_chart_internal_storage</li>\n    <li>flow_chart_manual_input</li>\n    <li>flow_chart_manual_operation</li>\n    <li>flow_chart_merge</li>\n    <li>flow_chart_multidocuments</li>\n    <li>flow_chart_note_curly_left</li>\n    <li>flow_chart_note_curly_right</li>\n    <li>flow_chart_note_square</li>\n    <li>flow_chart_offpage_connector</li>\n    <li>flow_chart_or</li>\n    <li>flow_chart_predefined_process_2</li>\n    <li>flow_chart_preparation</li>\n    <li>flow_chart_process</li>\n    <li>flow_chart_online_storage</li>\n    <li>flow_chart_summing_junction</li>\n    <li>flow_chart_terminator</li>\n  </ul>\n</details>',
          },
        },
      },
      ShapeItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: '3458764517517819000',
          },
          data: {
            $ref: '#/components/schemas/ShapeDataForCreate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForCreate',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'shape',
          },
        },
        required: ['id', 'type'],
      },
      ShapeStyleForCreate: {
        type: 'object',
        description:
          'Contains information about the shape style, such as the border color or opacity. <br> All properties in style object are supported for shape types aren\'t listed below. <br> <table>\n  <tr>\n    <th align="left">Shape type</th>\n    <th align="left">Unsupported properties</th>\n  </tr>\n  <tr>\n    <td>flow_chart_or</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_summing_junction</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_left</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_right</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_square</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n</table>',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
            example: '#1a1a1a',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
            example: '0.0',
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
            example: 'normal',
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
            example: '1.0',
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault:  `Flowchart` shapes: `1.0`. `Basic` shapes: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided.\n',
            maximum: 1,
            minimum: 0,
            example: '1.0',
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
            example: 'arial',
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
            example: '12',
          },
          textAlign: {
            type: 'string',
            description:
              'Defines how the shape text is horizontally aligned.\nDefault: \nFlowchart shapes: `center`.\nBasic shapes: `left`.\n\n`unknown` is returned for unsupported shapes.',
            enum: ['left', 'right', 'center', 'unknown'],
            example: 'left',
          },
          textAlignVertical: {
            type: 'string',
            description:
              'Defines how the shape text is vertically aligned.\nDefault: \nFlowchart shapes: `middle`.\nBasic shapes: `top`.\n\n`unknown` is returned for unsupported shapes.',
            enum: ['top', 'middle', 'bottom', 'unknown'],
            example: 'top',
          },
        },
      },
      ShapeStyleForUpdate: {
        type: 'object',
        description:
          'Contains information about the shape style, such as the border color or opacity. <br> All properties in style object are supported for shape types aren\'t listed below. <br> <table>\n  <tr>\n    <th align="left">Shape type</th>\n    <th align="left">Unsupported properties</th>\n  </tr>\n  <tr>\n    <td>flow_chart_or</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_summing_junction</td>\n    <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_left</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_curly_right</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n  <tr>\n    <td>flow_chart_note_square</td>\n    <td>fillColor, fillOpacity</td>\n  </tr>\n</table>',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
            example: '#1a1a1a',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
            example: '0.0',
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
            example: 'normal',
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
            example: '1.0',
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault:  Flowchart shapes: `1.0`. Basic shapes: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided.\n',
            maximum: 1,
            minimum: 0,
            example: '1.0',
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
            example: 'arial',
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
            example: '12',
          },
          textAlign: {
            type: 'string',
            description:
              'Defines how the sticky note text is horizontally aligned.\nDefault: \nFlowchart shapes: `center`.\nBasic shapes: `left`.',
            enum: ['left', 'right', 'center'],
            example: 'left',
          },
          textAlignVertical: {
            type: 'string',
            description:
              'Defines how the sticky note text is vertically aligned.\nDefault: \nFlowchart shapes: `middle`.\nBasic shapes: `top`.',
            enum: ['top', 'middle', 'bottom'],
            example: 'top',
          },
        },
      },
      ShapeUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/ShapeDataForUpdate',
          },
          style: {
            $ref: '#/components/schemas/ShapeStyleForUpdate',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      WidgetLinksPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child items related to the frame.',
            example:
              'http://api.miro.com/v2/boards/o9J_koQspF4=/items?parent_item_id=307445734914369434&limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current item.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/item/3074457349143649487',
          },
        },
      },
      GeometryPlatformExperimentalFeatures: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      FrameChanges: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom'],
          },
          title: {
            type: 'string',
            default: 'Sample frame title',
            description: 'Title of the frame. This title appears at the top of the frame.',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform'],
          },
          showContent: {
            type: 'boolean',
            default: true,
            description: 'Hide or reveal the content inside a frame (Enterprise plan only).',
          },
        },
      },
      FrameCreateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/FrameChanges',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/GeometryNoRotation',
          },
        },
        required: ['data'],
      },
      FrameData: {
        type: 'object',
        description: 'Contains frame item data, such as the title, frame type, or frame format.',
        properties: {
          format: {
            type: 'string',
            default: 'custom',
            description: 'Only custom frames are supported at the moment.',
            enum: ['custom', 'desktop', 'phone', 'tablet', 'a4', 'letter', 'ratio_1x1', 'ratio_4x3', 'ratio_16x9'],
          },
          title: {
            type: 'string',
            description: 'Title of the frame. This title appears at the top of the frame.',
            example: 'Sample frame title',
          },
          type: {
            type: 'string',
            default: 'freeform',
            description: 'Only free form frames are supported at the moment.',
            enum: ['freeform', 'heap', 'grid', 'rows', 'columns'],
          },
          showContent: {
            type: 'boolean',
            default: true,
            description: 'Hide or reveal the content inside a frame (Enterprise plan only).',
          },
        },
      },
      FrameItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: 3458764517517819000,
          },
          data: {
            $ref: '#/components/schemas/FrameData',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'frame',
          },
        },
        required: ['id', 'type'],
      },
      FrameStyle: {
        type: 'object',
        description: 'Contains information about the style of a frame item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              'Fill color for the frame.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffffff (transparent).',
            example: '#ffffffff',
          },
        },
      },
      FrameUpdateRequest: {
        type: 'object',
        properties: {
          data: {
            $ref: '#/components/schemas/FrameChanges',
          },
          style: {
            $ref: '#/components/schemas/FrameStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/GeometryNoRotation',
          },
        },
      },
      GenericItem: {
        type: 'object',
        description: 'Contains the result data.',
        properties: {
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          createdBy: {
            $ref: '#/components/schemas/createdBy',
          },
          data: {
            $ref: '#/components/schemas/OpaqueData',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of an item.',
            example: '3458764517517819000',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2022-03-30T17:26:50.000Z',
          },
          modifiedBy: {
            $ref: '#/components/schemas/modifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: 'sticky_note',
          },
        },
        required: ['id', 'type'],
      },
      GenericItemCursorPaged: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/GenericItem',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            example: '<value>',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: 'MzQ1ODc2NDUyMjQ5MDA4Mjg5NX4=',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 20,
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
        },
      },
      GeometryPlatformContainers: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      GeometryNoRotation: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 100,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 100,
          },
        },
      },
      OpaqueData: {
        type: 'object',
      },
      PageLinksPlatformContainers: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'http://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      SelfLinkPlatformContainers: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      WidgetLinksPlatformContainers: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child items related to the frame.',
            example:
              'http://api.miro.com/v2/boards/o9J_koQspF4=/items?parent_item_id=307445734914369434&limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to obtain information about the current item.',
            example: 'http://api.miro.com/v2/boards/o9J_koQspF4=/item/3074457349143649487',
          },
        },
      },
      createdByPlatformContainers: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedByPlatformContainers: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      createdBy: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      modifiedBy: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      MindmapCursorPaged: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/MindmapItem',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
            description:
              'Total number of results available. If the value of the `total` parameter is higher than the value of the `size` parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the `offset` value accordingly. For example, if there are `30` results, and the request has the `offset` set to `0` and the `limit` set to `20`, the `size` parameter will return `20` and the `total` parameter will return `30`. This means that there are 9 more results to retrieve (as the offset is zero-based).',
            example: '<value>',
          },
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: '<value>',
          },
          cursor: {
            type: 'string',
            description:
              'A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.',
            example: '<value>',
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: '<value>',
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
        },
      },
      ParentLinksEnvelope: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of the parent mind map node for the item.',
            example: '{{parent_id}}',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
        description: 'Contains information about the parent mind map node for the item.',
      },
      MindmapItemPlatformContainersExperimental: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of an item.',
            example: 3074457362577955300,
          },
          data: {
            $ref: '#/components/schemas/MindmapData',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: '<value>',
          },
        },
        required: ['id', 'type'],
      },
      MindmapData: {
        type: 'object',
        description: 'Contains mind map node data, such as `nodeView` or `isRoot`.',
        properties: {
          nodeView: {
            $ref: '#/components/schemas/MindmapNodeView',
          },
          isRoot: {
            type: 'boolean',
            description: 'Indicates whether this node is the root node of the mind map.',
            example: '<value>',
          },
        },
      },
      WidgetLinks: {
        type: 'object',
        description: 'Contains applicable links for the item.',
        properties: {
          related: {
            type: 'string',
            description: 'Link to obtain information about the child nodes.',
            example: '<value>',
          },
          self: {
            type: 'string',
            example: '<value>',
          },
        },
      },
      MindmapNodeView: {
        type: 'object',
        description: 'Contains information about the item used as a mind map node.',
        properties: {
          type: {
            type: 'string',
            description: 'Type of mind map node. Currently, `type` can only be set to `text`.',
            example: '<value>',
          },
          data: {
            $ref: '#/components/schemas/WidgetDataOutput',
          },
        },
      },
      WidgetDataOutput: {
        oneOf: [
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
        description: 'Contains the item data, such as the item title, content, or description.',
      },
      MindmapItem: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            description: 'Unique identifier (ID) of an item.',
            example: 3074457362577955300,
          },
          data: {
            $ref: '#/components/schemas/MindmapData',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          modifiedAt: {
            type: 'string',
            format: 'date-time',
            description:
              'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '<value>',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          parent: {
            $ref: '#/components/schemas/ParentLinksEnvelope',
          },
          links: {
            $ref: '#/components/schemas/WidgetLinks',
          },
          type: {
            type: 'string',
            description: 'Type of item that is returned.',
            example: '<value>',
          },
        },
        required: ['id', 'type'],
      },
      AppCardData: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          status: {
            type: 'string',
            default: 'disconnected',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
          },
          title: {
            type: 'string',
            default: 'sample app card item',
            description: 'A short text header to identify the app card.',
          },
        },
      },
      AppCardDataResponse: {
        type: 'object',
        description: 'Contains app card item data, such as the title, description, or fields.',
        properties: {
          description: {
            type: 'string',
            description: 'A short text description to add context about the app card.',
            example: 'Sample app card description',
          },
          fields: {
            type: 'array',
            description:
              'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
            items: {
              $ref: '#/components/schemas/CustomField',
            },
          },
          owned: {
            type: 'boolean',
            description: 'Defines whether the card is owned by the application making the call.',
            example: '<value>',
          },
          status: {
            type: 'string',
            description:
              'Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`.',
            enum: ['disconnected', 'connected', 'disabled'],
            example: 'disconnected',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the app card.',
            example: 'sample app card item',
          },
        },
      },
      AppCardStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the style of an app card item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Hex value of the border color of the app card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      CardData: {
        type: 'object',
        description: 'Contains card item data, such as the title, description, due date, or assignee ID.',
        properties: {
          assigneeId: {
            type: 'string',
            format: 'int64',
            description:
              'Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is a string containing  numbers, and it is automatically assigned to a user when they first sign up.',
            example: 3074457362577955300,
          },
          description: {
            type: 'string',
            description: 'A short text description to add context about the card.',
            example: 'sample card description',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
            description:
              'The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
            example: '2023-10-12T22:00:55.000Z',
          },
          title: {
            type: 'string',
            default: 'sample card item',
            description: 'A short text header for the card.',
            example: 'sample card item',
          },
        },
      },
      CardStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the style of a card item, such as the card theme.',
        properties: {
          cardTheme: {
            type: 'string',
            description: 'Hex value of the border color of the card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      DocumentUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
          url: {
            type: 'string',
            default: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
        required: ['url'],
      },
      DocumentDataResponse: {
        type: 'object',
        properties: {
          documentUrl: {
            type: 'string',
            description:
              'The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter to control the request execution.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is `application/octet-stream`.',
            example: 'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
        },
      },
      EmbedUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
            example: 'inline',
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
          url: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
          },
        },
        required: ['url'],
      },
      EmbedDataResponse: {
        type: 'object',
        properties: {
          contentType: {
            type: 'string',
            description: "Type of the embedded item's content.",
            example: 'video',
          },
          description: {
            type: 'string',
            description: 'Short description of the embedded item.',
            example:
              'So this is how to organize your life with Miro (a virtual whiteboard) for collaboration, brainstorming, and project management. Students, designers, agile en...',
          },
          html: {
            type: 'string',
            description: 'HTML code of the embedded item.',
            example:
              '<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=...&display_name=YouTube&url=...&schema=youtube\\" width=\\"854\\" height=\\"480\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>',
          },
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
            example: 'inline',
          },
          previewUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL.\nThe URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters:\n`format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`.\n`redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file.\nIf the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          providerName: {
            type: 'string',
            description: "Name of the content's provider.",
            example: 'YouTube',
          },
          providerUrl: {
            type: 'string',
            description: "Url of the content's provider.",
            example: 'https://www.youtube.com/',
          },
          title: {
            type: 'string',
            description: 'Title of the embedded item.',
            example: 'HOW TO ORGANIZE YOUR LIFE WITH MIRO! ?? Virtual Whiteboard Tour',
          },
          url: {
            type: 'string',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
            example: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
          },
        },
      },
      ShapeDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains shape item data, such as the content or shape type of the shape.',
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the shape.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description: 'Defines the geometric shape of the item when it is rendered on the board.',
            enum: [
              'rectangle',
              'round_rectangle',
              'circle',
              'triangle',
              'rhombus',
              'parallelogram',
              'trapezoid',
              'pentagon',
              'hexagon',
              'octagon',
              'wedge_round_rectangle_callout',
              'star',
              'flow_chart_predefined_process',
              'cloud',
              'cross',
              'can',
              'right_arrow',
              'left_arrow',
              'left_right_arrow',
              'left_brace',
              'right_brace',
            ],
          },
        },
      },
      ShapeStyle: {
        type: 'object',
        description: 'Contains information about the shape style, such as the border color or opacity.',
        properties: {
          borderColor: {
            type: 'string',
            description: 'Defines the color of the border of the shape.\nDefault: `#1a1a1a` (dark gray).',
            example: '#1a1a1a',
          },
          borderOpacity: {
            type: 'string',
            description:
              'Defines the opacity level of the shape border.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible\n`1.0`: the background color is completely opaque or solid\nDefault: `1.0` (solid color).',
            maximum: 1,
            minimum: 0,
            example: '0.0',
          },
          borderStyle: {
            type: 'string',
            description: 'Defines the style used to represent the border of the shape.\nDefault: `normal`.',
            enum: ['normal', 'dotted', 'dashed'],
            example: 'normal',
          },
          borderWidth: {
            type: 'string',
            description: 'Defines the thickness of the shape border, in dp.\nDefault: `2.0`.',
            maximum: 24,
            minimum: 1,
            example: '1.0',
          },
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the shape item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description:
              'Fill color for the shape.\nHex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`\nDefault: #ffffff.',
            example: '#8fd14f',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the fill color.\nPossible values: any number between `0` and `1`, where:\n`0.0`: the background color is completely transparent or invisible.\n`1.0`: the background color is completely opaque or solid.\n\n Default: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.\n',
            maximum: 1,
            minimum: 0,
            example: '1.0',
          },
          fontFamily: {
            type: 'string',
            description: 'Defines the font type for the text in the shape item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
            example: 'arial',
          },
          fontSize: {
            type: 'string',
            description: 'Defines the font size, in dp, for the text on the shape.\nDefault: `14`.',
            maximum: 288,
            minimum: 10,
            example: '12',
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
            example: 'left',
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
            example: 'top',
          },
        },
      },
      StickyNoteDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      StickyNoteStylePlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description:
          'Contains information about the style of a sticky note item, such as the fill color or text alignment.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Fill color for the sticky note.\nDefault: `light_yellow`.',
            enum: [
              'gray',
              'light_yellow',
              'yellow',
              'orange',
              'light_green',
              'green',
              'dark_green',
              'cyan',
              'light_pink',
              'pink',
              'violet',
              'red',
              'light_blue',
              'blue',
              'dark_blue',
              'black',
            ],
            example: 'gray',
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
            example: 'left',
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
            example: 'top',
          },
        },
      },
      TextData: {
        type: 'object',
        description:
          'Contains text item data, such as the title, content, or description. For more information on the JSON properties, see [Data](https://developers.miro.com/reference/data).',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the text item.',
            example: 'Hello',
          },
        },
        required: ['content'],
      },
      TextStyle: {
        type: 'object',
        description: 'Contains information about the style of a text item, such as the fill color or font family.',
        properties: {
          color: {
            type: 'string',
            description: 'Hex value representing the color for the text within the text item.\nDefault: `#1a1a1a`.',
            example: '#1a1a1a',
          },
          fillColor: {
            type: 'string',
            description: 'Background color of the text item.\nDefault: `#ffffff`.',
            example: '#e6e6e6',
          },
          fillOpacity: {
            type: 'string',
            description:
              'Opacity level of the background color.\nPossible values: any number between `0.0` and `1.0`, where:\n`0.0`: the background color is completely transparent or invisible.\n`1.0`: the background color is completely opaque or solid.\nDefault: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.',
            maximum: 1,
            minimum: 0,
            example: '1.0',
          },
          fontFamily: {
            type: 'string',
            description: 'Font type for the text in the text item.\nDefault: `arial`.',
            enum: [
              'arial',
              'abril_fatface',
              'bangers',
              'eb_garamond',
              'georgia',
              'graduate',
              'gravitas_one',
              'fredoka_one',
              'nixie_one',
              'open_sans',
              'permanent_marker',
              'pt_sans',
              'pt_sans_narrow',
              'pt_serif',
              'rammetto_one',
              'roboto',
              'roboto_condensed',
              'roboto_slab',
              'caveat',
              'times_new_roman',
              'titan_one',
              'lemon_tuesday',
              'roboto_mono',
              'noto_sans',
              'plex_sans',
              'plex_serif',
              'plex_mono',
              'spoof',
              'tiempos_text',
              'formular',
            ],
            example: 'arial',
          },
          fontSize: {
            type: 'string',
            description: 'Font size, in dp.\nDefault: `14`.',
            minimum: 1,
            example: '12',
          },
          textAlign: {
            type: 'string',
            description: "Horizontal alignment for the item's content.\nDefault: `center.`",
            enum: ['left', 'right', 'center'],
            example: 'left',
          },
        },
      },
      CustomFieldPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      GeometryPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      Item: {
        type: 'object',
        description: 'Contains information about an item.',
        properties: {
          id: {
            $ref: '#/components/schemas/ItemId',
          },
          data: {
            $ref: '#/components/schemas/ItemData',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/Position',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/ParentWithLinks',
          },
          isSupported: {
            type: 'boolean',
            example: '<value>',
          },
          createdBy: {
            $ref: '#/components/schemas/CreatedBy',
          },
          createdAt: {
            $ref: '#/components/schemas/CreationTime',
          },
          modifiedBy: {
            $ref: '#/components/schemas/ModifiedBy',
          },
          modifiedAt: {
            $ref: '#/components/schemas/ModificationTime',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
        required: ['id', 'type', 'links'],
      },
      ItemChanges: {
        type: 'object',
        description: 'Updates one or more items in one request. You can update up to 20 items per request.',
        properties: {
          id: {
            $ref: '#/components/schemas/ItemId',
          },
          type: {
            $ref: '#/components/schemas/ItemTypeChange',
          },
          data: {
            $ref: '#/components/schemas/ItemDataChanges',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
      },
      ItemCreate: {
        type: 'object',
        description: 'Creates one or more items in one request. You can create up to 20 items per request.',
        properties: {
          type: {
            $ref: '#/components/schemas/ItemTypeChange',
          },
          data: {
            $ref: '#/components/schemas/ItemDataCreate',
          },
          style: {
            $ref: '#/components/schemas/ItemStyle',
          },
          position: {
            $ref: '#/components/schemas/PositionChange',
          },
          geometry: {
            $ref: '#/components/schemas/Geometry',
          },
          parent: {
            $ref: '#/components/schemas/Parent',
          },
        },
        required: ['type'],
      },
      ItemData: {
        type: 'object',
        description: 'Contains information about item-specific data.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardDataResponse',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/DocumentDataResponse',
          },
          {
            $ref: '#/components/schemas/EmbedDataResponse',
          },
          {
            $ref: '#/components/schemas/ImageDataResponse',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
      },
      ItemDataChanges: {
        type: 'object',
        description: 'Provides information about item-specific fields for update request.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/ImageUrlDataChanges',
          },
        ],
      },
      ItemDataCreate: {
        type: 'object',
        description: 'Contains data information applicable for each item type.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardData',
          },
          {
            $ref: '#/components/schemas/CardData',
          },
          {
            $ref: '#/components/schemas/DocumentUrlData',
          },
          {
            $ref: '#/components/schemas/EmbedUrlData',
          },
          {
            $ref: '#/components/schemas/ImageUrlData',
          },
          {
            $ref: '#/components/schemas/ShapeData',
          },
          {
            $ref: '#/components/schemas/StickyNoteData',
          },
          {
            $ref: '#/components/schemas/TextData',
          },
        ],
      },
      ItemId: {
        type: 'string',
        description: 'Unique identifier (ID) of an item.',
        format: 'int64',
        example: '3458764517517819000',
      },
      Items: {
        type: 'object',
        description: 'Contains items resulting from a bulk create or update operation.',
        properties: {
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Item',
            },
          },
          type: {
            type: 'string',
            description: 'Type of the object.',
            example: 'fixed-list',
          },
        },
        required: ['type', 'data'],
      },
      ItemsPage: {
        type: 'object',
        description: 'Contains cursor-based items page information.',
        properties: {
          size: {
            type: 'integer',
            format: 'int32',
            description:
              'Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
            example: 1,
          },
          limit: {
            type: 'integer',
            format: 'int32',
            description:
              'Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.',
            example: 10,
          },
          total: {
            type: 'integer',
            format: 'int64',
            description: 'Total number of results available for the given request.',
            example: 11,
          },
          data: {
            type: 'array',
            description: 'Contains the result data.',
            items: {
              $ref: '#/components/schemas/Item',
            },
          },
          links: {
            $ref: '#/components/schemas/PageLinks',
          },
          type: {
            type: 'string',
            description: 'Type of the object.',
            example: 'cursor-list',
          },
        },
        required: ['type', 'size', 'limit', 'total', 'data', 'links'],
      },
      ItemStyle: {
        type: 'object',
        description: 'Contains information about item-specific styles.',
        oneOf: [
          {
            $ref: '#/components/schemas/AppCardStyle',
          },
          {
            $ref: '#/components/schemas/CardStyle',
          },
          {
            $ref: '#/components/schemas/ShapeStyle',
          },
          {
            $ref: '#/components/schemas/StickyNoteStyle',
          },
          {
            $ref: '#/components/schemas/TextStyle',
          },
        ],
      },
      ItemTypeChange: {
        type: 'string',
        description: 'Type of item that you want to create.',
        enum: ['app_card', 'text', 'shape', 'sticky_note', 'image', 'document', 'card', 'frame', 'embed'],
        example: 'text',
      },
      ImageDataResponse: {
        type: 'object',
        properties: {
          imageUrl: {
            type: 'string',
            description:
              "The URL to download the resource. You must use your access token to access the URL. The URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters: `format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`. `redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file. If the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, 'image/svg', or 'image/jpg', depending on the original image type.",
            example:
              'https://api.miro.com/v2/boards/uXjVOfjkmAk=/resources/98765467890987654?format=preview&redirect=false',
          },
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
        },
      },
      ImageUrlDataPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
          url: {
            type: 'string',
            default: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
        required: ['url'],
      },
      ImageUrlDataChangesPlatformBulkCreateOperationExperimentalRelease: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Test image title',
          },
          url: {
            type: 'string',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
      },
      CreationTime: {
        type: 'string',
        format: 'date-time',
        description:
          'Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
        example: '2022-03-30T17:26:50.000Z',
      },
      ModificationTime: {
        type: 'string',
        format: 'date-time',
        description:
          'Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).',
        example: '2022-03-30T17:26:50.000Z',
      },
      CreatedBy: {
        type: 'object',
        description: 'Contains information about the user who created the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      ModifiedBy: {
        type: 'object',
        description: 'Contains information about the user who last modified the item.',
        properties: {
          id: {
            type: 'string',
            description: 'Unique identifier (ID) of the user.',
            example: '3458764517517852417',
          },
          type: {
            type: 'string',
            description: 'Indicates the type of object returned. In this case, `type` returns `user`.',
            example: 'user',
          },
        },
      },
      PageLinks: {
        type: 'object',
        description: 'Contains pagination links for the collection.',
        properties: {
          first: {
            type: 'string',
            description: 'Link to retrieve information in the first page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NaSDN&#RDMDA3MzYyOX==',
          },
          last: {
            type: 'string',
            description: 'Link to the retrieve information in the last page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDUyMDA3MzYyOX==',
          },
          next: {
            type: 'string',
            description: 'Link to retrieve information in the next page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1ODc2NDUyNDsdgsFEwfFJCw==',
          },
          prev: {
            type: 'string',
            description: 'Link to retrieve information in the previous page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=',
          },
          self: {
            type: 'string',
            description: 'Link to retrieve information in the current page of the collection.',
            example: 'https://api.miro.com/v2/boards/o9J_lJWSHdg=/items?limit=10&cursor=MzQ1OD1245643FWUyMDA3MzYyOX==',
          },
        },
      },
      Parent: {
        type: 'object',
        description:
          'Contains information about the parent this item must be attached to. A maximum of 1000 items can be attached to a frame. Passing `null` for `parent.id` directly attaches an item to the canvas.',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            example: '{{parent_id}}',
            description: 'Unique identifier (ID) of the parent for the item.',
          },
        },
      },
      ParentWithLinks: {
        type: 'object',
        description: 'Contains information about the parent this item attached to.',
        properties: {
          id: {
            type: 'string',
            format: 'int64',
            example: '{{parent_id}}',
            description: 'Unique identifier (ID) of a container item.',
          },
          links: {
            $ref: '#/components/schemas/SelfLink',
          },
        },
      },
      Position: {
        type: 'object',
        description:
          'Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.',
        properties: {
          origin: {
            type: 'string',
            default: 'center',
            description:
              'Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported.',
            enum: ['center'],
          },
          relativeTo: {
            type: 'string',
            enum: ['canvas_center', 'parent_top_left'],
            example: 'canvas_center',
          },
          x: {
            $ref: '#/components/schemas/XCoordinate',
          },
          y: {
            $ref: '#/components/schemas/YCoordinate',
          },
        },
      },
      PositionChange: {
        type: 'object',
        description:
          'Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.',
        properties: {
          x: {
            $ref: '#/components/schemas/XCoordinate',
          },
          y: {
            $ref: '#/components/schemas/YCoordinate',
          },
        },
      },
      SelfLink: {
        type: 'object',
        description: 'Contains applicable links for the current object.',
        properties: {
          self: {
            type: 'string',
            description: 'Link to obtain more information about the current object.',
            example: 'https://api.miro.com/v2/boards/o9J_koQspF4=/object_type/3074457349143649487',
          },
        },
      },
      XCoordinate: {
        type: 'number',
        format: 'double',
        description:
          'X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.',
        example: 100,
      },
      YCoordinate: {
        type: 'number',
        format: 'double',
        description:
          'Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has `x: 0` and `y: 0` coordinates.',
        example: 100,
      },
      Error: {
        type: 'object',
        description: 'Error information',
        properties: {
          code: {
            type: 'string',
            description: 'Code of the error',
            example: 2.074,
          },
          message: {
            type: 'string',
            description: 'Description of the error',
            example: 'Error message',
          },
          context: {
            type: 'object',
            example: '<value>',
          },
          status: {
            type: 'integer',
            format: 'int32',
            description: 'Status code of the error',
            example: 400,
          },
          type: {
            type: 'string',
            description: 'Type of entity that is returned.',
            example: 'error',
          },
        },
        required: ['message', 'type'],
      },
      BulkOperationError: {
        type: 'object',
        description: 'Error information with details about operation failure',
        properties: {
          type: {
            type: 'string',
            description: 'Type of the error',
            example: 'error',
          },
          code: {
            type: 'string',
            description: 'Code of the error',
            example: 2.074,
          },
          message: {
            type: 'string',
            description: 'Description of the error',
            example: 'Error message',
          },
          context: {
            type: 'object',
            properties: {
              fields: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BulkSubOperationError',
                },
              },
            },
            example: '<value>',
          },
          status: {
            type: 'integer',
            format: 'int32',
            description: 'Status code of the error',
            example: 400,
          },
        },
        required: ['message'],
      },
      BulkSubOperationError: {
        type: 'object',
        properties: {
          field: {
            type: 'string',
            description:
              '0-based index indicating a sub-operations from the input that caused a failure followed by parameter name',
            example: '<value>',
          },
          message: {
            type: 'string',
            description: 'Description of the sub-operation related error',
            example: 'Invalid parameters',
          },
          context: {
            type: 'object',
            example: '<value>',
          },
        },
        required: ['field', 'message'],
      },
      AppCardStyle: {
        type: 'object',
        description: 'Contains information about the style of an app card item, such as the fill color.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Hex value of the border color of the app card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      CardStyle: {
        type: 'object',
        description: 'Contains information about the style of a card item, such as the card theme.',
        properties: {
          cardTheme: {
            type: 'string',
            description: 'Hex value of the border color of the card.\nDefault: `#2d9bf0`.',
            example: '#2d9bf0',
          },
        },
      },
      DocumentUrlData: {
        type: 'object',
        description: 'Contains information about the document URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the document.',
            example: 'Sample document title',
          },
          url: {
            type: 'string',
            default: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            description: 'URL where the document is hosted.',
            example: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
        },
        required: ['url'],
      },
      EmbedUrlData: {
        type: 'object',
        description: 'Contains information about the embed URL.',
        properties: {
          mode: {
            type: 'string',
            description:
              'Defines how the content in the embed item is displayed on the board.\n`inline`: The embedded content is displayed directly on the board.\n`modal`: The embedded content is displayed inside a modal overlay on the board.',
            enum: ['inline', 'modal'],
            example: 'inline',
          },
          previewUrl: {
            type: 'string',
            description: 'URL of the image to be used as the preview image for the embedded item.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
          url: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=HlVSNEiFCBk',
            description:
              'A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.',
          },
        },
        required: ['url'],
      },
      ShapeData: {
        type: 'object',
        description: 'Contains shape item data, such as the content or shape type of the shape.',
        properties: {
          content: {
            type: 'string',
            description: 'The text you want to display on the shape.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'rectangle',
            description: 'Defines the geometric shape of the item when it is rendered on the board.',
            enum: [
              'rectangle',
              'round_rectangle',
              'circle',
              'triangle',
              'rhombus',
              'parallelogram',
              'trapezoid',
              'pentagon',
              'hexagon',
              'octagon',
              'wedge_round_rectangle_callout',
              'star',
              'flow_chart_predefined_process',
              'cloud',
              'cross',
              'can',
              'right_arrow',
              'left_arrow',
              'left_right_arrow',
              'left_brace',
              'right_brace',
            ],
          },
        },
      },
      StickyNoteData: {
        type: 'object',
        description: 'Contains sticky note item data, such as the content or shape of the sticky note.',
        properties: {
          content: {
            type: 'string',
            description: 'The actual text (content) that appears in the sticky note item.',
            example: 'Hello',
          },
          shape: {
            type: 'string',
            default: 'square',
            description: 'Defines the geometric shape of the sticky note and aspect ratio for its dimensions.',
            enum: ['square', 'rectangle'],
          },
        },
      },
      StickyNoteStyle: {
        type: 'object',
        description:
          'Contains information about the style of a sticky note item, such as the fill color or text alignment.',
        properties: {
          fillColor: {
            type: 'string',
            description: 'Fill color for the sticky note.\nDefault: `light_yellow`.',
            enum: [
              'gray',
              'light_yellow',
              'yellow',
              'orange',
              'light_green',
              'green',
              'dark_green',
              'cyan',
              'light_pink',
              'pink',
              'violet',
              'red',
              'light_blue',
              'blue',
              'dark_blue',
              'black',
            ],
            example: 'gray',
          },
          textAlign: {
            type: 'string',
            description: 'Defines how the sticky note text is horizontally aligned.\nDefault: `center`.',
            enum: ['left', 'right', 'center'],
            example: 'left',
          },
          textAlignVertical: {
            type: 'string',
            description: 'Defines how the sticky note text is vertically aligned.\nDefault: `top`.',
            enum: ['top', 'middle', 'bottom'],
            example: 'top',
          },
        },
      },
      CustomField: {
        type: 'object',
        description:
          'Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.',
        properties: {
          fillColor: {
            type: 'string',
            description:
              "Hex value representing the color that fills the background area of the preview field, when it's displayed on the app card.",
            example: '#2fa9e3',
          },
          iconShape: {
            type: 'string',
            default: 'round',
            description: 'The shape of the icon on the preview field.',
            enum: ['round', 'square'],
          },
          iconUrl: {
            type: 'string',
            description:
              'A valid URL pointing to an image available online.\nThe transport protocol must be HTTPS.\nPossible image file formats: JPG/JPEG, PNG, SVG.',
            example: 'https://cdn-icons-png.flaticon.com/512/5695/5695864.png',
          },
          textColor: {
            type: 'string',
            description: 'Hex value representing the color of the text string assigned to `value`.',
            example: '#1a1a1a',
          },
          tooltip: {
            type: 'string',
            description: 'A short text displayed in a tooltip when clicking or hovering over the preview field.',
            example: 'Completion status indicator',
          },
          value: {
            type: 'string',
            description:
              'The actual data value of the custom field.\nIt can be any type of information that you want to convey.',
            example: 'Status: in progress',
          },
        },
      },
      Geometry: {
        type: 'object',
        description: 'Contains geometrical information about the item, such as its width or height.',
        properties: {
          height: {
            type: 'number',
            format: 'double',
            description: 'Height of the item, in pixels.',
            example: 60,
          },
          rotation: {
            type: 'number',
            format: 'double',
            description:
              'Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.',
            example: 0,
          },
          width: {
            type: 'number',
            format: 'double',
            description: 'Width of the item, in pixels.',
            example: 320,
          },
        },
      },
      ImageUrlData: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Sample image title',
          },
          url: {
            type: 'string',
            default: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
        required: ['url'],
      },
      ImageUrlDataChanges: {
        type: 'object',
        description: 'Contains information about the image URL.',
        properties: {
          title: {
            type: 'string',
            description: 'A short text header to identify the image.',
            example: 'Test image title',
          },
          url: {
            type: 'string',
            description: 'URL of the image.',
            example: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
          },
        },
      },
      Picture: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the picture',
            example: 3074457345618261500,
          },
          imageURL: {
            type: 'string',
            description: 'Url of the picture',
            example: 'https://miro.images/5252525252/125252/266/144/1/size210.jpg',
          },
          originalUrl: {
            type: 'string',
            description: 'Original team picture url for icon generation',
            example: 'https://miro.com/original-image.jpg',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'picture',
          },
        },
      },
      Team: {
        required: ['id', 'name'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Team id',
            example: 3074457345618265000,
          },
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
          picture: {
            $ref: '#/components/schemas/Picture',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team',
          },
        },
      },
      CreateTeamRequest: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
        },
      },
      TeamAccountDiscoverySettings: {
        type: 'object',
        properties: {
          accountDiscovery: {
            type: 'string',
            description:
              '\n* "hidden":  Only invited users can see and access the team.\n* "request": Members of organization can find and request to join with admin approval.\n* "join":    Members of organization can find and join.\n',
            enum: ['hidden', 'request', 'join'],
            example: 'hidden',
          },
        },
        description: 'Team account discovery settings',
      },
      TeamAccountDiscoverySettingsChanges: {
        type: 'object',
        properties: {
          accountDiscovery: {
            type: 'string',
            description:
              '\n* "hidden":  Only invited users can see and access the team.\n* "request": Members of organization can find and request to join with admin approval.\n* "join":    Members of organization can find and join.\n',
            enum: ['hidden', 'request', 'join'],
            example: 'hidden',
          },
        },
        description: 'Team account discovery settings',
      },
      TeamChanges: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Team name',
            example: 'My Team',
          },
        },
      },
      TeamCollaborationSettings: {
        type: 'object',
        properties: {
          coOwnerRole: {
            type: 'string',
            description:
              '\n* "enabled": Enable Co-owner role on boards and projects\n* "disabled": Disabled Co-owner role on boards and projects\n',
            enum: ['enabled', 'disabled'],
            example: 'enabled',
          },
        },
        description: 'Team collaboration settings',
      },
      TeamCollaborationSettingsChanges: {
        type: 'object',
        properties: {
          coOwnerRole: {
            type: 'string',
            description:
              '\n* "enabled": Enable Co-owner role on boards and projects\n* "disabled": Disabled Co-owner role on boards and projects\n',
            enum: ['enabled', 'disabled'],
            example: 'enabled',
          },
        },
        description: 'Team collaboration settings',
      },
      TeamCopyAccessLevelSettings: {
        type: 'object',
        properties: {
          copyAccessLevel: {
            type: 'string',
            description:
              '\n* "anyone":       Anyone with the board access can copy board content on newly created boards.\n* "team_members": Team members can copy board content on newly created boards.\n* "team_editors": Team members with editing rights can copy board content on newly created boards.\n* "board_owner":  Board owners only can copy board content on newly created boards.\n',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner            -'],
            example: 'anyone',
          },
          copyAccessLevelLimitation: {
            type: 'string',
            description:
              '\n* "anyone":       Team members and users outside team can be given permission to copy board content.\n* "team_members": Only team members can be given permission to copy board content.\n',
            enum: ['anyone', 'team_members'],
            example: 'anyone',
          },
        },
        description: 'Team copy access settings',
      },
      TeamCopyAccessLevelSettingsChanges: {
        type: 'object',
        properties: {
          copyAccessLevel: {
            type: 'string',
            description:
              '\n* "anyone":       Anyone with the board access can copy board content on newly created boards.\n* "team_members": Team members can copy board content on newly created boards.\n* "team_editors": Team members with editing rights can copy board content on newly created boards.\n* "board_owner":  Board owners only can copy board content on newly created boards.\n',
            enum: ['anyone', 'team_members', 'team_editors', 'board_owner'],
            example: 'anyone',
          },
          copyAccessLevelLimitation: {
            type: 'string',
            description:
              '\n* "anyone":       Team members and users outside team can be given permission to copy board content.\n* "team_members": Only team members can be given permission to copy board content.\n',
            enum: ['anyone', 'team_members'],
            example: 'anyone',
          },
        },
        description: 'Team copy access settings',
      },
      TeamInvitationSettings: {
        type: 'object',
        properties: {
          inviteExternalUsers: {
            type: 'string',
            description:
              '\n* "allowed": Allow non-team collaborators for team\n* "not_allowed": Not Allow non-team collaborators for team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          whoCanInvite: {
            type: 'string',
            description:
              '\n* "only_org_admins": Company admins only can invite\n* "admins":          Company admins and team admins can invite\n* "all_members":     All team members can invite\n',
            enum: ['only_org_admins', 'admins', 'all_members'],
            example: 'only_org_admins',
          },
        },
        description: 'Team invitation settings',
      },
      TeamInvitationSettingsChanges: {
        type: 'object',
        properties: {
          inviteExternalUsers: {
            type: 'string',
            description:
              '\n* "allowed": Allow non-team collaborators for team\n* "not_allowed": Not Allow non-team collaborators for team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          whoCanInvite: {
            type: 'string',
            description:
              '\n* "only_org_admins": Company admins only can invite\n* "admins":          Company admins and team admins can invite\n* "all_members":     All team members can invite\n',
            enum: ['only_org_admins', 'admins', 'all_members'],
            example: 'only_org_admins',
          },
        },
        description: 'Team invitation settings',
      },
      TeamMember: {
        required: ['id', 'teamId', 'role'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Team member id.',
            example: 3074457345618264000,
          },
          role: {
            type: 'string',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "non_team":   External user, non-team user.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['non_team', 'member', 'admin', 'team_guest'],
            example: 'non_team',
          },
          createdAt: {
            type: 'string',
            description: 'Date and time when member was invited to the team.',
            format: 'date-time',
            example: '<value>',
          },
          createdBy: {
            type: 'string',
            description: 'Id of the user who invited the team member.',
            example: 3074457345618264000,
          },
          modifiedAt: {
            type: 'string',
            description: "Date and time when the user's membership was last updated.",
            format: 'date-time',
            example: '<value>',
          },
          modifiedBy: {
            type: 'string',
            description: "Id of the user who last updated the user's membership.",
            example: 3074457345618264000,
          },
          teamId: {
            type: 'string',
            description: 'Team id',
            example: 3074457345618265000,
          },
          type: {
            description: 'Type of the object returned.',
            type: 'string',
            default: 'team-member',
          },
        },
      },
      TeamMemberChanges: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            example: 'member',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['member', 'admin', 'team_guest'],
          },
        },
      },
      TeamMemberInvite: {
        type: 'object',
        required: ['email'],
        properties: {
          email: {
            type: 'string',
            description: 'User email to add to a team',
            example: 'user@miro.com',
          },
          role: {
            type: 'string',
            example: 'member',
            description:
              '\nRole of the team member.\n* "member":     Team member with full member permissions.\n* "admin":      Admin of a team. Team member with permission to manage team.\n* "team_guest": Team-guest user, user with access only to a team without access to organization.\n',
            enum: ['member', 'admin', 'team_guest'],
          },
        },
      },
      TeamSettings: {
        type: 'object',
        properties: {
          organizationId: {
            type: 'string',
            description: 'Organization id',
            example: 3074457345618265000,
          },
          teamAccountDiscoverySettings: {
            $ref: '#/components/schemas/TeamAccountDiscoverySettings',
          },
          teamCollaborationSettings: {
            $ref: '#/components/schemas/TeamCollaborationSettings',
          },
          teamCopyAccessLevelSettings: {
            $ref: '#/components/schemas/TeamCopyAccessLevelSettings',
          },
          teamId: {
            type: 'string',
            description: 'Team id',
            example: '3074457345618265000',
          },
          teamInvitationSettings: {
            $ref: '#/components/schemas/TeamInvitationSettings',
          },
          teamSharingPolicySettings: {
            $ref: '#/components/schemas/TeamSharingPolicySettings',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team-settings',
          },
        },
      },
      TeamSettingsChanges: {
        type: 'object',
        properties: {
          teamAccountDiscoverySettings: {
            $ref: '#/components/schemas/TeamAccountDiscoverySettingsChanges',
          },
          teamCollaborationSettings: {
            $ref: '#/components/schemas/TeamCollaborationSettingsChanges',
          },
          teamCopyAccessLevelSettings: {
            $ref: '#/components/schemas/TeamCopyAccessLevelSettingsChanges',
          },
          teamInvitationSettings: {
            $ref: '#/components/schemas/TeamInvitationSettingsChanges',
          },
          teamSharingPolicySettings: {
            $ref: '#/components/schemas/TeamSharingPolicySettingsChanges',
          },
        },
      },
      TeamSharingPolicySettings: {
        type: 'object',
        properties: {
          allowListedDomains: {
            type: 'array',
            description: 'Allow listed domains',
            items: {
              type: 'string',
              description: 'Allow listed domains',
            },
          },
          createAssetAccessLevel: {
            type: 'string',
            description:
              '\n* "company_admins": Only company admins can create assets in a team\n* "admins": Both team and company admins can create assets in a team.\n* "all_members": all_members\n',
            enum: ['company_admins', 'admins', 'all_members'],
            example: 'company_admins',
          },
          defaultBoardAccess: {
            type: 'string',
            description:
              '\nDefault board access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
            example: 'private',
          },
          defaultOrganizationAccess: {
            type: 'string',
            description:
              '\nDefault organization access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
            example: 'private',
          },
          defaultProjectAccess: {
            type: 'string',
            description:
              '\nDefault project access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n',
            enum: ['private', 'view'],
            example: 'private',
          },
          moveBoardToAccount: {
            type: 'string',
            description: '\n* "allowed": Allow move board to team\n* "not_allowed": Not allow move board to team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          restrictAllowedDomains: {
            type: 'string',
            description:
              '\n* "enabled": Enabled. Restrict to listed domain.\n* "disabled": Disabled. No domain restriction.\n* "enabled_with_external_users_access": Enabled. Restrict to listed domain but allows external users to access.\n',
            enum: ['enabled', 'enabled_with_external_user_access', 'disabled'],
            example: 'enabled',
          },
          sharingOnAccount: {
            type: 'string',
            description: '\n* "allowed": Allow sharing on team\n* "not_allowed": Not allow sharing on team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          sharingOnOrganization: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing on organization\n* "allowed_with_editing": Allow sharing with editing on organization\n* "not_allowed": Not allow sharing on organization\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
            example: 'allowed',
          },
          sharingViaPublicLink: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing via public link\n* "allowed_with_editing": Allow sharing with editing via public link\n* "not_allowed": Not allow sharing via public link\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
            example: 'allowed',
          },
        },
        description: 'Team sharing policy settings',
      },
      TeamSharingPolicySettingsChanges: {
        type: 'object',
        properties: {
          allowListedDomains: {
            type: 'array',
            description: 'Allow listed domains',
            items: {
              type: 'string',
              description: 'Allow listed domains',
            },
          },
          createAssetAccessLevel: {
            type: 'string',
            description:
              '\n* "company_admins": Only company admins can create assets in a team\n* "admins": Both team and company admins can create assets in a team.\n* "all_members": all_members\n',
            enum: ['company_admins', 'admins', 'all_members'],
            example: 'company_admins',
          },
          defaultBoardAccess: {
            type: 'string',
            description:
              '\nDefault board access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
            example: 'private',
          },
          defaultOrganizationAccess: {
            type: 'string',
            description:
              '\nDefault organization access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n* "comment": Anyone in the team can comment\n* "edit":    Anyone in the team can edit\n',
            enum: ['private', 'view', 'comment', 'edit'],
            example: 'private',
          },
          defaultProjectAccess: {
            type: 'string',
            description:
              '\nDefault project access\n* "private": Only board owners can access\n* "view":    Anyone in the team can view\n',
            enum: ['private', 'view'],
            example: 'private',
          },
          moveBoardToAccount: {
            type: 'string',
            description: '\n* "allowed": Allow move board to team\n* "not_allowed": Not allow move board to team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          restrictAllowedDomains: {
            type: 'string',
            description:
              '\n* "enabled": Enabled. Restrict to listed domain.\n* "disabled": Disabled. No domain restriction.\n* "enabled_with_external_users_access": Enabled. Restrict to listed domain but allows external users to access.\n',
            enum: ['enabled', 'enabled_with_external_user_access', 'disabled'],
            example: 'enabled',
          },
          sharingOnAccount: {
            type: 'string',
            description: '\n* "allowed": Allow sharing on team\n* "not_allowed": Not allow sharing on team\n',
            enum: ['allowed', 'not_allowed'],
            example: 'allowed',
          },
          sharingOnOrganization: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing on organization\n* "allowed_with_editing": Allow sharing with editing on organization\n* "not_allowed": Not allow sharing on organization\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
            example: 'allowed',
          },
          sharingViaPublicLink: {
            type: 'string',
            description:
              '\n* "allowed": Allow sharing via public link\n* "allowed_with_editing": Allow sharing with editing via public link\n* "not_allowed": Not allow sharing via public link\n',
            enum: ['allowed', 'allowed_with_editing', 'not_allowed'],
            example: 'allowed',
          },
        },
        description: 'Team sharing policy settings',
      },
      PageLimit: {
        type: 'integer',
        format: 'int32',
        minimum: 1,
        maximum: 100,
        default: 100,
        example: 100,
        description:
          'The maximum number of results to return per call. If the number of project in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
      },
      PageSize: {
        type: 'integer',
        format: 'int32',
        minimum: 0,
        maximum: 100,
        default: 100,
        example: 87,
        description:
          'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
      },
      PageCursor: {
        type: 'string',
        description:
          'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
        example: '3074457345821140946',
      },
      PageType: {
        type: 'string',
        description: 'Type of the object returned.',
        default: 'cursor-list',
      },
      TeamsPage: {
        type: 'object',
        description: 'Page of teams that match the search query.',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            $ref: '#/components/schemas/PageLimit',
          },
          size: {
            $ref: '#/components/schemas/PageSize',
          },
          data: {
            type: 'array',
            description: 'List of teams',
            items: {
              $ref: '#/components/schemas/Team',
            },
          },
          cursor: {
            $ref: '#/components/schemas/PageCursor',
          },
          type: {
            $ref: '#/components/schemas/PageType',
          },
        },
      },
      TeamMembersPage: {
        type: 'object',
        description: 'Page of team members that match the search query.',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            $ref: '#/components/schemas/PageLimit',
          },
          size: {
            $ref: '#/components/schemas/PageSize',
          },
          data: {
            type: 'array',
            description: 'List of team members',
            items: {
              $ref: '#/components/schemas/TeamMember',
            },
          },
          cursor: {
            $ref: '#/components/schemas/PageCursor',
          },
          type: {
            $ref: '#/components/schemas/PageType',
          },
        },
      },
      BasicErrorOrganizationsEnterprisePlan: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            example: '<value>',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: '<value>',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
            example: '<value>',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'error',
          },
        },
      },
      Organization: {
        required: ['fullLicensesPurchased', 'id', 'name', 'plan'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the organization',
            example: '3074457345821140946',
          },
          fullLicensesPurchased: {
            type: 'integer',
            description: 'Purchased FULL licenses',
            format: 'int32',
            example: '<value>',
          },
          name: {
            type: 'string',
            description: 'Name of the organization',
            example: 'Miro company',
          },
          plan: {
            type: 'string',
            description: 'Organization plan type',
            example: 'company',
            enum: [
              'company',
              'consultant',
              'consultant_slf',
              'business',
              'paid_team_org',
              'integration_org',
              'professional_2022',
              'edu_team_org',
              'free_team_org',
              'dev_team_org',
              'unknown',
            ],
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'organization',
          },
        },
      },
      OrganizationMember: {
        description: 'Organization member',
        required: ['active', 'email', 'id', 'license', 'role'],
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of the user',
            example: '3074457345821140934',
          },
          active: {
            type: 'boolean',
            description: 'Flag is user active',
            example: true,
          },
          email: {
            type: 'string',
            description: 'User email',
            example: 'user@miro.com',
          },
          lastActivityAt: {
            type: 'string',
            description: 'Last time when the user was active',
            format: 'date-time',
            example: '<value>',
          },
          license: {
            type: 'string',
            description: 'Name of the current user license in the organization',
            example: 'full',
            enum: ['full', 'occasional', 'free', 'free_restricted', 'full_trial', 'unknown'],
          },
          licenseAssignedAt: {
            type: 'string',
            description: 'Time when the license was assigned to the user',
            format: 'date-time',
            example: '<value>',
          },
          role: {
            type: 'string',
            description: 'Name of the user role in the organization',
            example: 'organization_internal_user',
            enum: [
              'organization_internal_admin',
              'organization_internal_user',
              'organization_external_user',
              'organization_team_guest_user',
              'unknown',
            ],
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'organization-member',
          },
        },
      },
      OrganizationMembersSearchByEmailsResponse: {
        description: 'Response for search organization members by user emails',
        type: 'array',
        items: {
          $ref: '#/components/schemas/OrganizationMember',
        },
      },
      OrganizationMembersSearchResponse: {
        type: 'object',
        description: 'Response for query by cursor and filter parameters',
        properties: {
          limit: {
            type: 'integer',
            description:
              'Maximum number of results returned based on the limit specified in the request. For example, if there are 20 results, the request has no cursor value, and the limit is set to 20, the size of the results will be 20. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the cursor parameter value.',
            format: 'int32',
            example: 20,
          },
          size: {
            type: 'integer',
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10.',
            format: 'int32',
            example: 1,
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrganizationMember',
            },
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      BoardDataClassificationLabel: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            description: 'Label color',
            example: 'blue',
          },
          description: {
            type: 'string',
            description: 'Label description',
            example: 'Board could not be shared publicly',
          },
          id: {
            type: 'string',
            description: 'Label id',
            example: '3000457366756290996',
          },
          name: {
            type: 'string',
            description: 'Label name',
            example: 'internal',
          },
          sharingRecommendation: {
            type: 'string',
            description:
              'Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ) ',
            example: 'NO_SHARING_RESTRICTIONS',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'board-data-classification-label',
          },
        },
      },
      DataClassificationLabel: {
        description: 'Data classification label',
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Label id',
            example: '3000457366756290996',
          },
          color: {
            type: 'string',
            description: 'Label color',
            example: '#F5DC80',
          },
          default: {
            type: 'boolean',
            description: 'Label is default',
            example: '<value>',
          },
          description: {
            type: 'string',
            description: 'Label description',
            example: 'Board could not be shared publicly',
          },
          name: {
            type: 'string',
            description: 'Label name',
            example: 'internal',
          },
          orderNumber: {
            type: 'integer',
            description: 'Label order number',
            format: 'int32',
            example: 2,
          },
          sharingRecommendation: {
            type: 'string',
            description:
              'Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ) ',
            example: 'NO_SHARING_RESTRICTIONS',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'data-classification-label',
          },
        },
      },
      DataClassificationLabelId: {
        type: 'object',
        properties: {
          labelId: {
            type: 'string',
            description: 'Data classification label id',
            example: '3000457366756290996',
          },
        },
      },
      DataClassificationOrganizationSettings: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for organization',
            example: true,
          },
          labels: {
            type: 'array',
            description: 'Data classification labels',
            items: {
              $ref: '#/components/schemas/DataClassificationLabel',
            },
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'data-classification-organization-settings',
          },
        },
      },
      DataClassificationTeamSettings: {
        type: 'object',
        properties: {
          defaultLabelId: {
            type: 'string',
            description: 'Data classification default label id',
            example: '3000457366756290996',
          },
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for team',
            example: true,
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'team-data-classification-settings',
          },
        },
      },
      UpdateBoardsDataClassificationLabel: {
        type: 'object',
        properties: {
          numberUpdatedBoards: {
            type: 'integer',
            description: 'Number of boards updated in the team',
            format: 'int64',
            example: 10,
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'boards-data-classification-label-changed',
          },
        },
      },
      UpdateBoardsDataClassificationLabelRequest: {
        type: 'object',
        properties: {
          labelId: {
            type: 'integer',
            description: 'Data classification label id for team',
            format: 'int64',
            example: 3000457366756291000,
          },
          notClassifiedOnly: {
            type: 'boolean',
            description: 'Assign data classification label to not-classified only or to all boards of team',
            example: true,
          },
        },
      },
      UpdateTeamSettingsRequest: {
        type: 'object',
        properties: {
          defaultLabelId: {
            type: 'integer',
            description: 'Data classification default label id',
            format: 'int64',
            example: 3000457366756291000,
          },
          enabled: {
            type: 'boolean',
            description: 'Data classification enabled for team',
            example: true,
          },
        },
      },
      BasicErrorBoardExportJobEnterprisePlan: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            example: '<value>',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: '<value>',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      BoardExportJobId: {
        required: ['jobId'],
        type: 'object',
        properties: {
          jobId: {
            type: 'string',
            description: 'Unique identifier of the board export job.',
            format: 'uuid',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
          },
        },
      },
      BoardExportJobStatus: {
        required: ['jobStatus'],
        type: 'object',
        properties: {
          jobStatus: {
            type: 'string',
            description:
              'Indicates the current state of the board export job.\nPossible values:\n `CREATED`: the job has been created but not yet started. Retry the status call after some time.\n`IN_PROGRESS`: the job is in progress, and the results are not ready yet. Retry the status call after some time.\n`FINISHED`: the job is complete. You can now get results for the board export job.',
            example: 'CREATED',
          },
        },
      },
      BoardExportResult: {
        type: 'object',
        properties: {
          jobId: {
            type: 'string',
            description: 'Unique identifier of the board export job.',
            format: 'uuid',
            example: '92343229-c532-446d-b8cb-2f155bedb807',
          },
          results: {
            type: 'array',
            description: 'Board export task results.',
            items: {
              $ref: '#/components/schemas/BoardExportTaskResult',
            },
          },
        },
      },
      BoardExportTaskResult: {
        required: ['boardId', 'status'],
        type: 'object',
        properties: {
          boardId: {
            type: 'string',
            description: 'Unique identifier of the board.',
            example: 'o9J_kzlUDmo=',
          },
          errorMessage: {
            type: 'string',
            description: 'Contains the description of the error that occurred during a board export task.',
            example: '<value>',
          },
          exportLink: {
            type: 'string',
            description: 'URL of the S3 bucket that contains the exported files.',
            example: '<value>',
          },
          status: {
            type: 'string',
            description:
              'Indicates the status of the individual board export task.\nPossible values:\n`SUCCESS`: the board export task was completed successfully and the results are available.\n`ERROR`: the board export task encountered an error and failed to complete. The `errorMessage` field provides more information on the error.',
            example: 'CREATED',
          },
        },
        description: 'Board export task results.',
      },
      CreateBoardExportRequest: {
        type: 'object',
        properties: {
          boardIds: {
            maxItems: 50,
            minItems: 1,
            type: 'array',
            description: 'List of board IDs to be exported.',
            example: 'o9J_kzlUDmo=',
            items: {
              type: 'string',
              description: 'List of board IDs to be exported.',
              example: 'o9J_kzlUDmo=',
            },
          },
        },
        description: 'List of board IDs to be exported.',
      },
      BasicError: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            example: '<value>',
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: '<value>',
          },
          message: {
            type: 'string',
            description: 'Explanation for the error',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      ProjectPage: {
        type: 'object',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: 1,
            maximum: 100,
            default: 100,
            example: 100,
            description:
              'The maximum number of results to return per call. If the number of project in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
          },
          size: {
            type: 'integer',
            format: 'int32',
            minimum: 0,
            maximum: 100,
            default: 100,
            example: 87,
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Project',
            },
            description: 'Contains the result data.',
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      Project: {
        type: 'object',
        required: ['id', 'name', 'type'],
        properties: {
          id: {
            type: 'string',
            description: 'Project ID.',
            example: '3074457345618265000',
          },
          name: {
            type: 'string',
            description: 'Name of the project.',
            example: 'Product Guild project',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'project',
          },
        },
      },
      CreateProjectRequest: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            description: 'Project name',
            example: 'Product Guild project',
          },
        },
      },
      UpdateProjectRequest: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
            description: 'Project name',
            example: 'Product Guild project',
          },
        },
      },
      UpdateProjectSettingsRequest: {
        type: 'object',
        properties: {
          sharingPolicySettings: {
            $ref: '#/components/schemas/SharingPolicySettings',
          },
        },
      },
      ProjectSettings: {
        type: 'object',
        required: ['sharingPolicySettings', 'type'],
        properties: {
          sharingPolicySettings: {
            $ref: '#/components/schemas/SharingPolicySettings',
          },
          type: {
            type: 'string',
            description: 'Type of the object',
            default: 'project_settings',
          },
        },
      },
      ProjectMemberPage: {
        type: 'object',
        required: ['limit', 'size', 'data'],
        properties: {
          limit: {
            type: 'integer',
            format: 'int32',
            minimum: 1,
            maximum: 100,
            default: 100,
            example: 100,
            description:
              'The maximum number of results to return per call. If the number of project member in the response is greater than the limit specified, the response returns the cursor parameter with a value.',
          },
          size: {
            type: 'integer',
            format: 'int32',
            minimum: 0,
            maximum: 100,
            default: 100,
            example: 87,
            description:
              'Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.',
          },
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ProjectMember',
            },
            description: 'Contains the result data.',
          },
          cursor: {
            type: 'string',
            description:
              'Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.',
            example: '3074457345821140946',
          },
          type: {
            type: 'string',
            description: 'Type of the object returned.',
            default: 'cursor-list',
          },
        },
      },
      ProjectMember: {
        type: 'object',
        required: ['id', 'email', 'role', 'type'],
        properties: {
          id: {
            type: 'string',
            description: 'ID of the project member.',
            example: '3074457345618265000',
          },
          email: {
            type: 'string',
            description: 'Email ID of the project member.',
            example: 'someone@domain.com',
          },
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
          type: {
            type: 'string',
            description: 'Type of the object',
            default: 'project_member',
          },
        },
      },
      AddProjectMemberRequest: {
        type: 'object',
        required: ['email', 'role'],
        properties: {
          email: {
            type: 'string',
            description: 'Email ID of the user.',
            example: 'someone@domain.com',
          },
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
        },
      },
      UpdateProjectMemberRequest: {
        type: 'object',
        properties: {
          role: {
            $ref: '#/components/schemas/ProjectRole',
          },
        },
      },
      SharingPolicySettings: {
        type: 'object',
        properties: {
          teamAccess: {
            $ref: '#/components/schemas/TeamAccess',
          },
        },
      },
      TeamAccess: {
        type: 'string',
        description:
          'Team access\n* "private": Only the members of the project can access the information within the project.\n* "view":    Anyone in the team can view the information in within the project.\n',
        enum: ['private', 'view'],
        default: 'private',
        example: 'private',
      },
      ProjectRole: {
        type: 'string',
        description: 'Role of the project member.',
        enum: ['owner', 'editor', 'viewer', 'commentator', 'coowner'],
        example: 'viewer',
      },
      ProjectRoleToAdd: {
        type: 'string',
        description: 'Role of the project member.',
        enum: ['editor', 'viewer', 'commentator', 'coowner'],
        example: 'viewer',
      },
      Error400: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 400,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            default: 'invalidParameters',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error401: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 401,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            default: 'tokenNotProvided',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error403: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 403,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'forbiddenAccess',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error404: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 404,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'notFound',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error409: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 409,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'conflict',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
      Error429: {
        type: 'object',
        properties: {
          status: {
            type: 'number',
            description: 'HTTP status code.',
            default: 429,
          },
          code: {
            type: 'string',
            description: 'Description of the status code.',
            example: 'tooManyRequests',
          },
          message: {
            type: 'string',
            description: 'Explanation of the error.',
            example: '<value>',
          },
          type: {
            type: 'string',
            default: 'error',
          },
        },
      },
    },
    parameters: {
      boardId: {
        description: 'Unique identifier (ID) of the board where you want to create the item.',
        required: true,
        in: 'path',
        name: 'board_id',
        schema: {
          type: 'string',
        },
      },
      pathOrgId: {
        name: 'org_id',
        description: 'The id of the Organization.',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
      pathTeamId: {
        name: 'team_id',
        description: 'The id of the Team.',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
      pathTeamMemberId: {
        name: 'member_id',
        description: 'The id of the Team Member',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
        example: '3074457345618265000',
      },
    },
    securitySchemes: {
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

// TODO: get live collection from postman instead of hard coding this
export const liveCollection = {
  info: {
    _postman_id: '1a7d3514-f19f-4a86-9001-d694f160da3d',
    name: 'Miro Developer Platform',
    description:
      '<img src="https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n" width="1685" height="593">\n\n### Miro Developer Platform concepts\n\n- New to the Miro Developer Platform? Interested in learning more about platform concepts?  \n    [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.\n    \n\n### Getting started with the Miro REST API\n\n- [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes.\n- [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.\n    \n\n### Miro REST API tutorials\n\nCheck out our how-to articles with step-by-step instructions and code examples so you can:\n\n- [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)\n    \n\n### Miro App Examples\n\nClone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    _exporter_id: '29517133',
    _collection_link:
      'https://www.postman.com/miro-developer-platform/workspace/miro-developer-platform/collection/20467754-1a7d3514-f19f-4a86-9001-d694f160da3d?action=share&source=collection_link&creator=29517133',
  },
  item: [
    {
      name: 'Boards',
      item: [
        {
          name: 'Create board',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "description": "Description",\n  "name": "Untitled",\n  "policy": {\n    "permissionsPolicy": {\n      "collaborationToolsStartAccess": "all_editors",\n      "copyAccess": "anyone",\n      "sharingAccess": "team_members_with_editing_rights"\n    },\n    "sharingPolicy": {\n      "access": "private",\n      "inviteToAccountAndBoardLinkAccess": "no_access",\n      "organizationAccess": "private",\n      "teamAccess": "private"\n    }\n  },\n  "teamId": "{{team_id}}",\n  "projectId": "<value>"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards'],
            },
            description:
              'Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get boards',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards?team_id={{team_id}}&project_id=&query=&owner=&limit=&offset=&sort=default',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards'],
              query: [
                {
                  key: 'team_id',
                  value: '{{team_id}}',
                },
                {
                  key: 'project_id',
                  value: '',
                },
                {
                  key: 'query',
                  value: '',
                },
                {
                  key: 'owner',
                  value: '',
                },
                {
                  key: 'limit',
                  value: '',
                },
                {
                  key: 'offset',
                  value: '',
                },
                {
                  key: 'sort',
                  value: 'default',
                },
              ],
            },
            description:
              "Retrieves a list of boards that match the search criteria provided in the request. If you are an Enterprise customer and a Company Admin, you can retrieve all boards, including all private boards (boards that haven't been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins). Note that you only get results instantaneously when you filter by the `team_id`, `project_id`, or both the `team_id` and `project_id`. If you use any other filter,  you need to give a few seconds for the indexing of newly created boards before retrieving boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>",
          },
          response: [],
        },
        {
          name: 'Copy board',
          request: {
            method: 'PUT',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "description": "Description",\n  "name": "Untitled",\n  "policy": {\n    "permissionsPolicy": {\n      "collaborationToolsStartAccess": "all_editors",\n      "copyAccess": "anyone",\n      "sharingAccess": "team_members_with_editing_rights"\n    },\n    "sharingPolicy": {\n      "access": "private",\n      "inviteToAccountAndBoardLinkAccess": "no_access",\n      "organizationAccess": "private",\n      "teamAccess": "private"\n    }\n  },\n  "teamId": "{{team_id}}",\n  "projectId": "<value>"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards?copy_from={{board_id}}',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards'],
              query: [
                {
                  key: 'copy_from',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board that you want to copy.',
                },
              ],
            },
            description:
              'Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get specific board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information about a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update board',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "description": "Description",\n  "name": "Untitled",\n  "policy": {\n    "permissionsPolicy": {\n      "collaborationToolsStartAccess": "all_editors",\n      "copyAccess": "anyone",\n      "sharingAccess": "team_members_with_editing_rights"\n    },\n    "sharingPolicy": {\n      "access": "private",\n      "inviteToAccountAndBoardLinkAccess": "no_access",\n      "organizationAccess": "private",\n      "teamAccess": "private"\n    }\n  },\n  "teamId": "{{team_id}}",\n  "projectId": "<value>"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board that you want to update.',
                },
              ],
            },
            description:
              'Updates a specific board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete board',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Board Members',
      item: [
        {
          name: 'Share board',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "emails": [\n    "member@email.com"\n  ],\n  "role": "commenter",\n  "message": "Hey there! Join my board and let\'s collaborate on this project!"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/members',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'members'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board to which the board member belongs.',
                },
              ],
            },
            description:
              "Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board's Sharing policy, there might be various scenarios where membership in the team is required in order to share the board with a user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>",
          },
          response: [],
        },
        {
          name: 'Get all board members',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/members?limit=&offset=',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'members'],
              query: [
                {
                  key: 'limit',
                  value: '',
                },
                {
                  key: 'offset',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board to which the board member belongs.',
                },
              ],
            },
            description:
              'Retrieves a pageable list of members for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get specific board member',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/members/:board_member_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'members', ':board_member_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board to which the board member belongs.',
                },
                {
                  key: 'board_member_id',
                  value: '{{board_member_id}}',
                  description: '(Required) Unique identifier (ID) of the board member whose role you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update board member',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "role": "commenter"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/members/:board_member_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'members', ':board_member_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board for which you want to update the role of the board member.',
                },
                {
                  key: 'board_member_id',
                  value: '{{board_member_id}}',
                  description: '(Required) Unique identifier (ID) of the board member whose role you want to update.',
                },
              ],
            },
            description:
              'Updates the role of a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Remove board member',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/members/:board_member_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'members', ':board_member_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete an item.',
                },
                {
                  key: 'board_member_id',
                  value: '{{board_member_id}}',
                  description: '(Required) Unique identifier (ID) of the board member whose role you want to delete.',
                },
              ],
            },
            description:
              'Removes a board member from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Texts',
      item: [
        {
          name: 'Create text item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello"\n  },\n  "style": {\n    "color": "#1a1a1a",\n    "fillColor": "#e6e6e6",\n    "fillOpacity": "1.0",\n    "fontFamily": "arial",\n    "fontSize": "12",\n    "textAlign": "left"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "rotation": 0,\n    "width": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/texts',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'texts'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds a text item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get text item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/texts/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'texts', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update text item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello"\n  },\n  "style": {\n    "color": "#1a1a1a",\n    "fillColor": "#e6e6e6",\n    "fillOpacity": "1.0",\n    "fontFamily": "arial",\n    "fontSize": "12",\n    "textAlign": "left"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "rotation": 0,\n    "width": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/texts/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'texts', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete text item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/texts/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'texts', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a text item from the board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Sticky Notes',
      item: [
        {
          name: 'Create sticky note item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello",\n    "shape": "square"\n  },\n  "style": {\n    "fillColor": "gray",\n    "textAlign": "left",\n    "textAlignVertical": "top"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/sticky_notes',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'sticky_notes'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get sticky note item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/sticky_notes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'sticky_notes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update sticky note item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello",\n    "shape": "square"\n  },\n  "style": {\n    "fillColor": "gray",\n    "textAlign": "left",\n    "textAlignVertical": "top"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/sticky_notes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'sticky_notes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete sticky note item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/sticky_notes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'sticky_notes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Shapes',
      item: [
        {
          name: 'Create shape item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello",\n    "shape": "rectangle"\n  },\n  "style": {\n    "borderColor": "#1a1a1a",\n    "borderOpacity": "0.0",\n    "borderStyle": "normal",\n    "borderWidth": "1.0",\n    "color": "#1a1a1a",\n    "fillColor": "#8fd14f",\n    "fillOpacity": "1.0",\n    "fontFamily": "arial",\n    "fontSize": "12",\n    "textAlign": "left",\n    "textAlignVertical": "top"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/shapes',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'shapes'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds a shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get shape item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/shapes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'shapes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update shape item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "content": "Hello",\n    "shape": "rectangle"\n  },\n  "style": {\n    "borderColor": "#1a1a1a",\n    "borderOpacity": "0.0",\n    "borderStyle": "normal",\n    "borderWidth": "1.0",\n    "color": "#1a1a1a",\n    "fillColor": "#8fd14f",\n    "fillOpacity": "1.0",\n    "fontFamily": "arial",\n    "fontSize": "12",\n    "textAlign": "left",\n    "textAlignVertical": "top"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/shapes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'shapes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates a shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete shape item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/shapes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'shapes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Images',
      item: [
        {
          name: 'Create image item from local file',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'multipart/form-data',
              },
              {
                key: 'Accept',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'formdata',
              formdata: [
                {
                  key: 'resource',
                  description: '(Required) The image file from the device. For example, `foo.png`.',
                  type: 'file',
                  src: [],
                },
                {
                  key: 'data',
                  value:
                    '{"title":"Test image title","geometry":{"width":300,"height":300,"rotation":0},"position":{"x":100,"y":100,"origin":"center"}}',
                  type: 'text',
                },
              ],
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the board](https://beta.developers.miro.com/reference/board-model) where you want to create the item.',
                },
              ],
            },
            description:
              'Adds an image item to a board by uploading a locally stored image file.<br/><h3>Required scope</h3> <a target="blank" href="/reference/scopes">boards:write</a> <br/><h3>Rate limiting</h3> <a target="blank" href="/reference/ratelimiting">Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Create image item using URL',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "url": "https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png",\n    "title": "Sample image title"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "rotation": 0\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds an image item to a board by specifying an image URL.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get image item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update image item using URL',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "title": "Test image title",\n    "url": "https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "rotation": 0\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update image item from local file',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'multipart/form-data',
              },
              {
                key: 'Accept',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'formdata',
              formdata: [
                {
                  key: 'resource',
                  description: 'The image file from the device. For example, `foo.png`.',
                  type: 'file',
                  src: [],
                },
                {
                  key: 'data',
                  value:
                    '{"title":"Test image title","geometry":{"width":300,"height":300,"rotation":0},"position":{"x":100,"y":100,"origin":"center"}}',
                  type: 'text',
                },
              ],
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the board](https://beta.developers.miro.com/reference/board-model) where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the item](https://beta.developers.miro.com/reference/rest-api-item-model) that you want to update.',
                },
              ],
            },
            description:
              'Updates an image item on a board.<br/><h3>Required scope</h3> <a target="blank" href="/reference/scopes">boards:write</a> <br/><h3>Rate limiting</h3> <a target="blank" href="/reference/ratelimiting">Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete image item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/images/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'images', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes an image item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Documents',
      item: [
        {
          name: 'Create document item using local file',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'multipart/form-data',
              },
              {
                key: 'Accept',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'formdata',
              formdata: [
                {
                  key: 'resource',
                  description: '(Required) ',
                  type: 'file',
                  src: [],
                },
                {
                  key: 'data',
                  value:
                    '{"position":{"x":100,"y":100,"origin":"center"},"geometry":{"width":300,"height":300,"rotation":0},"title":"Sample document title"}',
                  type: 'text',
                },
              ],
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the board](https://beta.developers.miro.com/reference/board-model) where you want to create the item.',
                },
              ],
            },
            description:
              'Adds an image item to a board by uploading a locally stored image file.<br/><h3>Required scope</h3> <a target="blank" href="/reference/scopes">boards:write</a> <br/><h3>Rate limiting</h3> <a target="blank" href="/reference/ratelimiting">Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Create document item using URL',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",\n    "title": "Sample document title"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "width": 100,\n    "rotation": 0\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds a document item to a board by specifying the URL where the document is hosted.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get document item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update document item using local file',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'multipart/form-data',
              },
              {
                key: 'Accept',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'formdata',
              formdata: [
                {
                  key: 'resource',
                  type: 'file',
                  src: [],
                },
                {
                  key: 'data',
                  value:
                    '{"position":{"x":100,"y":100,"origin":"center"},"geometry":{"width":300,"height":300,"rotation":0},"title":"Sample document title"}',
                  type: 'text',
                },
              ],
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the board](https://beta.developers.miro.com/reference/board-model) where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description:
                    '(Required) [Unique identifier (ID) of the item](https://beta.developers.miro.com/reference/rest-api-item-model) that you want to update.',
                },
              ],
            },
            description:
              'Updates an image item on a board<br/><h3>Required scope</h3> <a target="blank" href="/reference/scopes">boards:write</a> <br/><h3>Rate limiting</h3> <a target="blank" href="/reference/ratelimiting">Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update document item using URL',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "title": "<value>",\n    "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "width": 100,\n    "rotation": 0\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates a document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete document item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/documents/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'documents', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a document item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Embeds',
      item: [
        {
          name: 'Create embed item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "url": "https://www.youtube.com/watch?v=HlVSNEiFCBk",\n    "mode": "inline",\n    "previewUrl": "https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/embeds',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'embeds'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds an embed item containing external content to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get embed item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/embeds/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'embeds', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific embed item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update embed item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "mode": "inline",\n    "previewUrl": "https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png",\n    "url": "https://www.youtube.com/watch?v=HlVSNEiFCBk"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/embeds/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'embeds', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates an embed item on a board based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete embed item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/embeds/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'embeds', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes an embed item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Cards',
      item: [
        {
          name: 'Create card item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "assigneeId": "3074457362577955300",\n    "description": "sample card description",\n    "dueDate": "2023-10-12T22:00:55.000Z",\n    "title": "sample card item"\n  },\n  "style": {\n    "cardTheme": "#2d9bf0"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/cards',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'cards'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds a card item to a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get card item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific card item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update card item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "assigneeId": "3074457362577955300",\n    "description": "sample card description",\n    "dueDate": "2023-10-12T22:00:55.000Z",\n    "title": "sample card item"\n  },\n  "style": {\n    "cardTheme": "#2d9bf0"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates a card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete card item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a card item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'App Cards',
      item: [
        {
          name: 'Create app card item',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "description": "Sample app card description",\n    "fields": [\n      {\n        "fillColor": "#2fa9e3",\n        "iconShape": "round",\n        "iconUrl": "https://cdn-icons-png.flaticon.com/512/5695/5695864.png",\n        "textColor": "#1a1a1a",\n        "tooltip": "Completion status indicator",\n        "value": "Status: in progress"\n      },\n      {\n        "fillColor": "#2fa9e3",\n        "iconShape": "round",\n        "iconUrl": "https://cdn-icons-png.flaticon.com/512/5695/5695864.png",\n        "textColor": "#1a1a1a",\n        "tooltip": "Completion status indicator",\n        "value": "Status: in progress"\n      }\n    ],\n    "status": "disconnected",\n    "title": "sample app card item"\n  },\n  "style": {\n    "fillColor": "#2d9bf0"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/app_cards',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'app_cards'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the item.',
                },
              ],
            },
            description:
              'Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get app card item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/app_cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'app_cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update app card item',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "description": "Sample app card description",\n    "fields": [\n      {\n        "fillColor": "#2fa9e3",\n        "iconShape": "round",\n        "iconUrl": "https://cdn-icons-png.flaticon.com/512/5695/5695864.png",\n        "textColor": "#1a1a1a",\n        "tooltip": "Completion status indicator",\n        "value": "Status: in progress"\n      },\n      {\n        "fillColor": "#2fa9e3",\n        "iconShape": "round",\n        "iconUrl": "https://cdn-icons-png.flaticon.com/512/5695/5695864.png",\n        "textColor": "#1a1a1a",\n        "tooltip": "Completion status indicator",\n        "value": "Status: in progress"\n      }\n    ],\n    "status": "disconnected",\n    "title": "sample app card item"\n  },\n  "style": {\n    "fillColor": "#2d9bf0"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 60,\n    "rotation": 0,\n    "width": 320\n  },\n  "parent": {\n    "id": "{{parent_id}}"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/app_cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'app_cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete app card item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/app_cards/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'app_cards', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete an item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Frames',
      item: [
        {
          name: 'Create frame',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "format": "custom",\n    "title": "Sample frame title",\n    "type": "freeform",\n    "showContent": true\n  },\n  "style": {\n    "fillColor": "#ffffffff"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "width": 100\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/frames',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'frames'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create a frame.',
                },
              ],
            },
            description:
              'Adds a frame to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get frame',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/frames/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'frames', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board that contains the frame that you want to retrieve',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the frame that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update frame',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "data": {\n    "format": "custom",\n    "title": "Sample frame title",\n    "type": "freeform",\n    "showContent": true\n  },\n  "style": {\n    "fillColor": "#ffffffff"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  },\n  "geometry": {\n    "height": 100,\n    "width": 100\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/frames/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'frames', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the frame.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the frame that you want to update.',
                },
              ],
            },
            description:
              'Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete frame',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/frames/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'frames', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to delete the frame.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the frame that you want to delete.',
                },
              ],
            },
            description:
              'Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Items',
      item: [
        {
          name: 'Get items on board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/items?limit=10&type=text&cursor=',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'items'],
              query: [
                {
                  key: 'limit',
                  value: '10',
                },
                {
                  key: 'type',
                  value: 'text',
                },
                {
                  key: 'cursor',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board for which you want to retrieve the list of available items.',
                },
              ],
            },
            description:
              "Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.\n\nThis method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
          },
          response: [],
        },
        {
          name: 'Get specific item on board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/items/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'items', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update item position or parent',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "parent": {\n    "id": "{{parent_id}}"\n  },\n  "position": {\n    "x": 100,\n    "y": 100\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/items/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'items', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to update the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to update.',
                },
              ],
            },
            description:
              'Updates the position or the parent of an item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/items/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'items', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board from which you want to delete the item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to delete.',
                },
              ],
            },
            description:
              'Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get items within frame',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id_PlatformContainers/items?parent_item_id=&limit=10&type=&cursor=',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id_PlatformContainers', 'items'],
              query: [
                {
                  key: 'parent_item_id',
                  value: '',
                  description: '(Required) ID of the frame for which you want to retrieve the list of available items.',
                },
                {
                  key: 'limit',
                  value: '10',
                },
                {
                  key: 'type',
                  value: '',
                },
                {
                  key: 'cursor',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id_PlatformContainers',
                  value: '',
                  description:
                    '(Required) Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items.',
                },
              ],
            },
            description:
              "Retrieves a list of items within a specific frame. A frame is a parent item and all items within a frame are child items. This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
          },
          response: [],
        },
      ],
    },
    {
      name: 'Tags',
      item: [
        {
          name: 'Get tags from item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/items/:item_id/tags',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'items', ':item_id', 'tags'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board with the item whose tags you want to retrieve.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item whose tags you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Create tag',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "title": "to do",\n  "fillColor": "red"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/tags',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'tags'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board where you want to create the tag.',
                },
              ],
            },
            description:
              'Creates a tag on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get tags from board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/tags?limit=&offset=',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'tags'],
              query: [
                {
                  key: 'limit',
                  value: '',
                },
                {
                  key: 'offset',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description: '(Required) Unique identifier (ID) of the board whose tags you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves all the tags from the specified board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get tag',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/tags/:tag_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'tags', ':tag_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board where you want to retrieve a specific tag.',
                },
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update tag',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "fillColor": "red",\n  "title": "done"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/tags/:tag_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'tags', ':tag_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board where you want to update a specific tag.',
                },
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag that you want to update.',
                },
              ],
            },
            description:
              'Updates a tag based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete tag',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/tags/:tag_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'tags', ':tag_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board where you want to delete a specific tag.',
                },
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag that you want to delete.',
                },
              ],
            },
            description:
              'Deletes the specified tag from the board. The tag is also removed from all cards and sticky notes on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get items by tag',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id_PlatformTags/items?limit=&offset=&tag_id={{tag_id}}',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id_PlatformTags', 'items'],
              query: [
                {
                  key: 'limit',
                  value: '',
                },
                {
                  key: 'offset',
                  value: '',
                },
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag that you want to retrieve.',
                },
              ],
              variable: [
                {
                  key: 'board_id_PlatformTags',
                  value: '',
                  description:
                    '(Required) Unique identifier (ID) of the board where you want to retrieve a specific tag.',
                },
              ],
            },
            description:
              'Retrieves all the items that have the specified tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Attach tag to item',
          request: {
            method: 'POST',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id_PlatformTags/items/:item_id?tag_id={{tag_id}}',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id_PlatformTags', 'items', ':item_id'],
              query: [
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag you want to add to the item.',
                },
              ],
              variable: [
                {
                  key: 'board_id_PlatformTags',
                  value: '',
                  description:
                    '(Required) Unique identifier (ID) of the board with the item that you want to add a tag to.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item to which you want to add a tag.',
                },
              ],
            },
            description:
              'Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Remove tag from item',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id_PlatformTags/items/:item_id?tag_id={{tag_id}}',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id_PlatformTags', 'items', ':item_id'],
              query: [
                {
                  key: 'tag_id',
                  value: '{{tag_id}}',
                  description: '(Required) Unique identifier (ID) of the tag that you want to remove from the item.',
                },
              ],
              variable: [
                {
                  key: 'board_id_PlatformTags',
                  value: '',
                  description:
                    '(Required) Unique identifier (ID) of the board with the item that you want to remove a tag from.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to remove the tag from.',
                },
              ],
            },
            description:
              'Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Connectors',
      item: [
        {
          name: 'Create connector',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "endItem": {\n    "id": "{{item_id}}",\n    "snapTo": "auto"\n  },\n  "startItem": {\n    "id": "{{item_id}}",\n    "snapTo": "auto"\n  },\n  "shape": "straight",\n  "captions": [\n    {\n      "content": "<p>Caption text</p>",\n      "position": "50%",\n      "textAlignVertical": "top"\n    },\n    {\n      "content": "<p>Caption text</p>",\n      "position": "50%",\n      "textAlignVertical": "top"\n    },\n    {\n      "content": "<p>Caption text</p>",\n      "position": "50%",\n      "textAlignVertical": "top"\n    }\n  ],\n  "style": {\n    "color": "#9510ac",\n    "endStrokeCap": "none",\n    "fontSize": "15",\n    "startStrokeCap": "none",\n    "strokeColor": "#2d9bf0",\n    "strokeStyle": "normal",\n    "strokeWidth": "2.0",\n    "textOrientation": "horizontal"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/connectors',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'connectors'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board for which you want to create the connector.',
                },
              ],
            },
            description:
              'Adds a connector to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get connectors',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/connectors?limit=10&cursor=',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'connectors'],
              query: [
                {
                  key: 'limit',
                  value: '10',
                },
                {
                  key: 'cursor',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a list of connectors.',
                },
              ],
            },
            description:
              "Retrieves a list of connectors for a specific board.\n\nThis method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
          },
          response: [],
        },
        {
          name: 'Get specific connector',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/connectors/:connector_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'connectors', ':connector_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific connector.',
                },
                {
                  key: 'connector_id',
                  value: '',
                  description: '(Required) Unique identifier (ID) of the connector that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update connector',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "startItem": {\n    "id": "{{item_id}}",\n    "position": {\n      "x": "50%",\n      "y": "0%"\n    }\n  },\n  "endItem": {\n    "id": "{{item_id}}",\n    "position": {\n      "x": "50%",\n      "y": "0%"\n    }\n  },\n  "shape": "straight",\n  "captions": [\n    {\n      "content": "<p>Caption text</p>",\n      "position": "50%",\n      "textAlignVertical": "top"\n    }\n  ],\n  "style": {\n    "color": "#9510ac",\n    "endStrokeCap": "none",\n    "fontSize": "15",\n    "startStrokeCap": "none",\n    "strokeColor": "#2d9bf0",\n    "strokeStyle": "normal",\n    "strokeWidth": "2.0",\n    "textOrientation": "horizontal"\n  }\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/connectors/:connector_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'connectors', ':connector_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board for which you want to update the connector.',
                },
                {
                  key: 'connector_id',
                  value: '',
                  description: '(Required) Unique identifier (ID) of the connector that you want to update.',
                },
              ],
            },
            description:
              'Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete connector',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2/boards/:board_id/connectors/:connector_id',
              host: ['{{baseUrl}}'],
              path: ['v2', 'boards', ':board_id', 'connectors', ':connector_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to delete the connector.',
                },
                {
                  key: 'connector_id',
                  value: '',
                  description: '(Required) Unique identifier (ID) of the connector that you want to delete.',
                },
              ],
            },
            description:
              'Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Webhooks (experimental)',
      item: [
        {
          name: 'Create webhook subscription',
          request: {
            method: 'POST',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "boardId": "{{board_id}}",\n  "callbackUrl": "https://yourwebhooklistener.com/v2/webhooks_endpoint",\n  "status": "enabled"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2-experimental/webhooks/board_subscriptions',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'webhooks', 'board_subscriptions'],
            },
            description:
              'Creates a webhook subscription to receive notifications when an item on a board is updated. Subscriptions are created per user, per board. You can create multiple subscriptions. We currently support all board items barring tags, connectors, and comments. Changes in item position do not trigger an event at the moment.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Update webhook subscription',
          request: {
            method: 'PATCH',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "callbackUrl": "https://yourwebhooklistener.com/v2/webhooks_endpoint",\n  "status": "enabled"\n}',
              options: {
                raw: {
                  language: 'json',
                },
              },
            },
            url: {
              raw: '{{baseUrl}}/v2-experimental/webhooks/board_subscriptions/:subscription_id',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'webhooks', 'board_subscriptions', ':subscription_id'],
              variable: [
                {
                  key: 'subscription_id',
                  value: '',
                  description: '(Required) ',
                },
              ],
            },
            description:
              'Updates the status or the callback URL of an existing webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get webhook subscriptions',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/webhooks/subscriptions?limit=10&cursor=',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'webhooks', 'subscriptions'],
              query: [
                {
                  key: 'limit',
                  value: '10',
                },
                {
                  key: 'cursor',
                  value: '',
                },
              ],
            },
            description:
              'Retrieves information about all webhook subscriptions for a specific user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get specific webhook subscription',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/webhooks/subscriptions/:subscription_id',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'webhooks', 'subscriptions', ':subscription_id'],
              variable: [
                {
                  key: 'subscription_id',
                  value: '',
                  description: '(Required) Unique identifier (ID) of the subscription that you want to retrieve',
                },
              ],
            },
            description:
              'Retrieves information for a specific webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
        {
          name: 'Delete webhook subscription',
          request: {
            method: 'DELETE',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/webhooks/subscriptions/:subscription_id',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'webhooks', 'subscriptions', ':subscription_id'],
              variable: [
                {
                  key: 'subscription_id',
                  value: '',
                  description: '(Required) Unique identifier (ID) of the subscription that you want to delete',
                },
              ],
            },
            description:
              'Deletes the specified webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>',
          },
          response: [],
        },
      ],
    },
    {
      name: 'Flowchart shapes (experimental)',
      item: [
        {
          name: 'Get items on board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/boards/:board_id/items?limit=10&type=shape&cursor=',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'boards', ':board_id', 'items'],
              query: [
                {
                  key: 'limit',
                  value: '10',
                },
                {
                  key: 'type',
                  value: 'shape',
                },
                {
                  key: 'cursor',
                  value: '',
                },
              ],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board for which you want to retrieve the list of available items.',
                },
              ],
            },
            description:
              "Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.\n\nThis method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>",
          },
          response: [],
        },
        {
          name: 'Get specific item on board',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/boards/:board_id/items/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'boards', ':board_id', 'items', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
        {
          name: 'Get shape item',
          request: {
            method: 'GET',
            header: [],
            url: {
              raw: '{{baseUrl}}/v2-experimental/boards/:board_id/shapes/:item_id',
              host: ['{{baseUrl}}'],
              path: ['v2-experimental', 'boards', ':board_id', 'shapes', ':item_id'],
              variable: [
                {
                  key: 'board_id',
                  value: '{{board_id}}',
                  description:
                    '(Required) Unique identifier (ID) of the board from which you want to retrieve a specific item.',
                },
                {
                  key: 'item_id',
                  value: '{{item_id}}',
                  description: '(Required) Unique identifier (ID) of the item that you want to retrieve.',
                },
              ],
            },
            description:
              'Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>',
          },
          response: [],
        },
      ],
    },
  ],
  auth: {
    type: 'bearer',
    bearer: [
      {
        key: 'token',
        value: '{{access_token}}',
        type: 'string',
      },
    ],
  },
  event: [
    {
      listen: 'prerequest',
      script: {
        type: 'text/javascript',
        exec: [''],
      },
    },
    {
      listen: 'test',
      script: {
        type: 'text/javascript',
        exec: [''],
      },
    },
  ],
  variable: [
    {
      key: 'baseUrl',
      value: 'https://api.miro.com',
      type: 'string',
    },
    {
      key: 'parent_id',
      value: 'null',
      type: 'string',
    },
    {
      key: 'access_token',
      value: '<Add your access token here>',
      type: 'string',
    },
  ],
}