import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    SurahListResponseData,
    SurahViewRequestParams,
    SurahViewResponseData,
    SurahAddRequestData,
    SurahAddResponseItem,
    SurahsEditRequestParams,
    SurahsEditRequestData,
    SurahEditResponseItem,
    SurahsUpdateRequestParams,
    SurahsUpdateRequestData,
    SurahUpdateResponseItem,
} from "../types/surahs";
import { BaseController } from "../utils/baseController";

export class ControllerSurahs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /surahs/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return await this.axiosGet(`/surahs`, config);
    }

    /** GET /surahs/{uuid}/ */
    async view(
        params: SurahViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return await this.axiosGet(`/surahs/${params.uuid}/`, config);
    }

    /** POST /surahs/ */
    async add(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahAddResponseItem>> {
        return await this.axiosPost(`/surahs`, data, config);
    }

    /** PUT /surahs/{uuid}/ */
    async edit(
        params: SurahsEditRequestParams,
        data: SurahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahEditResponseItem>> {
        return await this.axiosPut(`/surahs/${params.uuid}/`, data, config);
    }

    /** PATCH /surahs/{uuid}/ */
    async partialEdit(
        params: SurahsUpdateRequestParams,
        data: SurahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahUpdateResponseItem>> {
        return await this.axiosPatch(`/surahs/${params.uuid}/`, data, config);
    }

    /** DELETE /surahs/{uuid}/ */
    async delete(
        params: SurahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surahs/${params.uuid}/`, config);
    }
}
