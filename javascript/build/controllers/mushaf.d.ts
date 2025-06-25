import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { MushafListRequestParameters, MushafListResponseData, MushafViewResponseData, MushafAddRequestBody } from "../interfaces/mushaf.js";
export declare class ControllerMushaf {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config: RequestConfig<MushafListRequestParameters>): Promise<AxiosResponse<MushafListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<MushafViewResponseData>>;
    add(data: MushafAddRequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: MushafAddRequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
