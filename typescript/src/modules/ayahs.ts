import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    AyahsListRequestParams,
    AyahsListResponseData,
    AyahsViewResponseData,
    AyahsAddRequestData,
    AyahsAddResponseData,
    AyahsEditRequestData,
    AyahsEditResponseData,
    AyahsPartialEditRequestData,
    AyahsPartialEditResponseData,
    AyahsTranslationListRequestParams,
    AyahsTranslationListResponseData,
    AyahsTranslationViewResponseData,
    AyahsTranslationAddRequestData,
    AyahsTranslationAddResponseData,
    AyahsTranslationEditRequestData,
    AyahsTranslationEditResponseData,
    AyahsTranslationPartialEditRequestData,
    AyahsTranslationPartialEditResponseData,
} from "../types/ayahs";

export class ControllerAyahs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /ayahs/ */
    async list(
        config?: RequestConfig<AyahsListRequestParams>
    ): Promise<AxiosResponse<AyahsListResponseData>> {
        return this.axiosGet(`/ayahs/`, config);
    }

    /** GET /ayahs/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsViewResponseData>> {
        return this.axiosGet(`/ayahs/${uuid}/`, config);
    }

    /** POST /ayahs/ */
    async add(
        data: AyahsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsAddResponseData>> {
        return this.axiosPost(`/ayahs/`, data, config);
    }

    /** PUT /ayahs/{uuid}/ */
    async edit(
        uuid: string,
        data: AyahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsEditResponseData>> {
        return this.axiosPut(`/ayahs/${uuid}/`, data, config);
    }

    /** PATCH /ayahs/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: AyahsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsPartialEditResponseData>> {
        return this.axiosPatch(`/ayahs/${uuid}/`, data, config);
    }

    /** DELETE /ayahs/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/${uuid}/`, config);
    }

    // ===== Ayahs Translation =====

    /** GET /ayahs/translation/ */
    async listTranslations(
        config?: RequestConfig<AyahsTranslationListRequestParams>
    ): Promise<AxiosResponse<AyahsTranslationListResponseData>> {
        return this.axiosGet(`/ayahs/translation/`, config);
    }

    /** GET /ayahs/translation/{uuid}/ */
    async viewTranslation(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationViewResponseData>> {
        return this.axiosGet(`/ayahs/translation/${uuid}/`, config);
    }

    /** POST /ayahs/translation/ */
    async addTranslation(
        data: AyahsTranslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationAddResponseData>> {
        return this.axiosPost(`/ayahs/translation/`, data, config);
    }

    /** PUT /ayahs/translation/{uuid}/ */
    async editTranslation(
        uuid: string,
        data: AyahsTranslationEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationEditResponseData>> {
        return this.axiosPut(`/ayahs/translation/${uuid}/`, data, config);
    }

    /** PATCH /ayahs/translation/{uuid}/ */
    async partialEditTranslation(
        data: AyahsTranslationPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationPartialEditResponseData>> {
        return this.axiosPatch(
            `/ayahs/translation/${data.ayah_uuid}/`,
            data,
            config
        );
    }

    /** DELETE /ayahs/translation/{uuid}/ */
    async deleteTranslation(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/translation/${uuid}/`, config);
    }
}
