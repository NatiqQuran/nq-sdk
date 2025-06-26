import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    TranslationsListResponseData,
    TranslationsViewRequestParams,
    TranslationViewResponseData,
    TranslationsAddRequestData,
    TranslationsUpdateRequestParams,
    TranslationsUpdateRequestData,
} from "../types/translations";
import { BaseController } from "../utils/baseController";

export class ControllerTranslations extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /translations/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations`, config);
    }

    /** GET /translations/{id}/ */
    async view(
        params: TranslationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translations/${params.id}`, config);
    }

    /** POST /translations/ */
    async add(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/translations`, data, config);
    }

    /** PUT /translations/{id}/ */
    async update(
        params: TranslationsUpdateRequestParams,
        data: TranslationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/translations/${params.id}/`, data, config);
    }

    /** DELETE /mushafs/{id}/ */
    async delete(
        params: TranslationsUpdateRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${params.id}`, config);
    }
   
}
