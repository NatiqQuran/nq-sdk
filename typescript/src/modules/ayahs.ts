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
}
