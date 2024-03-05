"""
    Miro Developer Platform

    <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0.   # noqa: E501

    The version of the OpenAPI document: v2.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from miro_api.api_client import ApiClient, Endpoint as _Endpoint
from miro_api.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from miro_api.model.add_project_member_request import AddProjectMemberRequest
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.error403 import Error403
from miro_api.model.error404 import Error404
from miro_api.model.error409 import Error409
from miro_api.model.error429 import Error429
from miro_api.model.project_member import ProjectMember
from miro_api.model.project_member_page import ProjectMemberPage
from miro_api.model.update_project_member_request import UpdateProjectMemberRequest


class ProjectMembersApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client
        self.enterprise_add_project_member_endpoint = _Endpoint(
            settings={
                'response_type': (ProjectMember,),
                'auth': [],
                'endpoint_path': '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members',
                'operation_id': 'enterprise_add_project_member',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'add_project_member_request',
                ],
                'required': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'add_project_member_request',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'org_id':
                        (str,),
                    'team_id':
                        (str,),
                    'project_id':
                        (str,),
                    'add_project_member_request':
                        (AddProjectMemberRequest,),
                },
                'attribute_map': {
                    'org_id': 'org_id',
                    'team_id': 'team_id',
                    'project_id': 'project_id',
                },
                'location_map': {
                    'org_id': 'path',
                    'team_id': 'path',
                    'project_id': 'path',
                    'add_project_member_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client
        )
        self.enterprise_delete_project_member_endpoint = _Endpoint(
            settings={
                'response_type': None,
                'auth': [],
                'endpoint_path': '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}',
                'operation_id': 'enterprise_delete_project_member',
                'http_method': 'DELETE',
                'servers': None,
            },
            params_map={
                'all': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                ],
                'required': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'org_id':
                        (str,),
                    'team_id':
                        (str,),
                    'project_id':
                        (str,),
                    'member_id':
                        (str,),
                },
                'attribute_map': {
                    'org_id': 'org_id',
                    'team_id': 'team_id',
                    'project_id': 'project_id',
                    'member_id': 'member_id',
                },
                'location_map': {
                    'org_id': 'path',
                    'team_id': 'path',
                    'project_id': 'path',
                    'member_id': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.enterprise_get_project_member_endpoint = _Endpoint(
            settings={
                'response_type': (ProjectMember,),
                'auth': [],
                'endpoint_path': '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}',
                'operation_id': 'enterprise_get_project_member',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                ],
                'required': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'org_id':
                        (str,),
                    'team_id':
                        (str,),
                    'project_id':
                        (str,),
                    'member_id':
                        (str,),
                },
                'attribute_map': {
                    'org_id': 'org_id',
                    'team_id': 'team_id',
                    'project_id': 'project_id',
                    'member_id': 'member_id',
                },
                'location_map': {
                    'org_id': 'path',
                    'team_id': 'path',
                    'project_id': 'path',
                    'member_id': 'path',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.enterprise_get_project_members_endpoint = _Endpoint(
            settings={
                'response_type': (ProjectMemberPage,),
                'auth': [],
                'endpoint_path': '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members',
                'operation_id': 'enterprise_get_project_members',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'limit',
                    'cursor',
                ],
                'required': [
                    'org_id',
                    'team_id',
                    'project_id',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                    'limit',
                ]
            },
            root_map={
                'validations': {
                    ('limit',): {

                        'inclusive_maximum': 100,
                        'inclusive_minimum': 1,
                    },
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'org_id':
                        (str,),
                    'team_id':
                        (str,),
                    'project_id':
                        (str,),
                    'limit':
                        (int,),
                    'cursor':
                        (str,),
                },
                'attribute_map': {
                    'org_id': 'org_id',
                    'team_id': 'team_id',
                    'project_id': 'project_id',
                    'limit': 'limit',
                    'cursor': 'cursor',
                },
                'location_map': {
                    'org_id': 'path',
                    'team_id': 'path',
                    'project_id': 'path',
                    'limit': 'query',
                    'cursor': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client
        )
        self.enterprise_update_project_member_endpoint = _Endpoint(
            settings={
                'response_type': (ProjectMember,),
                'auth': [],
                'endpoint_path': '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}',
                'operation_id': 'enterprise_update_project_member',
                'http_method': 'PATCH',
                'servers': None,
            },
            params_map={
                'all': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                    'update_project_member_request',
                ],
                'required': [
                    'org_id',
                    'team_id',
                    'project_id',
                    'member_id',
                    'update_project_member_request',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'org_id':
                        (str,),
                    'team_id':
                        (str,),
                    'project_id':
                        (str,),
                    'member_id':
                        (str,),
                    'update_project_member_request':
                        (UpdateProjectMemberRequest,),
                },
                'attribute_map': {
                    'org_id': 'org_id',
                    'team_id': 'team_id',
                    'project_id': 'project_id',
                    'member_id': 'member_id',
                },
                'location_map': {
                    'org_id': 'path',
                    'team_id': 'path',
                    'project_id': 'path',
                    'member_id': 'path',
                    'update_project_member_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client
        )

    def enterprise_add_project_member(
        self,
        org_id,
        team_id,
        project_id,
        add_project_member_request,
        **kwargs
    ):
        """Add member in a project  # noqa: E501

        Add a Miro user to a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.enterprise_add_project_member(org_id, team_id, project_id, add_project_member_request, async_req=True)
        >>> result = thread.get()

        Args:
            org_id (str): The ID of the organization to which the project belongs.
            team_id (str): The ID of the team to which the project belongs.
            project_id (str): The ID of the project to which you want to add a user.
            add_project_member_request (AddProjectMemberRequest):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ProjectMember
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['org_id'] = \
            org_id
        kwargs['team_id'] = \
            team_id
        kwargs['project_id'] = \
            project_id
        kwargs['add_project_member_request'] = \
            add_project_member_request
        return self.enterprise_add_project_member_endpoint.call_with_http_info(**kwargs)

    def enterprise_delete_project_member(
        self,
        org_id,
        team_id,
        project_id,
        member_id,
        **kwargs
    ):
        """Remove project member  # noqa: E501

        Remove a member from a project. The user remains in the team even after the member is removed from a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.enterprise_delete_project_member(org_id, team_id, project_id, member_id, async_req=True)
        >>> result = thread.get()

        Args:
            org_id (str): The ID of the organization to which the project belongs.
            team_id (str): The ID of the team to which the project belongs.
            project_id (str): The ID of the project from which you want to remove a member.
            member_id (str): The ID of the member that you want to remove from a project.

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            None
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['org_id'] = \
            org_id
        kwargs['team_id'] = \
            team_id
        kwargs['project_id'] = \
            project_id
        kwargs['member_id'] = \
            member_id
        return self.enterprise_delete_project_member_endpoint.call_with_http_info(**kwargs)

    def enterprise_get_project_member(
        self,
        org_id,
        team_id,
        project_id,
        member_id,
        **kwargs
    ):
        """Get project member  # noqa: E501

        Retrieves information for a specific project member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.enterprise_get_project_member(org_id, team_id, project_id, member_id, async_req=True)
        >>> result = thread.get()

        Args:
            org_id (str): The ID of the organization to which the project belongs.
            team_id (str): The ID of the team to which the project belongs.
            project_id (str): The ID of the project from which you want to retrieve specific member information.
            member_id (str): The ID of the member for which you want to retrieve information.

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ProjectMember
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['org_id'] = \
            org_id
        kwargs['team_id'] = \
            team_id
        kwargs['project_id'] = \
            project_id
        kwargs['member_id'] = \
            member_id
        return self.enterprise_get_project_member_endpoint.call_with_http_info(**kwargs)

    def enterprise_get_project_members(
        self,
        org_id,
        team_id,
        project_id,
        **kwargs
    ):
        """List of project members  # noqa: E501

        Retrieves the list of members for a specific project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.enterprise_get_project_members(org_id, team_id, project_id, async_req=True)
        >>> result = thread.get()

        Args:
            org_id (str): The ID of the organization to which the project belongs.
            team_id (str): The ID of the team to which the project belongs.
            project_id (str): The ID of the project for which you want to retrieve the list of members.

        Keyword Args:
            limit (int): The maximum number of results to return per call. If the number of project members in the response is greater than the limit specified, the response returns the cursor parameter with a value.. [optional] if omitted the server will use the default value of 100
            cursor (str): An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.. [optional]
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ProjectMemberPage
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['org_id'] = \
            org_id
        kwargs['team_id'] = \
            team_id
        kwargs['project_id'] = \
            project_id
        return self.enterprise_get_project_members_endpoint.call_with_http_info(**kwargs)

    def enterprise_update_project_member(
        self,
        org_id,
        team_id,
        project_id,
        member_id,
        update_project_member_request,
        **kwargs
    ):
        """Update project member  # noqa: E501

        Updates details of a project member, such as the member's role.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True

        >>> thread = api.enterprise_update_project_member(org_id, team_id, project_id, member_id, update_project_member_request, async_req=True)
        >>> result = thread.get()

        Args:
            org_id (str): The ID of the organization to which the project member belongs.
            team_id (str): The ID of the team to which the project member belongs.
            project_id (str): The ID of a Project.
            member_id (str): The ID of the member whose details you want to update.
            update_project_member_request (UpdateProjectMemberRequest):

        Keyword Args:
            _return_http_data_only (bool): response data without head status
                code and headers. Default is True.
            _preload_content (bool): if False, the urllib3.HTTPResponse object
                will be returned without reading/decoding response data.
                Default is True.
            _request_timeout (int/float/tuple): timeout setting for this request. If
                one number provided, it will be total request timeout. It can also
                be a pair (tuple) of (connection, read) timeouts.
                Default is None.
            _check_input_type (bool): specifies if type checking
                should be done one the data sent to the server.
                Default is True.
            _check_return_type (bool): specifies if type checking
                should be done one the data received from the server.
                Default is True.
            _spec_property_naming (bool): True if the variable names in the input data
                are serialized names, as specified in the OpenAPI document.
                False if the variable names in the input data
                are pythonic names, e.g. snake case (default)
            _content_type (str/None): force body content-type.
                Default is None and content-type will be predicted by allowed
                content-types and body.
            _host_index (int/None): specifies the index of the server
                that we want to use.
                Default is read from the configuration.
            _request_auths (list): set to override the auth_settings for an a single
                request; this effectively ignores the authentication
                in the spec for a single request.
                Default is None
            async_req (bool): execute request asynchronously

        Returns:
            ProjectMember
                If the method is called asynchronously, returns the request
                thread.
        """
        kwargs['async_req'] = kwargs.get(
            'async_req', False
        )
        kwargs['_return_http_data_only'] = kwargs.get(
            '_return_http_data_only', True
        )
        kwargs['_preload_content'] = kwargs.get(
            '_preload_content', True
        )
        kwargs['_request_timeout'] = kwargs.get(
            '_request_timeout', None
        )
        kwargs['_check_input_type'] = kwargs.get(
            '_check_input_type', True
        )
        kwargs['_check_return_type'] = kwargs.get(
            '_check_return_type', True
        )
        kwargs['_spec_property_naming'] = kwargs.get(
            '_spec_property_naming', False
        )
        kwargs['_content_type'] = kwargs.get(
            '_content_type')
        kwargs['_host_index'] = kwargs.get('_host_index')
        kwargs['_request_auths'] = kwargs.get('_request_auths', None)
        kwargs['org_id'] = \
            org_id
        kwargs['team_id'] = \
            team_id
        kwargs['project_id'] = \
            project_id
        kwargs['member_id'] = \
            member_id
        kwargs['update_project_member_request'] = \
            update_project_member_request
        return self.enterprise_update_project_member_endpoint.call_with_http_info(**kwargs)

