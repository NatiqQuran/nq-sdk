import { NQConnection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { Surah } from "../interfaces/surah";

export class SurahController implements Controller<Surah> {
    readonly conn: NQConnection;

    constructor(connection: NQConnection) {
        this.conn = connection;
    }

    async view<Target = string>(target: Target, _params: any): Promise<Surah> {
        return (await this.conn.axios.get(this.conn.generate_full_path(`/surah/${target}`))).data;
    }

    async list(_params: any): Promise<Surah[]> {
        return (await this.conn.axios.get(this.conn.generate_full_path(`/surah`))).data;
    }

    async add(value: Surah): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.post(this.conn.generate_full_path(`/surah`), value)).status;
    }

    async edit<Target = string>(target: Target, value: Surah): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.post(this.conn.generate_full_path(`/surah/${target}`), value)).data;
    }

    async remove<Target = string>(target: Target): Promise<ActionStatus<Surah>> {
        return (await this.conn.axios.delete(this.conn.generate_full_path(`/surah/${target}`))).data;
    }
}

