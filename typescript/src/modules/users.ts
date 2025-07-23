import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    UsersListResponseData,
    UsersViewResponseData,
    UsersAddRequestData,
    UsersAddResponseData,
    UsersEditRequestData,
    UsersEditResponseData,
    UsersPartialEditRequestData,
    UsersPartialEditResponseData,
} from "../types/users";

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
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersViewResponseData>> {
        return await this.axiosGet(`/users/${uuid}/`, config);
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
        uuid: string,
        data: UsersEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersEditResponseData>> {
        return await this.axiosPut(`/users/${uuid}/`, data, config);
    }

    /** PATCH /users/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: UsersPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersPartialEditResponseData>> {
        return await this.axiosPatch(`/users/${uuid}/`, data, config);
    }

    /** DELETE /users/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/users/${uuid}/`, config);
    }
}
