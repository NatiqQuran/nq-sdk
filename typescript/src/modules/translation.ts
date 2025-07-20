import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TranslationsListResponseData,
    TranslationsViewRequestParams,
    TranslationViewResponseData,
    TranslationsAddRequestData,
    TranslationAddResponseData,
    TranslationsEditRequestParams,
    TranslationsEditRequestData,
    TranslationEditResponseData,
    TrasnlationsUpdateRequestParams,
    TranslationsUpdateRequestData,
    TranslationUpdateResponseData,
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
        return await this.axiosGet(`/translations/`, config);
    }

    /** GET /translations/{uuid}/ */
    async view(
        params: TranslationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translations/${params.uuid}/`, config);
    }

    /** POST /translations/ */
    async add(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationAddResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }

    /** PUT /translations/{uuid}/ */
    async edit(
        params: TranslationsEditRequestParams,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationEditResponseData>> {
        return await this.axiosPut(`/translations/${params.uuid}/`, data, config);
    }

    /** PATCH /translations/{uuid}/ */
    async partialEdit(
        params: TrasnlationsUpdateRequestParams,
        data: TranslationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationUpdateResponseData>> {
        return await this.axiosPatch(`/translations/${params.uuid}/`, data, config);
    }

    /** DELETE /translations/{uuid}/ */
    async delete(
        params: TranslationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${params.uuid}/`, config);
    }
}
