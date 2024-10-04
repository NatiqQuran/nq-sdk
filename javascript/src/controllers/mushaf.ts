import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import {
    ListRequestConfig,
    ViewRequestConfig,
    AddRequestConfig,
    EditRequestConfig,
    DeleteRequestConfig,
} from "../utils";
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
        config: ListRequestConfig<MushafListParam>
    ): Promise<AxiosResponse<MushafViewProps[]>> {
        return await this.conn.axios.get(`/mushaf`, config);
    }

    async view(
        config: ViewRequestConfig
    ): Promise<AxiosResponse<MushafViewProps>> {
        return await this.conn.axios.get(`/mushaf/${config.uuid}`, config);
    }

    async add(
        config: AddRequestConfig<MushafPlain>
    ): Promise<AxiosResponse<string>> {
        return await this.conn.axios.post(`/mushaf`, config.data, config);
    }

    async edit(
        config: EditRequestConfig<MushafPlain>
    ): Promise<AxiosResponse<string>> {
        return await this.conn.axios.post(
            `/mushaf/${config.uuid}`,
            config.data,
            config
        );
    }

    async delete(config: DeleteRequestConfig): Promise<AxiosResponse<string>> {
        return await this.conn.axios.delete(`/mushaf/${config.uuid}`, config);
    }
}
