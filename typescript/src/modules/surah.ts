import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    SurahListRequestParams,
    SurahListResponseData,
    SurahViewRequestParams,
    SurahViewResponseData,
    SurahAddRequestData,
} from "../types/surah";
import { BaseController } from "../utils/baseController";

export class ControllerSurah extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig<SurahListRequestParams>
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return await this.axiosGet(`/surah`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig<SurahViewRequestParams>
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return await this.axiosGet(`/surah/${target}`, config);
    }

    async add(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/surah`, data, config);
    }

    async edit(
        target: UUID,
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/surah/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/surah/${target}`, config);
    }
}
