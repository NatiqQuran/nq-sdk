import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    UsersListResponseData,
    UsersViewRequestParams,
    UsersViewResponseData,
    UsersAddRequestData,
    UsersEditRequestParams,
    UsersEditRequestData,
    UsersUpdateRequestParams,
    UsersUpdateRequestData,
} from "../types/users";
import { BaseController } from "../utils/baseController";

export class ControllerPhrase extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Users/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersListResponseData>> {
        return await this.axiosGet(`/users`, config);
    }

    /** GET /Users/{id}/ */
    async view(
        params: UsersViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersViewResponseData>> {
        return await this.axiosGet(`/users/${params.id}`, config);
    }

    /** POST /Users/ */
    async add(
        data: UsersAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/users`, data, config);
    }

    /** PUT /Users/{id}/ */
    async edit(
        params: UsersEditRequestParams,
        data: UsersEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/users/${params.id}`, data, config);
    }

    /** PATCH /Users/{id}/ */
    async partialEdit(
        params: UsersUpdateRequestParams,
        data: UsersUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/users/${params.id}`, data, config);
    }

    /** DELETE /Users/{id}/ */
    async delete(
        params: UsersEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/users/${params.id}`, config);
    }
}
