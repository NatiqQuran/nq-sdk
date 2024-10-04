import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import { RequestConfig } from "../utils";
import { ErrorProps } from "../interfaces/error";
import {
    MushafListParam,
    MushafPlain,
    MushafViewProps,
} from "../interfaces/mushaf";

export class ControllerMushaf {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<MushafListParam>
    ): Promise<AxiosResponse<MushafViewProps[]>> {
        return await this.conn.axios.get(`/mushaf`, config);
    }

    async view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<MushafViewProps>> {
        return await this.conn.axios.get(`/mushaf/${target}`, config);
    }

    async add(
        data: MushafPlain,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.conn.axios.post(`/mushaf`, data, config);
    }

    async edit(
        target: string,
        data: MushafPlain,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.conn.axios.post(`/mushaf/${target}`, data, config);
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.conn.axios.delete(`/mushaf/${target}`, config);
    }
}
