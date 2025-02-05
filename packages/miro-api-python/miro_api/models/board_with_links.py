# coding: utf-8

"""
Miro Developer Platform

<img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0.

The version of the OpenAPI document: v2.0
Generated by OpenAPI Generator (https://openapi-generator.tech)

Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from miro_api.models.board_links import BoardLinks
from miro_api.models.board_member import BoardMember
from miro_api.models.board_policy import BoardPolicy
from miro_api.models.board_project import BoardProject
from miro_api.models.picture import Picture
from miro_api.models.team import Team
from miro_api.models.user_info_short import UserInfoShort
from typing import Optional, Set
from typing_extensions import Self


class BoardWithLinks(BaseModel):
    """
    BoardWithLinks
    """  # noqa: E501

    id: StrictStr = Field(description="Unique identifier (ID) of the board.")
    name: StrictStr = Field(description="Name of the board.")
    description: StrictStr = Field(description="Description of the board.")
    team: Optional[Team] = None
    project: Optional[BoardProject] = None
    picture: Optional[Picture] = None
    policy: Optional[BoardPolicy] = None
    view_link: Optional[StrictStr] = Field(default=None, description="URL to view the board.", alias="viewLink")
    owner: Optional[UserInfoShort] = None
    current_user_membership: Optional[BoardMember] = Field(default=None, alias="currentUserMembership")
    created_at: Optional[datetime] = Field(
        default=None,
        description="Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).",
        alias="createdAt",
    )
    created_by: Optional[UserInfoShort] = Field(default=None, alias="createdBy")
    modified_at: Optional[datetime] = Field(
        default=None,
        description="Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).",
        alias="modifiedAt",
    )
    modified_by: Optional[UserInfoShort] = Field(default=None, alias="modifiedBy")
    links: Optional[BoardLinks] = None
    type: StrictStr = Field(description="Type of the object that is returned. In this case, type returns `board`.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = [
        "id",
        "name",
        "description",
        "team",
        "project",
        "picture",
        "policy",
        "viewLink",
        "owner",
        "currentUserMembership",
        "createdAt",
        "createdBy",
        "modifiedAt",
        "modifiedBy",
        "links",
        "type",
    ]

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of BoardWithLinks from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set(
            [
                "additional_properties",
            ]
        )

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of team
        if self.team:
            _dict["team"] = self.team.to_dict()
        # override the default output from pydantic by calling `to_dict()` of project
        if self.project:
            _dict["project"] = self.project.to_dict()
        # override the default output from pydantic by calling `to_dict()` of picture
        if self.picture:
            _dict["picture"] = self.picture.to_dict()
        # override the default output from pydantic by calling `to_dict()` of policy
        if self.policy:
            _dict["policy"] = self.policy.to_dict()
        # override the default output from pydantic by calling `to_dict()` of owner
        if self.owner:
            _dict["owner"] = self.owner.to_dict()
        # override the default output from pydantic by calling `to_dict()` of current_user_membership
        if self.current_user_membership:
            _dict["currentUserMembership"] = self.current_user_membership.to_dict()
        # override the default output from pydantic by calling `to_dict()` of created_by
        if self.created_by:
            _dict["createdBy"] = self.created_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of modified_by
        if self.modified_by:
            _dict["modifiedBy"] = self.modified_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of links
        if self.links:
            _dict["links"] = self.links.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of BoardWithLinks from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "id": obj.get("id"),
                "name": obj.get("name"),
                "description": obj.get("description"),
                "team": Team.from_dict(obj["team"]) if obj.get("team") is not None else None,
                "project": BoardProject.from_dict(obj["project"]) if obj.get("project") is not None else None,
                "picture": Picture.from_dict(obj["picture"]) if obj.get("picture") is not None else None,
                "policy": BoardPolicy.from_dict(obj["policy"]) if obj.get("policy") is not None else None,
                "viewLink": obj.get("viewLink"),
                "owner": UserInfoShort.from_dict(obj["owner"]) if obj.get("owner") is not None else None,
                "currentUserMembership": (
                    BoardMember.from_dict(obj["currentUserMembership"])
                    if obj.get("currentUserMembership") is not None
                    else None
                ),
                "createdAt": obj.get("createdAt"),
                "createdBy": UserInfoShort.from_dict(obj["createdBy"]) if obj.get("createdBy") is not None else None,
                "modifiedAt": obj.get("modifiedAt"),
                "modifiedBy": UserInfoShort.from_dict(obj["modifiedBy"]) if obj.get("modifiedBy") is not None else None,
                "links": BoardLinks.from_dict(obj["links"]) if obj.get("links") is not None else None,
                "type": obj.get("type"),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
