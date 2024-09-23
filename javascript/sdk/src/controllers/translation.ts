import { Connection } from "../connection";
import Controller, { ActionStatus } from "../controller";
import { TranslationListParam, TranslationListProps, TranslationPlain, TranslationViewParam, TranslationViewProps } from "../interfaces/translation";

export class ControllerTranslation implements Controller {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<R = TranslationViewProps, Target = string, P = TranslationViewParam>(target: Target, params: P): Promise<R> {
        return (await this.conn.axios.get(`/translation/${target}`, { params: params })).data;
    }

    async list<R = TranslationListProps, P = TranslationListParam>(params: P): Promise<R[]> {
        return (await this.conn.axios.get(`/translation`, { params: params })).data;
    }

    async add<T = TranslationPlain>(value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/translation`, value)).status;
    }

    async edit<T = TranslationPlain, Target = string>(target: Target, value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/translation/${target}`, value)).status;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<number>> {
        return (await this.conn.axios.delete(`/translation/${target}`)).status;
    }

    /**
        * @description `/translation/text`
    */
    text(): Controller {
        return new ControllerTranslationText(this.conn);
    }
}

// TODO: not defined some how fix
class ControllerTranslationText implements Controller {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async view<R = TranslationViewProps, Target = string, P = { ayah_uuid: string }>(target: Target, params: P): Promise<R> {
        return (await this.conn.axios.get(`/translation/text/${target}`, { params: params })).data;
    }

    async list<R = TranslationListProps, P = TranslationListParam>(_params: P): Promise<R[]> {
        throw new Error("Not defined!");
    }

    async add<T = TranslationPlain>(_value: T): Promise<ActionStatus<number>> {
        throw new Error("Not defined!");
    }

    /**
        * @description Modify Translation Text
        * @param target Translation UUID
    */
    async edit<T = { text: string }, Target = string>(target: Target, value: T): Promise<ActionStatus<number>> {
        return (await this.conn.axios.post(`/translation/text/${target}`, value)).status;
    }

    async delete<Target = string>(target: Target): Promise<ActionStatus<number>> {
        return (await this.conn.axios.delete(`/translation/text/${target}`)).status;
    }
}


