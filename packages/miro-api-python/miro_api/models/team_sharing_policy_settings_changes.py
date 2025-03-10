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

from pydantic import BaseModel, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self


class TeamSharingPolicySettingsChanges(BaseModel):
    """
    Team sharing policy settings
    """  # noqa: E501

    allow_listed_domains: Optional[List[StrictStr]] = Field(
        default=None, description="Allow listed domains", alias="allowListedDomains"
    )
    create_asset_access_level: Optional[StrictStr] = Field(
        default=None,
        description=' * "company_admins": Only company admins can create assets in a team * "admins": Both team and company admins can create assets in a team. * "all_members": all_members ',
        alias="createAssetAccessLevel",
    )
    default_board_access: Optional[StrictStr] = Field(
        default=None,
        description=' Default board access * "private": Only board owners can access * "view":    Anyone in the team can view * "comment": Anyone in the team can comment * "edit":    Anyone in the team can edit ',
        alias="defaultBoardAccess",
    )
    default_board_sharing_access: Optional[StrictStr] = Field(
        default="team_members_with_editing_rights",
        description=' Indicates who can change board access and invite users to boards in this team, by default. * "team_members_with_editing_rights": Any team member with editing rights on the board. * "owner_and_coowners":               Only the owner and co-owners of the board. ',
        alias="defaultBoardSharingAccess",
    )
    default_organization_access: Optional[StrictStr] = Field(
        default=None,
        description=' Default organization access * "private": Only board owners can access * "view":    Anyone in the team can view * "comment": Anyone in the team can comment * "edit":    Anyone in the team can edit ',
        alias="defaultOrganizationAccess",
    )
    default_project_access: Optional[StrictStr] = Field(
        default=None,
        description=' Default project access * "private": Only board owners can access * "view":    Anyone in the team can view ',
        alias="defaultProjectAccess",
    )
    move_board_to_account: Optional[StrictStr] = Field(
        default=None,
        description=' * "allowed": Allow move board to team * "not_allowed": Not allow move board to team ',
        alias="moveBoardToAccount",
    )
    restrict_allowed_domains: Optional[StrictStr] = Field(
        default=None,
        description=' * "enabled": Enabled. Restrict to listed domain. * "disabled": Disabled. No domain restriction. * "enabled_with_external_users_access": Enabled. Restrict to listed domain but allows external users to access. ',
        alias="restrictAllowedDomains",
    )
    sharing_on_account: Optional[StrictStr] = Field(
        default=None,
        description=' * "allowed": Allow sharing on team * "not_allowed": Not allow sharing on team ',
        alias="sharingOnAccount",
    )
    sharing_on_organization: Optional[StrictStr] = Field(
        default=None,
        description=' * "allowed": Allow sharing on organization * "allowed_with_editing": Allow sharing with editing on organization * "not_allowed": Not allow sharing on organization ',
        alias="sharingOnOrganization",
    )
    sharing_via_public_link: Optional[StrictStr] = Field(
        default=None,
        description=' * "allowed": Allow sharing via public link * "allowed_with_editing": Allow sharing with editing via public link * "not_allowed": Not allow sharing via public link ',
        alias="sharingViaPublicLink",
    )
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = [
        "allowListedDomains",
        "createAssetAccessLevel",
        "defaultBoardAccess",
        "defaultBoardSharingAccess",
        "defaultOrganizationAccess",
        "defaultProjectAccess",
        "moveBoardToAccount",
        "restrictAllowedDomains",
        "sharingOnAccount",
        "sharingOnOrganization",
        "sharingViaPublicLink",
    ]

    @field_validator("create_asset_access_level")
    def create_asset_access_level_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["company_admins", "admins", "all_members"]):
            raise ValueError("must be one of enum values ('company_admins', 'admins', 'all_members')")
        return value

    @field_validator("default_board_access")
    def default_board_access_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["private", "view", "comment", "edit"]):
            raise ValueError("must be one of enum values ('private', 'view', 'comment', 'edit')")
        return value

    @field_validator("default_board_sharing_access")
    def default_board_sharing_access_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["team_members_with_editing_rights", "owner_and_coowners"]):
            raise ValueError("must be one of enum values ('team_members_with_editing_rights', 'owner_and_coowners')")
        return value

    @field_validator("default_organization_access")
    def default_organization_access_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["private", "view", "comment", "edit"]):
            raise ValueError("must be one of enum values ('private', 'view', 'comment', 'edit')")
        return value

    @field_validator("default_project_access")
    def default_project_access_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["private", "view"]):
            raise ValueError("must be one of enum values ('private', 'view')")
        return value

    @field_validator("move_board_to_account")
    def move_board_to_account_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["allowed", "not_allowed"]):
            raise ValueError("must be one of enum values ('allowed', 'not_allowed')")
        return value

    @field_validator("restrict_allowed_domains")
    def restrict_allowed_domains_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["enabled", "enabled_with_external_user_access", "disabled"]):
            raise ValueError("must be one of enum values ('enabled', 'enabled_with_external_user_access', 'disabled')")
        return value

    @field_validator("sharing_on_account")
    def sharing_on_account_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["allowed", "not_allowed"]):
            raise ValueError("must be one of enum values ('allowed', 'not_allowed')")
        return value

    @field_validator("sharing_on_organization")
    def sharing_on_organization_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["allowed", "allowed_with_editing", "not_allowed"]):
            raise ValueError("must be one of enum values ('allowed', 'allowed_with_editing', 'not_allowed')")
        return value

    @field_validator("sharing_via_public_link")
    def sharing_via_public_link_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["allowed", "allowed_with_editing", "not_allowed"]):
            raise ValueError("must be one of enum values ('allowed', 'allowed_with_editing', 'not_allowed')")
        return value

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
        """Create an instance of TeamSharingPolicySettingsChanges from a JSON string"""
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
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TeamSharingPolicySettingsChanges from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "allowListedDomains": obj.get("allowListedDomains"),
                "createAssetAccessLevel": obj.get("createAssetAccessLevel"),
                "defaultBoardAccess": obj.get("defaultBoardAccess"),
                "defaultBoardSharingAccess": (
                    obj.get("defaultBoardSharingAccess")
                    if obj.get("defaultBoardSharingAccess") is not None
                    else "team_members_with_editing_rights"
                ),
                "defaultOrganizationAccess": obj.get("defaultOrganizationAccess"),
                "defaultProjectAccess": obj.get("defaultProjectAccess"),
                "moveBoardToAccount": obj.get("moveBoardToAccount"),
                "restrictAllowedDomains": obj.get("restrictAllowedDomains"),
                "sharingOnAccount": obj.get("sharingOnAccount"),
                "sharingOnOrganization": obj.get("sharingOnOrganization"),
                "sharingViaPublicLink": obj.get("sharingViaPublicLink"),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
