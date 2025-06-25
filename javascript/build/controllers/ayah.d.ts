import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { UUID, RequestConfig, DefaultResponseData } from "../interfaces/utils/utils.js";
import { AyahListRequestParameters, AyahListResponseData, AyahViewResponseData, AyahAddrequestBody } from "../interfaces/ayah.js";
export declare class ControllerAyah {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<AyahListRequestParameters>): Promise<AxiosResponse<AyahListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<AyahViewResponseData>>;
    add(data: AyahAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: AyahAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
