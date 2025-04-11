import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
import {
    AccountSendCodeRequestData,
    AccountVerifyRequestData,
} from "../types/account";
import { BaseController } from "../utils/baseController";

export class ControllerAccount extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async sendCode(
        data: AccountSendCodeRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/account/sendCode", data, config);
    }

    async verify(
        data: AccountVerifyRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return await this.axiosPost("/account/verify", data, config);
    }

    async logout(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return await this.axiosGet("/account/logout", config);
    }
}
