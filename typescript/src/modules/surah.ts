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

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig<SurahListRequestParams>
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig<SurahViewRequestParams>
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return this.conn.axios.get(`/surah/${target}`, config);
    }

    add(
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah`, data, config);
    }

    edit(
        target: UUID,
        data: SurahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah/${target}`, data, config);
    }

    delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/surah/${target}`, config);
    }
}
