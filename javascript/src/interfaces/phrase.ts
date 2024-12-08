//phrase List
interface PhraseListItem {
    language: string;
    status: string;
}
export type PhraseListResponseData = PhraseListItem[];

//phrase view
export interface PhraseViewResponseData {
    ٱلصَّلَوٰةَ: string;
    ٱللَّهَ: string;
}
//pharse Add/Edit
export interface PhraseAddRequestData {
    phrase: string;
}
