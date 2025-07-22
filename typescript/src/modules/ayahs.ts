import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
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
import { BaseController } from "../utils/baseController";

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
        params: AyahsViewResponseData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsViewResponseData>> {
        return this.axiosGet(`/ayahs/${params.uuid}/`, config);
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
        params: AyahsEditResponseData,
        data: AyahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsEditResponseData>> {
        return this.axiosPut(`/ayahs/${params.uuid}/`, data, config);
    }

    /** PATCH /ayahs/{uuid}/ */
    async partialEdit(
        params: AyahsPartialEditResponseData,
        data: AyahsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsPartialEditResponseData>> {
        return this.axiosPatch(`/ayahs/${params.uuid}/`, data, config);
    }

    /** DELETE /ayahs/{uuid}/ */
    async delete(
        params: AyahsEditResponseData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/${params.uuid}/`, config);
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
        params: AyahsTranslationViewResponseData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationViewResponseData>> {
        return this.axiosGet(`/ayahs/translation/${params.uuid}/`, config);
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
        params: AyahsTranslationEditResponseData,
        data: AyahsTranslationEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationEditResponseData>> {
        return this.axiosPut(`/ayahs/translation/${params.uuid}/`, data, config);
    }

    /** PATCH /ayahs/translation/{uuid}/ */
    async partialEditTranslation(
                params: AyahsTranslationPartialEditResponseData,
        data: AyahsTranslationPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTranslationPartialEditResponseData>> {
        return this.axiosPatch(
            `/ayahs/translation/${params.uuid}/`,
            data,
            config
        );
    }

    /** DELETE /ayahs/translation/{uuid}/ */
    async deleteTranslation(
        params: AyahsTranslationEditResponseData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/translation/${params.uuid}/`, config);
    }
}
