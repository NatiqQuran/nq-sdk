import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { UUID, RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import { AyahListRequestParams, AyahListResponseData, AyahViewResponseData, AyahAddRequestData } from "../types/ayah";
export declare class ControllerAyah {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<AyahListRequestParams>): Promise<AxiosResponse<AyahListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<AyahViewResponseData>>;
    add(data: AyahAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: AyahAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
