import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { PermissionListResponseData, PermissionAddrequestBody, PermissionViewResponseData, PermissionEditrequestBody } from "../interfaces/permission.js";
export declare class ControllerPermission {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<PermissionListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<PermissionViewResponseData>>;
    add(data: PermissionAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: PermissionEditrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
