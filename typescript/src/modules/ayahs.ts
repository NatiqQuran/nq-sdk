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
    AyahsTraslationListResponseData,
    AyahsTraslationViewRequestParams,
    AyahsTraslationViewResponseData,
    AyahsTraslationAddRequestData,
    AyahsTraslationEditRequestParams,
    AyahsTraslationEditRequestData,
    AyahsTraslationEditResponseData,
    AyahsTraslationUpdateRequestParams,
    AyahsTraslationUpdateRequestData,
    AyahsTraslationUpdateResponseData,
} from "../types/ayahs";
import { BaseController } from "../utils/baseController";

// Translation Action Class for Ayahs
export class AyahsTranslationAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /ayahs/translation/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationListResponseData>> {
        return this.axiosGet(`/ayahs/translation`, config);
    }

    /** GET /ayahs/translation/{id}/ */
    async retrieve(
        params: AyahsTraslationViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationViewResponseData>> {
        return this.axiosGet(`/ayahs/translation/${params.id}/`, config);
    }

    /** POST /ayahs/translation/ */
    async create(
        data: AyahsTraslationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationEditResponseData>> {
        return this.axiosPost(`/ayahs/translation`, data, config);
    }

    /** PUT /ayahs/translation/{id}/ */
    async update(
        params: AyahsTraslationEditRequestParams,
        data: AyahsTraslationEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationEditResponseData>> {
        return this.axiosPut(`/ayahs/translation/${params.id}/`, data, config);
    }

    /** PATCH /ayahs/translation/{id}/ */
    async partialUpdate(
        params: AyahsTraslationUpdateRequestParams,
        data: AyahsTraslationUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsTraslationUpdateResponseData>> {
        return this.axiosPatch(
            `/ayahs/translation/${params.id}/`,
            data,
            config
        );
    }

    /** DELETE /ayahs/translation/{id}/ */
    async delete(
        params: AyahsTraslationEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/translation/${params.id}/`, config);
    }
}

export class AyahsController extends BaseController {
    public translation: AyahsTranslationAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.translation = new AyahsTranslationAction(connection, token);
    }

    /** GET /ayah/ */
    async list(
        config?: RequestConfig<AyahsListRequestParams>
    ): Promise<AxiosResponse<AyahsListResponseData>> {
        return this.axiosGet(`/ayahs/`, config);
    }

    /** GET /ayah/{id}/ */
    async retrieve(
        params: AyahsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsViewResponseData>> {
        return this.axiosGet(`/ayahs/${params.id}/`, config);
    }

    /** POST /ayah/ */
    async create(
        data: AyahsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsAddResponseData>> {
        return this.axiosPost(`/ayahs/`, data, config);
    }

    /** PUT /ayah/{id}/ */
    async update(
        params: AyahsEditRequestParams,
        data: AyahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsEditResponseData>> {
        return this.axiosPut(`/ayahs/${params.id}/`, data, config);
    }

    /** PATCH /ayah/{id}/ */
    async partialUpdate(
        params: AyahsUpdateRequestParams,
        data: AyahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsUpdateResponseData>> {
        return this.axiosPatch(`/ayahs/${params.id}/`, data, config);
    }

    /** DELETE /ayah/{id}/ */
    async delete(
        params: AyahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/ayahs/${params.id}/`, config);
    }
}
