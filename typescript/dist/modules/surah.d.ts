import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { SurahListRequestParams, SurahListResponseData, SurahViewRequestParams, SurahViewResponseData, SurahAddRequestData } from "../types/surah";
export declare class ControllerSurah {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<SurahListRequestParams>): Promise<AxiosResponse<SurahListResponseData>>;
    view(target: UUID, config?: RequestConfig<SurahViewRequestParams>): Promise<AxiosResponse<SurahViewResponseData>>;
    add(data: SurahAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: SurahAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
