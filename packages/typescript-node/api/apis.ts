import {AppCardsApi, AppCardsApiMethods} from './appCardsApi'
export {AppCardsApiMethods} from './appCardsApi'
import {
  BoardClassificationBoardLevelApi,
  BoardClassificationBoardLevelApiMethods,
} from './boardClassificationBoardLevelApi'
export {BoardClassificationBoardLevelApiMethods} from './boardClassificationBoardLevelApi'
import {
  BoardClassificationOrganizationLevelApi,
  BoardClassificationOrganizationLevelApiMethods,
} from './boardClassificationOrganizationLevelApi'
export {BoardClassificationOrganizationLevelApiMethods} from './boardClassificationOrganizationLevelApi'
import {
  BoardClassificationTeamLevelApi,
  BoardClassificationTeamLevelApiMethods,
} from './boardClassificationTeamLevelApi'
export {BoardClassificationTeamLevelApiMethods} from './boardClassificationTeamLevelApi'
import {BoardMembersApi, BoardMembersApiMethods} from './boardMembersApi'
export {BoardMembersApiMethods} from './boardMembersApi'
import {BoardsApi, BoardsApiMethods} from './boardsApi'
export {BoardsApiMethods} from './boardsApi'
import {CardsApi, CardsApiMethods} from './cardsApi'
export {CardsApiMethods} from './cardsApi'
import {ConnectorsApi, ConnectorsApiMethods} from './connectorsApi'
export {ConnectorsApiMethods} from './connectorsApi'
import {DocumentsApi, DocumentsApiMethods} from './documentsApi'
export {DocumentsApiMethods} from './documentsApi'
import {EmbedsApi, EmbedsApiMethods} from './embedsApi'
export {EmbedsApiMethods} from './embedsApi'
import {FramesApi, FramesApiMethods} from './framesApi'
export {FramesApiMethods} from './framesApi'
import {ImagesApi, ImagesApiMethods} from './imagesApi'
export {ImagesApiMethods} from './imagesApi'
import {ItemsApi, ItemsApiMethods} from './itemsApi'
export {ItemsApiMethods} from './itemsApi'
import {OrganizationsApi, OrganizationsApiMethods} from './organizationsApi'
export {OrganizationsApiMethods} from './organizationsApi'
import {ShapesApi, ShapesApiMethods} from './shapesApi'
export {ShapesApiMethods} from './shapesApi'
import {StickyNotesApi, StickyNotesApiMethods} from './stickyNotesApi'
export {StickyNotesApiMethods} from './stickyNotesApi'
import {TagsApi, TagsApiMethods} from './tagsApi'
export {TagsApiMethods} from './tagsApi'
import {TeamMembersApiApi, TeamMembersApiApiMethods} from './teamMembersApiApi'
export {TeamMembersApiApiMethods} from './teamMembersApiApi'
import {TeamSettingsApiApi, TeamSettingsApiApiMethods} from './teamSettingsApiApi'
export {TeamSettingsApiApiMethods} from './teamSettingsApiApi'
import {TeamsApiApi, TeamsApiApiMethods} from './teamsApiApi'
export {TeamsApiApiMethods} from './teamsApiApi'
import {TextsApi, TextsApiMethods} from './textsApi'
export {TextsApiMethods} from './textsApi'
import fetch, {Response} from 'node-fetch'

let defaultBasePath = 'https://api.miro.com'

export interface MiroEndpoints
  extends AppCardsApiMethods,
    BoardClassificationBoardLevelApiMethods,
    BoardClassificationOrganizationLevelApiMethods,
    BoardClassificationTeamLevelApiMethods,
    BoardMembersApiMethods,
    BoardsApiMethods,
    CardsApiMethods,
    ConnectorsApiMethods,
    DocumentsApiMethods,
    EmbedsApiMethods,
    FramesApiMethods,
    ImagesApiMethods,
    ItemsApiMethods,
    OrganizationsApiMethods,
    ShapesApiMethods,
    StickyNotesApiMethods,
    TagsApiMethods,
    TeamMembersApiApiMethods,
    TeamSettingsApiApiMethods,
    TeamsApiApiMethods,
    TextsApiMethods {}

export function MiroApi(
  accessToken: string | (() => Promise<string>),
  basePath: string = defaultBasePath,
  logger?: (...thing: any) => void,
): MiroEndpoints {
  return {
    ...AppCardsApi(accessToken, basePath, logger),
    ...BoardClassificationBoardLevelApi(accessToken, basePath, logger),
    ...BoardClassificationOrganizationLevelApi(accessToken, basePath, logger),
    ...BoardClassificationTeamLevelApi(accessToken, basePath, logger),
    ...BoardMembersApi(accessToken, basePath, logger),
    ...BoardsApi(accessToken, basePath, logger),
    ...CardsApi(accessToken, basePath, logger),
    ...ConnectorsApi(accessToken, basePath, logger),
    ...DocumentsApi(accessToken, basePath, logger),
    ...EmbedsApi(accessToken, basePath, logger),
    ...FramesApi(accessToken, basePath, logger),
    ...ImagesApi(accessToken, basePath, logger),
    ...ItemsApi(accessToken, basePath, logger),
    ...OrganizationsApi(accessToken, basePath, logger),
    ...ShapesApi(accessToken, basePath, logger),
    ...StickyNotesApi(accessToken, basePath, logger),
    ...TagsApi(accessToken, basePath, logger),
    ...TeamMembersApiApi(accessToken, basePath, logger),
    ...TeamSettingsApiApi(accessToken, basePath, logger),
    ...TeamsApiApi(accessToken, basePath, logger),
    ...TextsApi(accessToken, basePath, logger),
  }
}

export class HttpError extends Error {
  constructor(public response: Response, public body: any, public statusCode?: number) {
    super('HTTP request failed')
    this.name = 'HttpError'
  }
}

export async function makeJsonRequest(
  token: string,
  method: string,
  url: URL,
  body?: string,
  logger?: (...thing: any) => void,
) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
  }

  const hasLogger = typeof logger === 'function'

  if (hasLogger) logger('FETCH', url.toString(), options)

  const response = await fetch(url, options)

  if (hasLogger) logger('RESPONSE', response)

  let bodyAsJson: unknown
  try {
    bodyAsJson = await response.json()
  } catch (err) {
    // Body doesn't have valid json
  }

  if (hasLogger && bodyAsJson) logger('BODY', bodyAsJson)

  if (!response.ok) {
    throw new HttpError(response, bodyAsJson, response.status)
  }

  return {bodyAsJson, response}
}
