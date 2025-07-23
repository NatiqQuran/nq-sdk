import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig } from "../utils/globalTypes";
import {
    AuthLoginRequestData,
    AuthRegisterRequestData,
    AuthRegisterResponseData,
} from "../types/auths";

export class ControllerAuth extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async login(
        data: AuthLoginRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/auth/login/", data, config);
    }

    async register(
        data: AuthRegisterRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<AuthRegisterResponseData>> {
        return await this.axiosPost("/auth/register/", data, config);
    }

    async logout(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/auth/logout/", {}, config);
    }

    async logoutAll(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/auth/logoutall/", {}, config);
    }
}
