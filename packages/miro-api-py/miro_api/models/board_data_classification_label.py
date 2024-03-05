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
from typing import Optional, Set
from typing_extensions import Self

class BoardDataClassificationLabel(BaseModel):
    """
    BoardDataClassificationLabel
    """ # noqa: E501
    color: Optional[StrictStr] = Field(default=None, description="Label color.")
    description: Optional[StrictStr] = Field(default=None, description="Label description.")
    id: Optional[StrictStr] = Field(default=None, description="Label id.")
    name: Optional[StrictStr] = Field(default=None, description="Label name.")
    sharing_recommendation: Optional[StrictStr] = Field(default=None, description="Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ).", alias="sharingRecommendation")
    guideline_url: Optional[StrictStr] = Field(default=None, description="Indicates the URL for the board classification label guidelines.", alias="guidelineUrl")
    type: Optional[StrictStr] = Field(default='board-data-classification-label', description="Type of the object returned.")
    __properties: ClassVar[List[str]] = ["color", "description", "id", "name", "sharingRecommendation", "guidelineUrl", "type"]

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
        """Create an instance of BoardDataClassificationLabel from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of BoardDataClassificationLabel from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "color": obj.get("color"),
            "description": obj.get("description"),
            "id": obj.get("id"),
            "name": obj.get("name"),
            "sharingRecommendation": obj.get("sharingRecommendation"),
            "guidelineUrl": obj.get("guidelineUrl"),
            "type": obj.get("type") if obj.get("type") is not None else 'board-data-classification-label'
        })
        return _obj


