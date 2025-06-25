import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { AccountSendCoderequestBody, AccountVerifyrequestBody } from "../interfaces/account.js";
export declare class ControllerAccount {
    readonly conn: Connection;
    constructor(connection: Connection);
    sendCode(data: AccountSendCoderequestBody): Promise<AxiosResponse<string>>;
    verify(data: AccountVerifyrequestBody): Promise<AxiosResponse<string>>;
    logout(): Promise<AxiosResponse<string>>;
}
