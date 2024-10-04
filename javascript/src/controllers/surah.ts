import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import {
    ListRequestConfig,
    ViewRequestConfig,
    AddRequestConfig,
    EditRequestConfig,
    DeleteRequestConfig,
} from "../utils";
import { ErrorProps } from "../interfaces/error";
import {
    SurahListItemProps,
    SurahListParam,
    SurahPlain,
    SurahViewParam,
    SurahViewProps,
} from "../interfaces/surah";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: ListRequestConfig<SurahListParam>
    ): Promise<AxiosResponse<SurahListItemProps[]>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        config: ViewRequestConfig<SurahViewParam>
    ): Promise<AxiosResponse<SurahViewProps>> {
        return this.conn.axios.get(`/surah/${config.uuid}`, config);
    }

    add(config: AddRequestConfig<SurahPlain>): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(`/surah`, config.data, config);
    }

    edit(
        config: EditRequestConfig<SurahPlain>
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(
            `/surah/${config.uuid}`,
            config.data,
            config
        );
    }

    delete(config: DeleteRequestConfig): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(`/surah/${config.uuid}`, config);
    }
}
