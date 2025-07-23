import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    GroupsListResponseData,
    GroupsViewResponseData,
    GroupsAddRequestData,
    GroupsAddResponseData,
    GroupsEditRequestData,
    GroupsEditResponseData,
    GroupsPartialEditRequestData,
    GroupsPartialEditResponseData,
} from "../types/groups";

export class ControllerGroups extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /groups/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsListResponseData>> {
        return await this.axiosGet(`/groups/`, config);
    }

    /** GET /groups/{id}/ */
    async view(
        id: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosGet(`/groups/${id}/`, config);
    }

    /** POST /groups/ */
    async add(
        data: GroupsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsAddResponseData>> {
        return await this.axiosPost(`/groups/`, data, config);
    }

    /** PUT /groups/{id}/ */
    async edit(
        id: string,
        data: GroupsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsEditResponseData>> {
        return await this.axiosPut(`/groups/${id}/`, data, config);
    }

    /** PATCH /groups/{id}/ */
    async partialEdit(
        id: string,
        data: GroupsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsPartialEditResponseData>> {
        return await this.axiosPatch(`/groups/${id}/`, data, config);
    }

    /** DELETE /groups/{id}/ */
    async delete(
        id: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/groups/${id}/`, config);
    }
}
