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

export class GroupsController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /groups/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsListResponseData>> {
        return await this.axiosGet(`/groups/`, config);
    }

    /** GET /groups/{uuid}/ */
    async retrieve(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsViewResponseData>> {
        return await this.axiosGet(`/groups/${uuid}/`, config);
    }

    /** POST /groups/ */
    async create(
        data: GroupsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsAddResponseData>> {
        return await this.axiosPost(`/groups/`, data, config);
    }

    /** PUT /groups/{uuid}/ */
    async update(
        uuid: string,
        data: GroupsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsEditResponseData>> {
        return await this.axiosPut(`/groups/${uuid}/`, data, config);
    }

    /** PATCH /groups/{uuid}/ */
    async partialUpdate(
        uuid: string,
        data: GroupsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupsPartialEditResponseData>> {
        return await this.axiosPatch(`/groups/${uuid}/`, data, config);
    }

    /** DELETE /groups/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/groups/${uuid}/`, config);
    }
}
