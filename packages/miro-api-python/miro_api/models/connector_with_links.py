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
from pydantic import BaseModel, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from miro_api.models.caption import Caption
from miro_api.models.connector_style import ConnectorStyle
from miro_api.models.created_by import CreatedBy
from miro_api.models.item_connection_with_links import ItemConnectionWithLinks
from miro_api.models.modified_by import ModifiedBy
from miro_api.models.self_link import SelfLink
from typing import Optional, Set
from typing_extensions import Self


class ConnectorWithLinks(BaseModel):
    """
    Contains the result data.
    """  # noqa: E501

    captions: Optional[List[Caption]] = Field(
        default=None, description="Blocks of text you want to display on the connector."
    )
    created_at: Optional[datetime] = Field(
        default=None,
        description="Date and time when the connector was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).",
        alias="createdAt",
    )
    created_by: Optional[CreatedBy] = Field(default=None, alias="createdBy")
    end_item: Optional[ItemConnectionWithLinks] = Field(default=None, alias="endItem")
    id: StrictStr = Field(description="Unique identifier (ID) of a connector.")
    is_supported: Optional[StrictBool] = Field(
        default=None,
        description="Indicates whether the connector is supported at the moment. If this parameter returns `false`, we do not support the connector at the moment. We do not allow updates for unsupported connectors and we might not return all data about the connector, such as intermediate points and connection points to the canvas.",
        alias="isSupported",
    )
    links: Optional[SelfLink] = None
    modified_at: Optional[datetime] = Field(
        default=None,
        description="Date and time when the connector was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).",
        alias="modifiedAt",
    )
    modified_by: Optional[ModifiedBy] = Field(default=None, alias="modifiedBy")
    shape: Optional[StrictStr] = Field(
        default="curved", description="The path type of the connector line, defines curvature. Default: curved."
    )
    start_item: Optional[ItemConnectionWithLinks] = Field(default=None, alias="startItem")
    style: Optional[ConnectorStyle] = None
    type: Optional[StrictStr] = Field(default=None, description="Type of board object that is returned.")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = [
        "captions",
        "createdAt",
        "createdBy",
        "endItem",
        "id",
        "isSupported",
        "links",
        "modifiedAt",
        "modifiedBy",
        "shape",
        "startItem",
        "style",
        "type",
    ]

    @field_validator("shape")
    def shape_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["straight", "elbowed", "curved"]):
            raise ValueError("must be one of enum values ('straight', 'elbowed', 'curved')")
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
        """Create an instance of ConnectorWithLinks from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in captions (list)
        _items = []
        if self.captions:
            for _item in self.captions:
                if _item:
                    _items.append(_item.to_dict())
            _dict["captions"] = _items
        # override the default output from pydantic by calling `to_dict()` of created_by
        if self.created_by:
            _dict["createdBy"] = self.created_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of end_item
        if self.end_item:
            _dict["endItem"] = self.end_item.to_dict()
        # override the default output from pydantic by calling `to_dict()` of links
        if self.links:
            _dict["links"] = self.links.to_dict()
        # override the default output from pydantic by calling `to_dict()` of modified_by
        if self.modified_by:
            _dict["modifiedBy"] = self.modified_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of start_item
        if self.start_item:
            _dict["startItem"] = self.start_item.to_dict()
        # override the default output from pydantic by calling `to_dict()` of style
        if self.style:
            _dict["style"] = self.style.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ConnectorWithLinks from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "captions": (
                    [Caption.from_dict(_item) for _item in obj["captions"]] if obj.get("captions") is not None else None
                ),
                "createdAt": obj.get("createdAt"),
                "createdBy": CreatedBy.from_dict(obj["createdBy"]) if obj.get("createdBy") is not None else None,
                "endItem": (
                    ItemConnectionWithLinks.from_dict(obj["endItem"]) if obj.get("endItem") is not None else None
                ),
                "id": obj.get("id"),
                "isSupported": obj.get("isSupported"),
                "links": SelfLink.from_dict(obj["links"]) if obj.get("links") is not None else None,
                "modifiedAt": obj.get("modifiedAt"),
                "modifiedBy": ModifiedBy.from_dict(obj["modifiedBy"]) if obj.get("modifiedBy") is not None else None,
                "shape": obj.get("shape") if obj.get("shape") is not None else "curved",
                "startItem": (
                    ItemConnectionWithLinks.from_dict(obj["startItem"]) if obj.get("startItem") is not None else None
                ),
                "style": ConnectorStyle.from_dict(obj["style"]) if obj.get("style") is not None else None,
                "type": obj.get("type"),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
