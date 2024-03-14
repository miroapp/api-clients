from typing import Annotated, Generator, Optional

from pydantic import Field, StrictBool, StrictStr, validate_call
from miro_api.api import MiroApiEndpoints
from miro_api.models.board import Board
from miro_api.models.board_member import BoardMember
from miro_api.models.connector_with_links import ConnectorWithLinks
from miro_api.models.generic_item import GenericItem
from miro_api.models.organization_member import OrganizationMember
from miro_api.models.tag import Tag
from miro_api.models.team import Team
from miro_api.models.team_member import TeamMember


class MiroApiEndpointsWithAutoPagination(MiroApiEndpoints):
    @staticmethod
    def _has_more_data(offset: Optional[int], data_length: int, total: Optional[int]):
        total = total or 0
        offset = offset or 0
        return total and data_length and offset + data_length < total

    @validate_call
    def get_all_boards(
        self,
        team_id: Optional[StrictStr] = None,
        project_id: Optional[StrictStr] = None,
        query: Optional[Annotated[str, Field(strict=True, max_length=500)]] = None,
        owner: Optional[StrictStr] = None,
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
        sort: Optional[StrictStr] = None,
    ) -> Generator[Board, None, None]:
        current_offset = 0
        while True:
            response = self.get_boards(
                team_id=team_id,
                project_id=project_id,
                query=query,
                owner=owner,
                limit=limit,
                offset=str(current_offset),
                sort=sort,
            )

            for board in response.data or []:
                yield board

            received_items_len = len(response.data or [])
            if not self._has_more_data(
                response.offset, received_items_len, response.total
            ):
                break

            current_offset += received_items_len

    @validate_call
    def get_all_tags_from_board(
        self,
        board_id: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board whose tags you want to retrieve."
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
    ) -> Generator[Tag, None, None]:
        current_offset = 0
        while True:
            response = self.get_tags_from_board(
                board_id=board_id,
                limit=limit,
                offset=str(current_offset),
            )

            for board in response.data or []:
                yield board

            received_items_len = len(response.data or [])
            if not self._has_more_data(
                response.offset, received_items_len, response.total
            ):
                break

            current_offset += received_items_len

    @validate_call
    def get_all_board_members(
        self,
        board_id: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board to which the board member belongs."
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
    ) -> Generator[BoardMember, None, None]:
        current_offset = 0
        while True:
            response = self.get_board_members(
                board_id=board_id,
                limit=limit,
                offset=str(current_offset),
            )

            for member in response.data or []:
                yield member

            received_items_len = len(response.data or [])
            if not self._has_more_data(
                response.offset, received_items_len, response.total
            ):
                break

            current_offset += received_items_len

    @validate_call
    def get_all_items(
        self,
        board_id_platform: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board for which you want to retrieve the list of available items."
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
        type: Optional[StrictStr] = None,
    ) -> Generator[GenericItem, None, None]:
        cursor = None
        while True:
            response = self.get_items(
                board_id_platform=board_id_platform,
                limit=limit,
                cursor=cursor,
                type=type,
            )

            for item in response.data or []:
                yield item

            cursor = response.cursor

            if not cursor or not len(response.data or []) or not response.total:
                break

    @validate_call
    def get_all_items_by_tag(
        self,
        board_id_platform_tags: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board where you want to retrieve a specific tag."
            ),
        ],
        tag_id: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the tag that you want to retrieve."
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
    ) -> Generator[GenericItem, None, None]:
        current_offset = 0
        while True:
            response = self.get_items_by_tag(
                board_id_platform_tags=board_id_platform_tags,
                tag_id=tag_id,
                limit=limit,
                offset=str(current_offset),
            )

            for item in response.data or []:
                yield item

            received_items_len = len(response.data or [])
            if not self._has_more_data(
                response.offset, received_items_len, response.total
            ):
                break

            current_offset += received_items_len

    @validate_call
    def get_all_items_within_frame(
        self,
        board_id: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items."
            ),
        ],
        parent_item_id: Annotated[
            str,
            Field(
                strict=True,
                description="ID of the frame for which you want to retrieve the list of available items.",
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
        type: Optional[StrictStr] = None,
    ) -> Generator[GenericItem, None, None]:
        cursor = None
        while True:
            response = self.get_items_within_frame(
                board_id=board_id,
                parent_item_id=parent_item_id,
                limit=limit,
                type=type,
                cursor=cursor,
            )

            for item in response.data or []:
                yield item

            cursor = response.cursor

            if not cursor or not len(response.data or []) or not response.total:
                break

    @validate_call
    def get_all_connectors(
        self,
        board_id: Annotated[
            StrictStr,
            Field(
                description="Unique identifier (ID) of the board from which you want to retrieve a list of connectors."
            ),
        ],
        limit: Optional[Annotated[str, Field(strict=True)]] = None,
    ) -> Generator[ConnectorWithLinks, None, None]:
        cursor = None
        while True:
            response = self.get_connectors(
                board_id=board_id,
                limit=limit,
                cursor=cursor,
            )

            for connector in response.data or []:
                yield connector

            cursor = response.cursor

            if not cursor or not len(response.data or []) or not response.total:
                break

    @validate_call
    def get_all_enterprise_teams(
        self,
        org_id: Annotated[StrictStr, Field(description="The id of the Organization.")],
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
        name: Annotated[
            Optional[StrictStr],
            Field(
                description='Name query. Filters teams by name using case insensitive partial match. A value "dev" will return both "Developer\'s team" and "Team for developers".'
            ),
        ] = None,
    ) -> Generator[Team, None, None]:
        cursor = None
        while True:
            response = self.enterprise_get_teams(
                org_id=org_id,
                limit=limit,
                cursor=cursor,
                name=name,
            )

            for team in response.data or []:
                yield team

            cursor = response.cursor

            if not cursor or not len(response.data or []):
                break

    @validate_call
    def get_all_organization_members(
        self,
        org_id: Annotated[StrictStr, Field(description="id of the organization")],
        emails: Optional[StrictStr] = None,
        role: Optional[StrictStr] = None,
        license: Optional[StrictStr] = None,
        active: Optional[StrictBool] = None,
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
    ) -> Generator[OrganizationMember, None, None]:
        cursor = None
        while True:
            response = self.enterprise_get_organization_members(
                org_id=org_id,
                limit=limit,
                cursor=cursor,
                emails=emails,
                role=role,
                license=license,
                active=active,
            )

            response_instance = response.actual_instance

            if not response_instance:
                return

            if isinstance(response_instance, list):
                for member in response_instance or []:
                    yield member

                return

            for member in response_instance.data or []:
                yield member

            cursor = response_instance.cursor

            if not cursor or not len(response_instance.data or []):
                break

    @validate_call
    def get_all_enterprise_team_members(
        self,
        org_id: Annotated[StrictStr, Field(description="The id of the Organization.")],
        team_id: Annotated[StrictStr, Field(description="The id of the Team.")],
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
        role: Annotated[
            Optional[StrictStr],
            Field(
                description=' Role query. Filters members by role using full word match. Accepted values are: * "member":     Team member with full member permissions. * "admin":      Admin of a team. Team member with permission to manage team. * "non_team":   External user, non-team user. * "team_guest": Team-guest user, user with access only to a team without access to organization. '
            ),
        ] = None,
    ) -> Generator[TeamMember, None, None]:
        cursor = None
        while True:
            response = self.enterprise_get_team_members(
                org_id=org_id,
                team_id=team_id,
                limit=limit,
                cursor=cursor,
                role=role,
            )

            for member in response.data or []:
                yield member

            cursor = response.cursor

            if not cursor or not len(response.data or []):
                break
