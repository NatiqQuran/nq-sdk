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
    AyahsTranslationListRequestParams,
    AyahsTranslationListResponseData,
    AyahsTranslationViewRequestParams,
    AyahsTranslationViewResponseData,
    AyahsTranslationAddRequestData,
    AyahsTranslationAddResponseData,
    AyahsTranslationEditResponseData,
    TranslationImportRequestData,
    TranslationImportResponseData,
    AyahsTranslationAddRequestParams,
    AyahsTranslationEditRequestParams
} from "../types/translations";

// Ayah Translation Action Class for Translation
export class AyahTranslationAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /translations/ayah/ */
    async list(
        config?: RequestConfig<AyahsTranslationListRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationListResponseData>> {
        return this.axiosGet(`/translations/ayah/`, config);
    }

    /** GET /translations/{uuid}/ayah/{ayah_uuid}/ */
    async view(
        uuid:string,
        config?: RequestConfig<AyahsTranslationViewRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationViewResponseData>> {
        return this.axiosGet(
            `/translations/${uuid}/ayah/${config?.params?.ayah_uuid}/`,
            config
        );
    }

    /** POST /translations/{uuid}/ayah/{ayah_uuid}/ */
    async create(
        uuid:string,
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig<AyahsTranslationAddRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationAddResponseData>> {
        return this.axiosPost(
            `/translations/${uuid}/ayah/${config?.params?.ayah_uuid}/`,
            data,
            config
        );
    }

    /** PUT /translations/{uuid}/ayah/{ayah_uuid}/ */
    async update(
        uuid:string,
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig<AyahsTranslationEditRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationEditResponseData>> {
        return this.axiosPut(
            `/translations/${uuid}/ayah/${config?.params?.ayah_uuid}/`,
            data,
            config
        );
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
        return this.axiosGet(`/translations/`, config);
    }

    /** GET /translations/{uuid}/ */
    async retrieve(
        uuid: string,
        config?: RequestConfig<TranslationsViewRequestParams>
    ): Promise<AxiosResponse<TranslationsViewResponseData>> {
        return this.axiosGet(`/translations/${uuid}/`, config);
    }

    /** POST /translations/ */
    async create(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsAddResponseData>> {
        return this.axiosPost(`/translations/`, data, config);
    }

    /** PUT /translations/{uuid}/ */
    async update(
        uuid: string,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsEditResponseData>> {
        return this.axiosPut(`/translations/${uuid}/`, data, config);
    }

    /** PATCH /translations/{uuid}/ */
    async partialUpdate(
        uuid: string,
        data: TranslationsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsPartialEditResponseData>> {
        return this.axiosPatch(`/translations/${uuid}/`, data, config);
    }

    /** DELETE /translations/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/translations/${uuid}/`, config);
    }

    /** POST /translations/import/ */
    async import(
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
