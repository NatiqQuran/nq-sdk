import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { UserAddRequestData, UserListResponseData } from "../types/user";
export declare class ControllerUser {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config: RequestConfig): Promise<AxiosResponse<UserListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<UserListResponseData>>;
    edit(target: UUID, data: UserAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
