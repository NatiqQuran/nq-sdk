import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    GroupsListResponseData,
    GroupsViewRequestParams,
    GroupsViewResponseData,
    GroupsAddRequestData,
    GroupsEditRequestParams,
    GroupsEditRequestData,
    GroupsUpdateRequestParams,
    GroupsUpdateRequestData,
} from "../types/groups";
import { BaseController } from "../utils/baseController";

export class GroupsController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }
    /** GET /Group/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsListResponseData>> {
        return await this.axiosGet(`/groups/`, config);
    }
    /** GET /Group/{id}/ */

    async retrieve(
        params: GroupsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosGet(`/groups/${params.id}/`, config);
    }
    /** POST /Group/ */

    async create(
        data: GroupsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPost(`/groups/`, data, config);
    }
    /** PUT /Group/{id}/ */

    async update(
        params: GroupsEditRequestParams,
        data: GroupsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPut(`/groups/${params.id}/`, data, config);
    }
    /** PATCH /Group/{id}/ */

    async partialUpdate(
        params: GroupsUpdateRequestParams,
        data: GroupsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPatch(`/groups/${params.id}/`, data, config);
    }
    /** DELETE /Group/{id}/ */

    async delete(
        params: GroupsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<void>> {
        return await this.axiosDelete(`/groups/${params.id}/`, config);
    }
}
