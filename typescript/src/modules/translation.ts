import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    TranslationListRequestParams,
    TranslationListResponseData,
    TranslationTextModifyRequestData,
    TranslationTextViewRequestParams,
    TranslationTextViewResponseData,
    TranslationViewRequestParams,
    TranslationAddRequestData,
    TranslationViewResponseData,
} from "../types/translation";

export class ControllerTranslation {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig<TranslationListRequestParams>
    ): Promise<AxiosResponse<TranslationListResponseData>> {
        return this.conn.axios.get(`/translation`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig<TranslationViewRequestParams>
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return this.conn.axios.get(`/translation/${target}`, config);
    }

    add(
        data: TranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation`, data, config);
    }

    edit(
        target: UUID,
        data: TranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/translation/${target}`, data, config);
    }

    delete(
        target: UUID,
        config?: RequestConfig
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
        target: string,
        config: RequestConfig<TranslationTextViewRequestParams>
    ): Promise<AxiosResponse<TranslationTextViewResponseData>> {
        return this.conn.axios.get(`/translation/text/${target}`, config);
    }

    modify(
        target: string,
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
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/translation/text/${target}`, config);
    }
}
