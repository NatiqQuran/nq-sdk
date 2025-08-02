import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TranslationsListRequestParams,
    TranslationsListResponseData,
    TranslationsViewResponseData,
    TranslationsAddRequestData,
    TranslationsAddResponseData,
    TranslationsEditRequestData,
    TranslationsEditResponseData,
    TranslationsPartialEditRequestData,
    TranslationsPartialEditResponseData,
    TranslationsViewRequestParams,
    AyahsTranslationAddRequestParams,
    AyahsTranslationAddRequestData,
    TranslationImportResponseData,
    TranslationImportRequestData,
    
} from "../types/translations";

// Ayah Translation Action Class for Translation
export class AyahTranslationAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /translations/ayah/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return this.axiosGet(`/translations/ayah/`, config);
    }

    /** POST /translations/ayah/ */
    async create(
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig<AyahsTranslationAddRequestParams>
    ): Promise<AxiosResponse> {
        return this.axiosPost(`/translations/ayah/`, data, config);
    }

    /** POST /translations/{uuid}/ayah/{ayah_uuid}/ */
    async createOrUpdate(
        translationUuid: string,
        ayahUuid: string,
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse> {
        return this.axiosPost(`/translations/${translationUuid}/ayah/${ayahUuid}/`, data, config);
    }

    /** PUT /translations/{uuid}/ayah/{ayah_uuid}/ */
    async update(
        translationUuid: string,
        ayahUuid: string,
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse> {
        return this.axiosPut(`/translations/${translationUuid}/ayah/${ayahUuid}/`, data, config);
    }
}

export class TranslationController extends BaseController {
    public ayah: AyahTranslationAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.ayah = new AyahTranslationAction(connection, token);
    }

    /** GET /translations/ */
    async list(
        config?: RequestConfig<TranslationsListRequestParams>
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations/`, config);
    }

    /** GET /translations/{uuid}/ */
    async retrieve(
        uuid: string,
        config?: RequestConfig<TranslationsViewRequestParams>
    ): Promise<AxiosResponse<TranslationsViewResponseData>> {
        return await this.axiosGet(`/translations/${uuid}/`, config);
    }

    /** POST /translations/ */
    async create(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsAddResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }

    /** PUT /translations/{uuid}/ */
    async update(
        uuid: string,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsEditResponseData>> {
        return await this.axiosPut(`/translations/${uuid}/`, data, config);
    }

    /** PATCH /translations/{uuid}/ */
    async partialUpdate(
        uuid: string,
        data: TranslationsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsPartialEditResponseData>> {
        return await this.axiosPatch(`/translations/${uuid}/`, data, config);
    }

    /** DELETE /translations/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${uuid}/`, config);
    }

    /** POST /translations/import/ */
    async import (
        data: TranslationImportRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationImportResponseData>> {
        const formData = new FormData();
        formData.append("file", data.file);

        const importConfig = {
            ...config,
            headers: {
                ...(config?.headers || {}),
                "Content-Type": "multipart/form-data",
            },
        };
        return this.axiosPost(`/translations/import/`, formData, importConfig);
    }
}

