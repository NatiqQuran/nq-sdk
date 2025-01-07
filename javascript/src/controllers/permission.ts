import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    PermissionListResponseData,
    PermissionAddRequestData,
    PermissionViewResponseData,
    PermissionEditRequestData,
} from "../interfaces/permission.js";

export class ControllerPermission {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig
    ): Promise<AxiosResponse<PermissionListResponseData>> {
        return await this.conn.axios.get(`/permission`, config);
    }

    async view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<PermissionViewResponseData>> {
        return await this.conn.axios.get(`/permission/${target}`, config);
    }

    async add(
        data: PermissionAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/permission`, data, config);
    }

    async edit(
        target: string,
        data: PermissionEditRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(
            `/permission/${target}`,
            data,
            config
        );
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/permission/${target}`, config);
    }
}
