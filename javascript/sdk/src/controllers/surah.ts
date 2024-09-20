import { Connection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { Surah } from "../interfaces/surah";

export class SurahController implements Controller<Surah> {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<Target = string>(target: Target, _params: any): Promise<Surah> {
        return (await this.conn.axios.get(`/surah/${target}`)).data;
    }

    async list(_params: any): Promise<Surah[]> {
        return (await this.conn.axios.get(`/surah`)).data;
    }

    async add(value: Surah): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.post(`/surah`, value)).status;
    }

    async edit<Target = string>(target: Target, value: Surah): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.post(`/surah/${target}`, value)).data;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.delete(`/surah/${target}`)).data;
    }
}

