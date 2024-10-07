import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import { RequestConfig } from "../utils";
import { ErrorProps } from "../interfaces/error";
import {
    TranslationListItemProps,
    TranslationListParam,
    TranslationPlain,
    TranslationViewProps,
} from "../interfaces/translation";
import { config } from "process";

export class ControllerTranslation {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: RequestConfig<TranslationListParam>
    ): Promise<AxiosResponse<TranslationListItemProps[]>> {
        return this.conn.axios.get(`/translation`, config);
    }

    view(
        target: string,
        config: RequestConfig<{ surah_uuid?: string }>
    ): Promise<AxiosResponse<TranslationViewProps>> {
        return this.conn.axios.get(`/translation/${target}`, config);
    }

    add(data: TranslationPlain, config: RequestConfig): Promise<string> {
        return this.conn.axios.post(`/translation`, data, config);
    }

    edit(
        target: string,
        data: TranslationPlain,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(`/translation/${target}`, data, config);
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(`/translation/${target}`, config);
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

    view(
        target: string,
        config: RequestConfig<{ ayah_uuid: string }>
    ): Promise<AxiosResponse<{ uuid: string; text: string }>> {
        return this.conn.axios.get(`/translation/text/${target}`, config);
    }

    modify(
        target: string,
        data: { text: string },
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(
            `/translation/text/${target}`,
            data,
            config
        );
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(`/translation/text/${target}`, config);
    }
}
