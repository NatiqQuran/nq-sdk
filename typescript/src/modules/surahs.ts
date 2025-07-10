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

export class ControllerSurah extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Surah/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return await this.axiosGet(`/surah`, config);
    }

    /** GET /Surah/{id}/ */
    async view(
        params: SurahViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return await this.axiosGet(`/surah/${params.id}`, config);
    }

    /** POST /Surah/ */
    async add(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/surah`, data, config);
    }

    /** PUT /Surah/{id}/ */
    async edit(
        params: SurahsEditRequestParams,
        data: SurahsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/surah/${params.id}`, data, config);
    }

    /** PATCH /Surah/{id}/ */
    async partialEdit(
        params: SurahsUpdateRequestParams,
        data: SurahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/surah/${params.id}`, data, config);
    }

    /** DELETE /Surah/{id}/ */
    async delete(
        params: SurahsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surah/${params.id}`, config);
    }
}
