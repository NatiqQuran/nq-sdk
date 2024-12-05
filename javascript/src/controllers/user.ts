import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    UserListItem,
    UserAddRequestData,
    UserListResponseData,
} from "../interfaces/user.js";

export class ControllerAyah {
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
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<UserListItem>> {
        return await this.conn.axios.get(`/user/${target}`, config);
    }
    async edit(
        target: string,
        data: UserAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/user/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/user/${target}`, config);
    }
}
