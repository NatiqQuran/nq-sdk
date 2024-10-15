import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    Token,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    AyahListParams,
    AyahListResponseData,
    AyahViewResponseData,
    AyahViewRequestData,
} from "../interfaces/ayah.js";

export class ControllerAyah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<AyahListParams>
    ): Promise<AxiosResponse<AyahListResponseData>> {
        return await this.conn.axios.get(`/ayah`, config);
    }

    async view(
        config: RequestConfig
    ): Promise<AxiosResponse<AyahViewResponseData>> {
        return await this.conn.axios.get(`/ayah/`, config);
    }

    async add(
        target: Token,
        data: AyahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }

    async edit(
        target: Token,
        data: AyahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }

    async delete(
        target: Token,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/ayah/${target}`, config);
    }
}
