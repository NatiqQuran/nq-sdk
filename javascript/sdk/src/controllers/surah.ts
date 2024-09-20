import { Connection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { SurahViewProps } from "../interfaces/surah";

export class SurahController implements Controller {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<R = SurahViewProps, Target = string>(target: Target, params: any): Promise<R> {
        return (await this.conn.axios.get(`/surah/${target}`, { params: params })).data;
    }

    async list<R = SurahViewProps>(params: any): Promise<R[]> {
        return (await this.conn.axios.get(`/surah`, { params: params })).data;
    }

    async add<T>(value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/surah`, value)).status;
    }

    async edit<T = SurahViewProps, Target = string>(target: Target, value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/surah/${target}`, value)).data;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<number>> {
        return (await this.conn.axios.delete(`/surah/${target}`)).data;
    }
}

