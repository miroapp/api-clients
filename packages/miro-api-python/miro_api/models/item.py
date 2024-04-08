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
from pydantic import BaseModel, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from miro_api.models.created_by import CreatedBy
from miro_api.models.geometry import Geometry
from miro_api.models.item_data import ItemData
from miro_api.models.item_style import ItemStyle
from miro_api.models.modified_by import ModifiedBy
from miro_api.models.parent_with_links import ParentWithLinks
from miro_api.models.position import Position
from miro_api.models.self_link import SelfLink
from typing import Optional, Set
from typing_extensions import Self

class Item(BaseModel):
    """
    Contains information about an item.
    """ # noqa: E501
    id: StrictStr = Field(description="Unique identifier (ID) of an item.")
    data: Optional[ItemData] = None
    style: Optional[ItemStyle] = None
    position: Optional[Position] = None
    geometry: Optional[Geometry] = None
    parent: Optional[ParentWithLinks] = None
    is_supported: Optional[StrictBool] = Field(default=None, alias="isSupported")
    created_by: Optional[CreatedBy] = Field(default=None, alias="createdBy")
    created_at: Optional[datetime] = Field(default=None, description="Date and time when the item was created. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).", alias="createdAt")
    modified_by: Optional[ModifiedBy] = Field(default=None, alias="modifiedBy")
    modified_at: Optional[datetime] = Field(default=None, description="Date and time when the item was last modified. <br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).", alias="modifiedAt")
    links: SelfLink
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["id", "data", "style", "position", "geometry", "parent", "isSupported", "createdBy", "createdAt", "modifiedBy", "modifiedAt", "links"]

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
        """Create an instance of Item from a JSON string"""
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
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of data
        if self.data:
            _dict['data'] = self.data.to_dict()
        # override the default output from pydantic by calling `to_dict()` of style
        if self.style:
            _dict['style'] = self.style.to_dict()
        # override the default output from pydantic by calling `to_dict()` of position
        if self.position:
            _dict['position'] = self.position.to_dict()
        # override the default output from pydantic by calling `to_dict()` of geometry
        if self.geometry:
            _dict['geometry'] = self.geometry.to_dict()
        # override the default output from pydantic by calling `to_dict()` of parent
        if self.parent:
            _dict['parent'] = self.parent.to_dict()
        # override the default output from pydantic by calling `to_dict()` of created_by
        if self.created_by:
            _dict['createdBy'] = self.created_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of modified_by
        if self.modified_by:
            _dict['modifiedBy'] = self.modified_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of links
        if self.links:
            _dict['links'] = self.links.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Item from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "data": ItemData.from_dict(obj["data"]) if obj.get("data") is not None else None,
            "style": ItemStyle.from_dict(obj["style"]) if obj.get("style") is not None else None,
            "position": Position.from_dict(obj["position"]) if obj.get("position") is not None else None,
            "geometry": Geometry.from_dict(obj["geometry"]) if obj.get("geometry") is not None else None,
            "parent": ParentWithLinks.from_dict(obj["parent"]) if obj.get("parent") is not None else None,
            "isSupported": obj.get("isSupported"),
            "createdBy": CreatedBy.from_dict(obj["createdBy"]) if obj.get("createdBy") is not None else None,
            "createdAt": obj.get("createdAt"),
            "modifiedBy": ModifiedBy.from_dict(obj["modifiedBy"]) if obj.get("modifiedBy") is not None else None,
            "modifiedAt": obj.get("modifiedAt"),
            "links": SelfLink.from_dict(obj["links"]) if obj.get("links") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj

