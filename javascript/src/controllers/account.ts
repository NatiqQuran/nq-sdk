import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    AccountSendCodeRequesteData,
    AccountVerifyRequesteData,
} from "../interfaces/account.js";

export class ControllerAccount {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }
    sendCode(
        data: AccountSendCodeRequesteData
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/sendCode", data);
    }
    verify(data: AccountVerifyRequesteData): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/verify", data);
    }
    logout(): Promise<AxiosResponse<string>> {
        return this.conn.axios.get("/account/logout");
    }
}