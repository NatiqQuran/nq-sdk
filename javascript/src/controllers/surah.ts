import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import {
    Token,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils";
import {
    SurahListParams,
    SurahListResponseData,
    SurahViewParams,
    SurahViewRequestData,
    SurahViewResponseData,
} from "../interfaces/surah";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: RequestConfig<SurahListParams>
    ): Promise<AxiosResponse<SurahListResponseData>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        target: Token,
        config: RequestConfig<SurahViewParams>
    ): Promise<AxiosResponse<SurahViewResponseData>> {
        return this.conn.axios.get(`/surah/${target}`, config);
    }

    add(
        data: SurahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah`, data, config);
    }

    edit(
        target: Token,
        data: SurahViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/surah/${target}`, data, config);
    }

    delete(
        target: Token,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/surah/${target}`, config);
    }
}
