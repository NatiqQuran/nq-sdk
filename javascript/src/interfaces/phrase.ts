//phrase List
interface PhraseListItem {
    language: string;
    status: string;
}
export type PhraseListResponseData = PhraseListItem[];

//phrase view
export interface PhraseViewResponseData {
    [key: string]: string;
}
//pharse Add/Edit
export interface PhraseAddrequestBody {
    phrase: string;
}
