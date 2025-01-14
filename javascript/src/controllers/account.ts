import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils/utils.js";
import {
    AccountSendCoderequestBody,
    AccountVerifyrequestBody,
} from "../interfaces/account.js";

export class ControllerAccount {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async sendCode(
        data: AccountSendCoderequestBody
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/sendCode", data);
    }

    async verify(
        data: AccountVerifyrequestBody
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post("/account/verify", data);
    }

    async logout(): Promise<AxiosResponse<string>> {
        return this.conn.axios.get("/account/logout");
    }
}
