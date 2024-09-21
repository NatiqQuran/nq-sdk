import { Connection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { SurahListParam, SurahListProps, SurahPlain, SurahViewParam, SurahViewProps } from "../interfaces/surah";

export class ControllerSurah implements Controller {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<R = SurahViewProps, Target = string, P = SurahViewParam>(target: Target, params: P): Promise<R> {
        return (await this.conn.axios.get(`/surah/${target}`, { params: params })).data;
    }

    async list<R = SurahListProps, P = SurahListParam>(params: P): Promise<R[]> {
        return (await this.conn.axios.get(`/surah`, { params: params })).data;
    }

    async add<T = SurahPlain>(value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/surah`, value)).status;
    }

    async edit<T = SurahPlain, Target = string>(target: Target, value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/surah/${target}`, value)).data;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<number>> {
        return (await this.conn.axios.delete(`/surah/${target}`)).data;
    }
}

