import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
import {
    SurahListResponseData,
    SurahViewRequestParams,
    SurahViewResponseData,
    SurahAddRequestData,
    SurahsUpdateRequestParams,
    SurahsUpdateRequestData,
    SurahsPartialUpdateRequestParams,
    SurahsPartialUpdateRequestData,
} from "../types/surahs";
import { BaseController } from "../utils/baseController";

export class ControllerSurah extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return await this.axiosGet(`/surah`, config);
    }

    async view(
        params: SurahViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return await this.axiosGet(`/surah/${params.id}`, config);
    }

    async add(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/surah`, data, config);
    }

    async edit(
        params: SurahsUpdateRequestParams,
        data: SurahsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/surah/${params.id}`, data, config);
    }

    async partialUpdate(
        params: SurahsPartialUpdateRequestParams,
        data: SurahsPartialUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/surah/${params.id}`, data, config);
    }

    async delete(
        params: SurahsUpdateRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surah/${params.id}`, config);
    }
}
