import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../interfaces/utils.js";
import {
    SurahListParams,
    SurahListResponseData,
    SurahViewParams,
    SurahViewRequestData,
    SurahViewResponseData,
} from "../interfaces/surah.js";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig<SurahListParams>
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig<SurahViewParams>
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return this.conn.axios.get(`/surah/${target}`, config);
    }

    add(
        data: SurahViewRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah`, data, config);
    }

    edit(
        target: UUID,
        data: SurahViewRequestData,
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
