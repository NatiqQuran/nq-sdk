import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { AccountSendCodeRequestData, AccountVerifyRequestData } from "../types/account";
export declare class ControllerAccount {
    readonly conn: Connection;
    constructor(connection: Connection);
    sendCode(data: AccountSendCodeRequestData): Promise<AxiosResponse<string>>;
    verify(data: AccountVerifyRequestData): Promise<AxiosResponse<string>>;
    logout(): Promise<AxiosResponse<string>>;
}
