//account

export interface AccountSendCodeRequesteData {
    email: string;
}
export interface AccountVerifyRequesteData {
    email: string;
    code: number;
}
