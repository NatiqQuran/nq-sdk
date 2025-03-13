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

export class ControllerAccount {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async sendCode(
        data: AccountSendCodeRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/sendCode", data, config);
    }

    async verify(
        data: AccountVerifyRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/verify", data, config);
    }

    async logout(config?: RequestConfig): Promise<AxiosResponse<string>> {
        return this.conn.axios.get("/account/logout", config);
    }
}
