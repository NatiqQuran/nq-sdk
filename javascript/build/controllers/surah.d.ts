import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { SurahListRequestParameters, SurahListResponseData, SurahViewRequestParameters, SurahViewrequestBody, SurahViewResponseData } from "../interfaces/surah.js";
export declare class ControllerSurah {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<SurahListRequestParameters>): Promise<AxiosResponse<SurahListResponseData>>;
    view(target: UUID, config?: RequestConfig<SurahViewRequestParameters>): Promise<AxiosResponse<SurahViewResponseData>>;
    add(data: SurahViewrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: SurahViewrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
