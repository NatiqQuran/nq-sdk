import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import {
    ListRequestConfig,
    ViewRequestConfig,
    AddRequestConfig,
    EditRequestConfig,
    ModifyRequestConfig,
    DeleteRequestConfig,
} from "../utils";
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
        config: ListRequestConfig<TranslationListParam>
    ): Promise<AxiosResponse<TranslationListItemProps[]>> {
        return this.conn.axios.get(`/translation`, config);
    }

    view(
        config: ViewRequestConfig<{ surah_uuid?: string }>
    ): Promise<AxiosResponse<TranslationViewProps>> {
        return this.conn.axios.get(`/translation/${config.uuid}`, config);
    }

    add(config: AddRequestConfig<TranslationPlain>): Promise<string> {
        return this.conn.axios.post(`/translation`, config.data, config);
    }

    edit(
        config: EditRequestConfig<TranslationPlain>
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(
            `/translation/${config.uuid}`,
            config.data,
            config
        );
    }

    delete(config: DeleteRequestConfig): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(`/translation/${config.uuid}`, config);
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
        config: ViewRequestConfig<{ ayah_uuid: string }>
    ): Promise<AxiosResponse<{ uuid: string; text: string }>> {
        return this.conn.axios.get(`/translation/text/${config.uuid}`, config);
    }

    modify(
        config: ModifyRequestConfig<{ text: string }>
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(
            `/translation/text/${config.uuid}`,
            config.data,
            config
        );
    }

    delete(config: DeleteRequestConfig): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(
            `/translation/text/${config.uuid}`,
            config
        );
    }
}
