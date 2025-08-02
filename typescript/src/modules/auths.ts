import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig } from "../utils/globalTypes";
import {
    AuthLoginRequestData,
    AuthRegisterRequestData,
    AuthRegisterResponseData,
} from "../types/auths";
import { BaseController } from "../utils/baseController";

// Logout Action Class for Auth
export class AuthLogoutAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async create(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/auth/logout/", {}, config);
    }

    async createAll(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/auth/logoutall/", {}, config);
    }
}

export class AuthController extends BaseController {
    public logout: AuthLogoutAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.logout = new AuthLogoutAction(connection, token);
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
}
