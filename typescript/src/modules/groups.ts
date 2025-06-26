import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    GroupListResponseData,
    GroupViewResponseData,
    GroupAddRequestData,
    GroupUpdateRequestData,
    GroupPartialUpdateRequestData,
} from "../types/groups";
import { BaseController } from "../utils/baseController";

export class ControllerGroup extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupListResponseData>> {
        return await this.axiosGet(`/groups/`, config);
    }

    async view(
        id: number,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupViewResponseData>> {
        return await this.axiosGet(`/groups/${id}/`, config);
    }

    async add(
        data: GroupAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupViewResponseData>> {
        return await this.axiosPost(`/groups/`, data, config);
    }

    async edit(
        id: number,
        data: GroupUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupViewResponseData>> {
        return await this.axiosPut(`/groups/${id}/`, data, config);
    }

    async partialUpdate(
        id: number,
        data: GroupPartialUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<GroupViewResponseData>> {
        return await this.axiosPatch(`/groups/${id}/`, data, config);
    }

    async delete(
        id: number,
        config?: RequestConfig
    ): Promise<AxiosResponse<void>> {
        return await this.axiosDelete(`/groups/${id}/`, config);
    }
}
