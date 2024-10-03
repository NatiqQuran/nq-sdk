import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import { SurahListItemProps, SurahListParam, SurahPlain, SurahViewParam, SurahViewProps } from "../interfaces/surah";
import { ErrorProps } from "../interfaces/error";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    view(target: string, params: SurahViewParam): Promise<AxiosResponse<SurahViewProps | ErrorProps>> {
        return this.conn.axios.get(`/surah/${target}`, { params: params });
    }

    list(params: SurahListParam): Promise<AxiosResponse<SurahListItemProps[] | ErrorProps>> {
        return this.conn.axios.get(`/surah`, { params: params });
    }

    add(value: SurahPlain): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.post(`/surah`, value);
    }

    edit(target: string, value: SurahPlain): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.post(`/surah/${target}`, value);
    }

    delete(target: string): Promise<AxiosResponse<string | ErrorProps>> {
        return this.conn.axios.delete(`/surah/${target}`);
    }
}

