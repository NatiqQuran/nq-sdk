import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    SurahListResponseData,
    SurahViewRequestParams,
    SurahViewResponseData,
    SurahAddRequestData,
    SurahsEditRequestParams,
    SurahsEditRequestData,
    SurahsUpdateRequestParams,
    SurahsUpdateRequestData,
} from "../types/surahs";
import { BaseController } from "../utils/baseController";

export class SurahController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Surah/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return await this.axiosGet(`/surahs/`, config);
    }

    /** GET /Surah/{id}/ */
    async retrieve(
        params: SurahViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return await this.axiosGet(`/surahs/${params.id}/`, config);
    }

    /** POST /Surah/ */
    async create(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/surahs/`, data, config);
    }

    /** PUT /Surah/{id}/ */
    async update(
        params: SurahsEditRequestParams,
        data: SurahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/surahs/${params.id}/`, data, config);
    }

    /** PATCH /Surah/{id}/ */
    async partialUpdate(
        params: SurahsUpdateRequestParams,
        data: SurahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/surahs/${params.id}/`, data, config);
    }

    /** DELETE /Surah/{id}/ */
    async delete(
        params: SurahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surahs/${params.id}/`, config);
    }
}
