import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { PermissionListResponseData, PermissionViewResponseData, PermissionAddRequestData } from "../types/permission";
export declare class ControllerPermission {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<PermissionListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<PermissionViewResponseData>>;
    add(data: PermissionAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: PermissionAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
