import { Connection } from "../connection";
import { ErrorProps } from "../interfaces/error";
import { MushafListParam, MushafPlain, MushafViewProps } from "../interfaces/mushaf";
import { AxiosResponse } from "axios"

export class ControllerMushaf {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view(target: string): Promise<AxiosResponse<MushafViewProps | ErrorProps>> {
        return await this.conn.axios.get(`/mushaf/${target}`);
    }

    async list(params: MushafListParam): Promise<AxiosResponse<MushafViewProps[] | ErrorProps>> {
        return await this.conn.axios.get(`/mushaf`, { params: params });
    }

    async add(value: MushafPlain): Promise<AxiosResponse<string | ErrorProps>> {
        return await this.conn.axios.post(`/mushaf`, value);
    }

    async edit(target: string, value: MushafPlain): Promise<AxiosResponse<string | ErrorProps>> {
        return await this.conn.axios.post(`/mushaf/${target}`, value);
    }

    async delete(target: string): Promise<AxiosResponse<string | ErrorProps>> {
        return await this.conn.axios.delete(`/mushaf/${target}`);
    }
}

