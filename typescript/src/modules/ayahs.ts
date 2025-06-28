import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
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
} from "../types/ayahs";
import { BaseController } from "../utils/baseController";

export class ControllerAyahs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Ayahs/ */
    async list(
        config?: RequestConfig<AyahsListRequestParams>
    ): Promise<AxiosResponse<AyahsListResponseData>> {
        return await this.axiosGet(`/ayahs`, config);
    }

    /** GET /Ayahs/{id}/ */
    async view(
        params: AyahsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsViewResponseData>> {
        return await this.axiosGet(`/ayahs/${params.id}/`, config);
    }

    /** POST /Ayahs/ */
    async add(
        data: AyahsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsAddResponseData>> {
        return await this.axiosPost(`/ayahs`, data, config);
    }

    /** PUT /Ayahs/{id}/ */
    async Edit(
        params: AyahsEditRequestParams,
        data: AyahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsEditResponseData>> {
        return await this.axiosPut(`/ayahs/${params.id}/`, data, config);
    }

    /** PATCH /Ayahs/{id}/ */
    async partialEdit(
        params: AyahsUpdateRequestParams,
        data: AyahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahsUpdateResponseData>> {
        return await this.axiosPatch(`/ayahs/${params.id}/`, data, config);
    }

    /** DELETE /Ayahs/{id}/ */
    async delete(
        params: AyahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/ayahs/${params.id}/`, config);
    }
}
