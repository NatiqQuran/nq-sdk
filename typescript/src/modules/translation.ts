import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TranslationsListResponseData,
    TranslationsViewRequestParams,
    TranslationViewResponseData,
    TranslationsAddRequestData,
    TranslationsEditRequestParams,
    TranslationsEditRequestData,
} from "../types/translations";
import { BaseController } from "../utils/baseController";

export class ControllerTranslations extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Translations/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations`, config);
    }

    /** GET /Translations/{id}/ */
    async view(
        params: TranslationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translations/${params.id}`, config);
    }

    /** POST /Translations/ */
    async add(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/translations`, data, config);
    }

    /** PUT /Translations/{id}/ */
    async Edit(
        params: TranslationsEditRequestParams,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/translations/${params.id}/`, data, config);
    }

    /** DELETE /Translations/{id}/ */
    async delete(
        params: TranslationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${params.id}`, config);
    }
}
