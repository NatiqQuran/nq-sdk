import { Connection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { MushafListParam, MushafListProps, MushafPlain, MushafViewProps } from "../interfaces/mushaf";

export class ControllerMushaf implements Controller {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<R = MushafViewProps, Target = string, P = null>(target: Target, params: P): Promise<R> {
        return (await this.conn.axios.get(`/mushaf/${target}`, { params: params })).data;
    }

    async list<R = MushafListProps, P = MushafListParam>(params: P): Promise<R[]> {
        return (await this.conn.axios.get(`/mushaf`, { params: params })).data;
    }

    async add<T = MushafPlain>(value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/mushaf`, value)).status;
    }

    async edit<T = MushafPlain, Target = string>(target: Target, value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/mushaf/${target}`, value)).data;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<number>> {
        return (await this.conn.axios.delete(`/mushaf/${target}`)).data;
    }
}

