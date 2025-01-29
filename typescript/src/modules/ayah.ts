import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    UUID,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
import {
    AyahListRequestParams,
    AyahListResponseData,
    AyahViewResponseData,
    AyahAddRequestData,
} from "../types/ayah";

export class ControllerAyah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config?: RequestConfig<AyahListRequestParams>
    ): Promise<AxiosResponse<AyahListResponseData>> {
        return await this.conn.axios.get(`/ayah`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahViewResponseData>> {
        return await this.conn.axios.get(`/ayah/${target}`, config);
    }

    async add(
        data: AyahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah`, data, config);
    }

    async edit(
        target: UUID,
        data: AyahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/ayah/${target}`, config);
    }
}
