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
    AyahTranslationListResponseData,
    AyahTranslationViewRequestParams,
    AyahTranslationViewResponseData,
    AyahTranslationAddRequestData,
    AyahTranslationEditRequestParams,
    AyahTranslationEditRequestData,
    AyahTranslationUpdateRequestParams,
    AyahTranslationUpdateRequestData,
} from "../types/translations";
import { BaseController } from "../utils/baseController";

// Ayah Action Class for Translations
export class TranslationsAyahAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /ayah-translations/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahTranslationListResponseData[]>> {
        return await this.axiosGet(`/ayah-translations/`, config);
    }

    /** GET /ayah-translations/{uuid}/ */
    async retrieve(
        params: AyahTranslationViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahTranslationViewResponseData>> {
        return await this.axiosGet(`/ayah-translations/${params.uuid}/`, config);
    }

    /** POST /ayah-translations/ */
    async create(
        data: AyahTranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahTranslationViewResponseData>> {
        return await this.axiosPost(`/ayah-translations/`, data, config);
    }

    /** PUT /ayah-translations/{uuid}/ */
    async update(
        params: AyahTranslationEditRequestParams,
        data: AyahTranslationEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahTranslationViewResponseData>> {
        return await this.axiosPut(`/ayah-translations/${params.uuid}/`, data, config);
    }

    /** PATCH /ayah-translations/{uuid}/ */
    async partialUpdate(
        params: AyahTranslationUpdateRequestParams,
        data: AyahTranslationUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahTranslationViewResponseData>> {
        return await this.axiosPatch(`/ayah-translations/${params.uuid}/`, data, config);
    }

    /** DELETE /ayah-translations/{uuid}/ */
    async delete(
        params: AyahTranslationEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/ayah-translations/${params.uuid}/`, config);
    }
}

export class TranslationsController extends BaseController {
    public ayah: TranslationsAyahAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.ayah = new TranslationsAyahAction(connection, token);
    }

    /** GET /Translation/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations/`, config);
    }


    /** GET /Translation/{id}/ */
    async retrieve(
        params: TranslationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translations/${params.id}/`, config);
    }


    /** POST /Translation/ */
    async create(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }


    /** PUT /Translation/{id}/ */
    async update(
        params: TranslationsEditRequestParams,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/translations/${params.id}/`, data, config);
    }

    /** DELETE /Translation/{id}/ */
    async delete(
        params: TranslationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${params.id}/`, config);
    }
}
