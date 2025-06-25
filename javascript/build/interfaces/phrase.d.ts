interface PhraseListItem {
    language: string;
    status: string;
}
export type PhraseListResponseData = PhraseListItem[];
export interface PhraseViewResponseData {
    [key: string]: string;
}
export interface PhraseAddrequestBody {
    phrase: string;
}
export {};
