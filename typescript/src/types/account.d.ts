//account

export interface AccountSendCodeRequestData {
    email: string;
}
export interface AccountVerifyRequestData {
    email: string;
    code: number;
}
