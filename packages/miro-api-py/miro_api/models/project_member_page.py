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

from pydantic import BaseModel, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from miro_api.models.project_member import ProjectMember
from typing import Optional, Set
from typing_extensions import Self

class ProjectMemberPage(BaseModel):
    """
    ProjectMemberPage
    """ # noqa: E501
    limit: Annotated[int, Field(le=100, strict=True, ge=1)] = Field(description="The maximum number of results to return per call. If the number of project member in the response is greater than the limit specified, the response returns the cursor parameter with a value.")
    size: Annotated[int, Field(le=100, strict=True, ge=0)] = Field(description="Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.")
    data: List[ProjectMember] = Field(description="Contains the result data.")
    cursor: Optional[StrictStr] = Field(default=None, description="Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.")
    type: Optional[StrictStr] = Field(default='cursor-list', description="Type of the object returned.")
    __properties: ClassVar[List[str]] = ["limit", "size", "data", "cursor", "type"]

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
        """Create an instance of ProjectMemberPage from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in data (list)
        _items = []
        if self.data:
            for _item in self.data:
                if _item:
                    _items.append(_item.to_dict())
            _dict['data'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProjectMemberPage from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "limit": obj.get("limit") if obj.get("limit") is not None else 100,
            "size": obj.get("size") if obj.get("size") is not None else 100,
            "data": [ProjectMember.from_dict(_item) for _item in obj["data"]] if obj.get("data") is not None else None,
            "cursor": obj.get("cursor"),
            "type": obj.get("type") if obj.get("type") is not None else 'cursor-list'
        })
        return _obj


