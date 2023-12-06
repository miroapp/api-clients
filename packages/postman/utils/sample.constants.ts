import {camelToSnake} from './string-utils'

export const variableParams = ['teamId', 'boardId', 'accessToken', 'itemId', 'boardMemberId', 'tagId'].flatMap(
  (param) => [param, camelToSnake(param)],
)

export const definedParams = {
  copy_from: '{{board_id}}',
  description: 'Description',
  rotation: 0.0,
  height: 100,
  width: 100,
  borderColor: '#1a1a1a',
  borderOpacity: '0.0',
  borderWidth: '1.0',
  fillOpacity: '1.0',
  fontSize: '12',
  previewUrl: 'https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png',
}

export const missingPostmanVariables = [
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
]

export const auth = {
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
}
export const event = {
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
}
