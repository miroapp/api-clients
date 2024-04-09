# coding: utf-8

"""
    Miro Developer Platform

    <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0. 

    The version of the OpenAPI document: v2.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
import pprint
from pydantic import BaseModel, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from miro_api.models.app_card_data_response import AppCardDataResponse
from miro_api.models.card_data import CardData
from miro_api.models.document_data_response import DocumentDataResponse
from miro_api.models.embed_data_response import EmbedDataResponse
from miro_api.models.image_data_response import ImageDataResponse
from miro_api.models.shape_data import ShapeData
from miro_api.models.sticky_note_data import StickyNoteData
from miro_api.models.text_data import TextData
from pydantic import StrictStr, Field
from typing import Union, List, Optional, Dict
from typing_extensions import Literal, Self

ITEMDATA_ONE_OF_SCHEMAS = [
    "AppCardDataResponse",
    "CardData",
    "DocumentDataResponse",
    "EmbedDataResponse",
    "ImageDataResponse",
    "ShapeData",
    "StickyNoteData",
    "TextData",
]


class ItemData(BaseModel):
    """
    Contains information about item-specific data.
    """

    # data type: AppCardDataResponse
    oneof_schema_1_validator: Optional[AppCardDataResponse] = None
    # data type: CardData
    oneof_schema_2_validator: Optional[CardData] = None
    # data type: DocumentDataResponse
    oneof_schema_3_validator: Optional[DocumentDataResponse] = None
    # data type: EmbedDataResponse
    oneof_schema_4_validator: Optional[EmbedDataResponse] = None
    # data type: ImageDataResponse
    oneof_schema_5_validator: Optional[ImageDataResponse] = None
    # data type: ShapeData
    oneof_schema_6_validator: Optional[ShapeData] = None
    # data type: StickyNoteData
    oneof_schema_7_validator: Optional[StickyNoteData] = None
    # data type: TextData
    oneof_schema_8_validator: Optional[TextData] = None
    actual_instance: Optional[
        Union[
            AppCardDataResponse,
            CardData,
            DocumentDataResponse,
            EmbedDataResponse,
            ImageDataResponse,
            ShapeData,
            StickyNoteData,
            TextData,
        ]
    ] = None
    one_of_schemas: List[str] = Field(
        default=Literal[
            "AppCardDataResponse",
            "CardData",
            "DocumentDataResponse",
            "EmbedDataResponse",
            "ImageDataResponse",
            "ShapeData",
            "StickyNoteData",
            "TextData",
        ]
    )

    model_config = {
        "validate_assignment": True,
        "protected_namespaces": (),
    }

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError(
                    "If a position argument is used, only 1 is allowed to set `actual_instance`"
                )
            if kwargs:
                raise ValueError(
                    "If a position argument is used, keyword arguments cannot be used."
                )
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    def __getattr__(self, attr: str):
        return getattr(self.actual_instance, attr)

    @field_validator("actual_instance")
    def actual_instance_must_validate_oneof(cls, v):
        instance = ItemData.model_construct()
        error_messages = []
        match = 0
        # validate data type: AppCardDataResponse
        if not isinstance(v, AppCardDataResponse):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `AppCardDataResponse`"
            )
        else:
            match += 1
        # validate data type: CardData
        if not isinstance(v, CardData):
            error_messages.append(f"Error! Input type `{type(v)}` is not `CardData`")
        else:
            match += 1
        # validate data type: DocumentDataResponse
        if not isinstance(v, DocumentDataResponse):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `DocumentDataResponse`"
            )
        else:
            match += 1
        # validate data type: EmbedDataResponse
        if not isinstance(v, EmbedDataResponse):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `EmbedDataResponse`"
            )
        else:
            match += 1
        # validate data type: ImageDataResponse
        if not isinstance(v, ImageDataResponse):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `ImageDataResponse`"
            )
        else:
            match += 1
        # validate data type: ShapeData
        if not isinstance(v, ShapeData):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ShapeData`")
        else:
            match += 1
        # validate data type: StickyNoteData
        if not isinstance(v, StickyNoteData):
            error_messages.append(
                f"Error! Input type `{type(v)}` is not `StickyNoteData`"
            )
        else:
            match += 1
        # validate data type: TextData
        if not isinstance(v, TextData):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TextData`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError(
                "Multiple matches found when setting `actual_instance` in ItemData with oneOf schemas: AppCardDataResponse, CardData, DocumentDataResponse, EmbedDataResponse, ImageDataResponse, ShapeData, StickyNoteData, TextData. Details: "
                + ", ".join(error_messages)
            )
        elif match == 0:
            # no match
            raise ValueError(
                "No match found when setting `actual_instance` in ItemData with oneOf schemas: AppCardDataResponse, CardData, DocumentDataResponse, EmbedDataResponse, ImageDataResponse, ShapeData, StickyNoteData, TextData. Details: "
                + ", ".join(error_messages)
            )
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Union[
        AppCardDataResponse,
        CardData,
        DocumentDataResponse,
        EmbedDataResponse,
        ImageDataResponse,
        ShapeData,
        StickyNoteData,
        TextData,
    ]:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        matches = []

        # deserialize data into AppCardDataResponse
        try:
            instance.actual_instance = AppCardDataResponse.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into CardData
        try:
            instance.actual_instance = CardData.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into DocumentDataResponse
        try:
            instance.actual_instance = DocumentDataResponse.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into EmbedDataResponse
        try:
            instance.actual_instance = EmbedDataResponse.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ImageDataResponse
        try:
            instance.actual_instance = ImageDataResponse.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ShapeData
        try:
            instance.actual_instance = ShapeData.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into StickyNoteData
        try:
            instance.actual_instance = StickyNoteData.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TextData
        try:
            instance.actual_instance = TextData.from_json(json_str)
            matches.append(instance.actual_instance)
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if not matches:
            # no match
            raise ValueError(
                "No match found when deserializing the JSON string into ItemData with oneOf schemas: AppCardDataResponse, CardData, DocumentDataResponse, EmbedDataResponse, ImageDataResponse, ShapeData, StickyNoteData, TextData. Details: "
                + ", ".join(error_messages)
            )

        # Return one match that has least additional_properties
        if len(matches) > 1:
            instance.actual_instance = sorted(
                matches, key=lambda m: len(m.additional_properties)
            )[0]

        return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(
            self.actual_instance.to_json
        ):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(
        self,
    ) -> Optional[
        Union[
            Dict[str, Any],
            AppCardDataResponse,
            CardData,
            DocumentDataResponse,
            EmbedDataResponse,
            ImageDataResponse,
            ShapeData,
            StickyNoteData,
            TextData,
        ]
    ]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(
            self.actual_instance.to_dict
        ):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())
