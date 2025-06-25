import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { UserAddrequestBody, UserListResponseData } from "../interfaces/user.js";
export declare class ControllerUser {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config: RequestConfig): Promise<AxiosResponse<UserListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<UserListResponseData>>;
    edit(target: UUID, data: UserAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
