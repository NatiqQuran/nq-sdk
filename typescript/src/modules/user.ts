import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import { UserAddRequestData, UserListResponseData } from "../types/user";

export class ControllerUser {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig
    ): Promise<AxiosResponse<UserListResponseData>> {
        return await this.conn.axios.get(`/user`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<UserListResponseData>> {
        return await this.conn.axios.get(`/user/${target}`, config);
    }
    async edit(
        target: UUID,
        data: UserAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/user/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/user/${target}`, config);
    }
}
