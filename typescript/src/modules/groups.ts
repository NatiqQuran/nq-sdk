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

export class ControllerGroups extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }
    /** GET /Groups/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsListResponseData>> {
        return await this.axiosGet(`/groups/`, config);
    }
    /** GET /Groups/{id}/ */

    async view(
        params: GroupsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosGet(`/groups/${params.id}/`, config);
    }
    /** POST /Groups/ */

    async add(
        data: GroupsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPost(`/groups/`, data, config);
    }
    /** PUT /Groups/{id}/ */

    async edit(
        params: GroupsEditRequestParams,
        data: GroupsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPut(`/groups/${params.id}/`, data, config);
    }
    /** PATCH /Groups/{id}/ */

    async partialEdit(
        params: GroupsUpdateRequestParams,
        data: GroupsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosPatch(`/groups/${params.id}/`, data, config);
    }
    /** DELETE /Groups/{id}/ */

    async delete(
        params: GroupsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<void>> {
        return await this.axiosDelete(`/groups/${params.id}/`, config);
    }
}
