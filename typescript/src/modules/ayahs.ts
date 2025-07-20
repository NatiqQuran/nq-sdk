import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    AyahsListRequestParams,
    AyahsListResponseData,
    AyahsViewRequestParams,
    AyahsViewResponseData,
    AyahsAddRequestData,
    AyahsAddResponseData,
    AyahsEditRequestParams,
    AyahsEditRequestData,
    AyahsEditResponseData,
    AyahsUpdateRequestParams,
    AyahsUpdateRequestData,
    AyahsUpdateResponseData,
    AyahsTraslationRequestParams,
    AyahsTraslationListResponseData,
    AyahsTraslationViewRequestParams,
    AyahsTraslationViewResponseData,
    AyahsTraslationAddRequestParams,
    AyahsTraslationAddRequestDate,
    AyahsTraslationAddResponsetDate,
    AyahsTraslationEditRequestParams,
    AyahsTraslationEditRequestData,
    AyahsTraslationEditResponseData,
    AyahsTraslationUpdateRequestParams,
    AyahsTraslationUpdateRequestData,
    AyahsTraslationUpdateResponseData,
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
        params: AyahsViewRequestParams,
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
        params: AyahsEditRequestParams,
        data: AyahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsEditResponseData>> {
        return this.axiosPut(`/ayahs/${params.uuid}/`, data, config);
    }

    /** PATCH /ayahs/{uuid}/ */
    async partialEdit(
        params: AyahsUpdateRequestParams,
        data: AyahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsUpdateResponseData>> {
        return this.axiosPatch(`/ayahs/${params.uuid}/`, data, config);
    }

    /** DELETE /ayahs/{uuid}/ */
    async delete(
        params: AyahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/${params.uuid}/`, config);
    }

    // ===== Ayahs Translation =====

    /** GET /ayahs/translation/ */
    async listTranslations(
        config?: RequestConfig<AyahsTraslationRequestParams>
    ): Promise<AxiosResponse<AyahsTraslationListResponseData>> {
        return this.axiosGet(`/ayahs/translation/`, config);
    }

    /** GET /ayahs/translation/{uuid}/ */
    async viewTranslation(
        params: AyahsTraslationViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationViewResponseData>> {
        return this.axiosGet(`/ayahs/translation/${params.uuid}/`, config);
    }

    /** POST /ayahs/translation/ */
    async addTranslation(
        data: AyahsTraslationAddRequestDate,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationEditResponseData>> {
        return this.axiosPost(`/ayahs/translation/`, data, config);
    }

    /** PUT /ayahs/translation/{uuid}/ */
    async editTranslation(
        params: AyahsTraslationEditRequestParams,
        data: AyahsTraslationEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationEditResponseData>> {
        return this.axiosPut(`/ayahs/translation/${params.uuid}/`, data, config);
    }

    /** PATCH /ayahs/translation/{uuid}/ */
    async partialEditTranslation(
        params: AyahsTraslationUpdateRequestParams,
        data: AyahsTraslationUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationUpdateResponseData>> {
        return this.axiosPatch(
            `/ayahs/translation/${params.uuid}/`,
            data,
            config
        );
    }

    /** DELETE /ayahs/translation/{uuid}/ */
    async deleteTranslation(
        params: AyahsTraslationEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/translation/${params.uuid}/`, config);
    }
}
