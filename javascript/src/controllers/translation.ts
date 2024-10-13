import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import {
    Token,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils";
import {
    TranslationListParams,
    TranslationListResponseData,
    TranslationTextModifyRequestData,
    TranslationTextViewParams,
    TranslationTextViewResponseData,
    TranslationViewParams,
    TranslationViewRequestData,
    TranslationViewResponseData,
} from "../interfaces/translation";

export class ControllerTranslation {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: RequestConfig<TranslationListParams>
    ): Promise<AxiosResponse<TranslationListResponseData>> {
        return this.conn.axios.get(`/translation`, config);
    }

    view(
        target: Token,
        config: RequestConfig<TranslationViewParams>
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return this.conn.axios.get(`/translation/${target}`, config);
    }

    add(
        data: TranslationViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation`, data, config);
    }

    edit(
        target: Token,
        data: TranslationViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation/${target}`, data, config);
    }

    delete(
        target: Token,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
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
        target: Token,
        config: RequestConfig<TranslationTextViewParams>
    ): Promise<AxiosResponse<TranslationTextViewResponseData>> {
        return this.conn.axios.get(`/translation/text/${target}`, config);
    }

    modify(
        target: Token,
        data: TranslationTextModifyRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(
            `/translation/text/${target}`,
            data,
            config
        );
    }

    delete(
        target: Token,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/translation/text/${target}`, config);
    }
}
