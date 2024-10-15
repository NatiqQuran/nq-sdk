import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    UUID,
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
        target: UUID,
        config: RequestConfig
    ): Promise<AxiosResponse<AyahViewResponseData>> {
        return await this.conn.axios.get(`/ayah/${target}`, config);
    }

    async add(
        data: AyahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah`, data, config);
    }

    async edit(
        target: UUID,
        data: AyahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/ayah/${target}`, config);
    }
}
