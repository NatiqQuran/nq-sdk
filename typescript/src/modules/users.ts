import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    UsersListResponseData,
    UsersViewRequestParams,
    UsersViewResponseData,
    UsersAddRequestData,
    UsersAddResponseData,
    UsersEditRequestParams,
    UsersEditRequestData,
    UsersEditResponseData,
    UsersUpdateRequestParams,
    UsersUpdateRequestData,
    UsersUpdateResponseData,
} from "../types/users";
import { BaseController } from "../utils/baseController";

export class ControllerUsers extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /users/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersListResponseData>> {
        return await this.axiosGet(`/users/`, config);
    }

    /** GET /users/{uuid}/ */
    async view(
        params: UsersViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersViewResponseData>> {
        return await this.axiosGet(`/users/${params.uuid}/`, config);
    }

    /** POST /users/ */
    async add(
        data: UsersAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersAddResponseData>> {
        return await this.axiosPost(`/users/`, data, config);
    }

    /** PUT /users/{uuid}/ */
    async edit(
        params: UsersEditRequestParams,
        data: UsersEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersEditResponseData>> {
        return await this.axiosPut(`/users/${params.uuid}/`, data, config);
    }

    /** PATCH /users/{uuid}/ */
    async partialEdit(
        params: UsersUpdateRequestParams,
        data: UsersUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersUpdateResponseData>> {
        return await this.axiosPatch(`/users/${params.uuid}/`, data, config);
    }

    /** DELETE /users/{uuid}/ */
    async delete(
        params: UsersEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/users/${params.uuid}/`, config);
    }
}
