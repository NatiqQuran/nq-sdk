import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    MushafListParams,
    MushafListResponseData,
    MushafViewRequestData,
    MushafViewResponseData,
} from "../interfaces/mushaf.js";

export class ControllerMushaf {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<MushafListParams>
    ): Promise<AxiosResponse<MushafListResponseData>> {
        return await this.conn.axios.get(`/mushaf`, config);
    }

    async view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.conn.axios.get(`/mushaf/${target}`, config);
    }

    async add(
        data: MushafViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf`, data, config);
    }

    async edit(
        target: string,
        data: MushafViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/mushaf/${target}`, config);
    }
}
