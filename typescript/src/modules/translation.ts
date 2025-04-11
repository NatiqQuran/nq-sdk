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
    TranslationAyahModifyRequestData,
    TranslationAyahViewRequestParams,
    TranslationAyahViewResponseData,
    TranslationViewRequestParams,
    TranslationAddRequestData,
    TranslationViewResponseData,
} from "../types/translation";
import { BaseController } from "../utils/baseController";

export class ControllerTranslation extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig<TranslationListRequestParams>
    ): Promise<AxiosResponse<TranslationListResponseData>> {
        return await this.axiosGet(`/translation`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig<TranslationViewRequestParams>
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translation/${target}`, config);
    }

    async add(
        data: TranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/translation`, data, config);
    }

    async edit(
        target: UUID,
        data: TranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/translation/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translation/${target}`, config);
    }

    /**
     * @description `/translation/text`
     */
    text() {
        return new ActionText(this.conn, this.token);
    }
}

class ActionText extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async view(
        target: string,
        config: RequestConfig<TranslationAyahViewRequestParams>
    ): Promise<AxiosResponse<TranslationAyahViewResponseData>> {
        return await this.axiosGet(`/translation/text/${target}`, config);
    }

    async modify(
        target: string,
        data: TranslationAyahModifyRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(
            `/translation/text/${target}`,
            data,
            config
        );
    }

    async delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translation/text/${target}`, config);
    }
}
