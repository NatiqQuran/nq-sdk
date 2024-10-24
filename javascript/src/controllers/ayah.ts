import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    AyahListParams,
    AyahListResponseData,
    AyahViewResponseData,
    AyahAddRequestData,
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
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<AyahViewResponseData>> {
        return await this.conn.axios.get(`/ayah/${target}`, config);
    }

    async add(
        data: AyahAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah`, data, config);
    }

    async edit(
        target: string,
        data: AyahAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/ayah/${target}`, config);
    }
}
