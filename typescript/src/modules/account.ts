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
        data: AccountSendCodeRequestData
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/sendCode", data);
    }

    async verify(
        data: AccountVerifyRequestData
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/verify", data);
    }

    async logout(): Promise<AxiosResponse<string>> {
        return this.conn.axios.get("/account/logout");
    }
}
