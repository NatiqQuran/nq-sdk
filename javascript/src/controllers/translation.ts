import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import { TranslationListItemProps, TranslationListParam, TranslationPlain, TranslationViewProps } from "../interfaces/translation";
import { ErrorProps } from "../interfaces/error";

export class ControllerTranslation {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    view(target: string, params: { surah_uuid?: string }): Promise<AxiosResponse<TranslationViewProps | ErrorProps>> {
        return this.conn.axios.get(`/translation/${target}`, { params: params });
    }

    list(params: TranslationListParam): Promise<AxiosResponse<TranslationListItemProps[] | ErrorProps>> {
        return this.conn.axios.get(`/translation`, { params: params });
    }

    add(value: TranslationPlain): Promise<string | ErrorProps> {
        return this.conn.axios.post(`/translation`, value);
    }

    edit(target: string, value: TranslationPlain): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.post(`/translation/${target}`, value);
    }

    delete(target: string): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.delete(`/translation/${target}`);
    }

    /**
        * @description `/translation/text`
    */
    text() {
        return new ActionText(this.conn);
    }
}

class ActionText {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    view(target: string, params: { ayah_uuid: string }): Promise<AxiosResponse<{ uuid: string, text: string } | ErrorProps>> {
        return this.conn.axios.get(`/translation/text/${target}`, { params: params });
    }

    modify(target: string, value: { text: string }): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.post(`/translation/text/${target}`, value);
    }

    delete(target: string): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.delete(`/translation/text/${target}`);
    }
}


