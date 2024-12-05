import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    PhraseListResponseData,
    PhraseAddRequestData,
    PhraseViewResponseData,
} from "../interfaces/phrase.js";

export class ControllerAyah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<PhraseListResponseData>
    ): Promise<AxiosResponse<PhraseListResponseData[]>> {
        return await this.conn.axios.get(`/phrase`, config);
    }

    async view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<PhraseViewResponseData>> {
        return await this.conn.axios.get(`/phrase/${target}`, config);
    }

    async add(
        data: PhraseAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/phrase`, data, config);
    }

    async edit(
        target: string,
        data: PhraseAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/phrase/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/phrase/${target}`, config);
    }
}
