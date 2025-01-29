import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { MushafListRequestParameters, MushafListResponseData, MushafViewResponseData, MushafAddRequestData } from "../types/mushaf";
export declare class ControllerMushaf {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config: RequestConfig<MushafListRequestParameters>): Promise<AxiosResponse<MushafListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<MushafViewResponseData>>;
    add(data: MushafAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: MushafAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
