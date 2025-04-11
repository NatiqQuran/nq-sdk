import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import { UserAddRequestData, UserListResponseData } from "../types/user";
import { BaseController } from "../utils/baseController";

export class ControllerUser extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config: RequestConfig
    ): Promise<AxiosResponse<UserListResponseData>> {
        return await this.axiosGet(`/user`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<UserListResponseData>> {
        return await this.axiosGet(`/user/${target}`, config);
    }
    
    async edit(
        target: UUID,
        data: UserAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/user/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/user/${target}`, config);
    }
}
