## [2.2.2]

- fixed `createdAfter` and `createdBefore` parameters format in `/v2/audit/logs`

## [2.2.1]

- fixed `organization` property in `/v1/oauth-token` response is optional

## [2.2.0]

- update api specification to latest version

## [2.1.0]

- added option to change base URL for API requests

## [2.0.2]

- fixed cursor pagination for `getAllTeamMembers` ([#224](https://github.com/miroapp/api-clients/issues/224) by [Mahito](https://github.com/Mahito))

## [2.0.1]

- fixed cursor pagination for `getAllOrganizationMembers` ([#209](https://github.com/miroapp/api-clients/pull/209) by [Mahito](https://github.com/Mahito))

## [2.0.0]

- added new experimental API endpoints and updated based on latest specification:
   - https://developers.miro.com/changelog/2023-05-04-changelog
   - https://developers.miro.com/changelog/2023-05-24-changelog#flowchart
   - https://developers.miro.com/changelog/2023-06-12
   - https://developers.miro.com/changelog/2023-02-06-changelog

## [1.0.4]

- added export board API
- updated documentation
- updated dependencies

## [1.0.3]

- updated dependencies
- updated isAuthorized to check if the access token is available, not only if the state is in storage

## [1.0.2]

- Remove the need to have esModuleInterop and allowSyntheticDefaultImports flags enabled in tsconfig.json

## [1.0.1]

- Updates to documentation

## [1.0.0]

- Initial release
