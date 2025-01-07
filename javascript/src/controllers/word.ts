import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    WordAddRequestData,
    WordViewResponseData,
} from "../interfaces/word.js";

export class ControllerWord {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<WordViewResponseData>> {
        return await this.conn.axios.get(`/word/${target}`, config);
    }

    async edit(
        target: string,
        data: WordAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/word/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/word/${target}`, config);
    }
}
