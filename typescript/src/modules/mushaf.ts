import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import {
    MushafListRequestParameters,
    MushafListResponseData,
    MushafViewResponseData,
    MushafAddRequestData,
} from "../types/mushaf";

export class ControllerMushaf {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<MushafListRequestParameters>
    ): Promise<AxiosResponse<MushafListResponseData>> {
        return await this.conn.axios.get(`/mushaf`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.conn.axios.get(`/mushaf/${target}`, config);
    }

    async add(
        data: MushafAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf`, data, config);
    }

    async edit(
        target: UUID,
        data: MushafAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/mushaf/${target}`, config);
    }
}
