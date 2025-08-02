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

export class UsersController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /User/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersListResponseData>> {
        return await this.axiosGet(`/users/`, config);
    }


    /** GET /User/{id}/ */
    async retrieve(
        params: UsersViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<UsersViewResponseData>> {
        return await this.axiosGet(`/users/${params.id}/`, config);
    }


    /** POST /User/ */
    async create(
        data: UsersAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/users/`, data, config);
    }


    /** PUT /User/{id}/ */
    async update(
        params: UsersEditRequestParams,
        data: UsersEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/users/${params.id}/`, data, config);
    }


    /** PATCH /User/{id}/ */
    async partialUpdate(
        params: UsersUpdateRequestParams,
        data: UsersUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/users/${params.id}/`, data, config);
    }

    /** DELETE /User/{id}/ */
    async delete(
        params: UsersEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/users/${params.id}/`, config);
    }
}
