import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    PermissionListResponseData,
    PermissionViewResponseData,
    PermissionAddRequestData,
} from "../types/permission";

export class ControllerPermission {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PermissionListResponseData>> {
        return await this.conn.axios.get(`/permission`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<PermissionViewResponseData>> {
        return await this.conn.axios.get(`/permission/${target}`, config);
    }

    async add(
        data: PermissionAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/permission`, data, config);
    }

    async edit(
        target: UUID,
        data: PermissionAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(
            `/permission/${target}`,
            data,
            config
        );
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/permission/${target}`, config);
    }
}
