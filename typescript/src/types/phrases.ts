//phrase List
interface PhrasesListItem {
    id: number;
    phrase: string;
}
export type PhraseListResponseData = PhrasesListItem[];

//phrase view
export interface PhrasesRetrieveRequestParams {
    id: number
}
export interface PhraseViewResponseData {
    id: number;
    phrase: string
}

//pharse Add
export interface PhraseAddRequestData {
    phrase: string;
}

//Phrase Put
export interface PhrasesUpdateRequestParams {
    id: number
}
export interface PhraseUpdateRequestData {
    phrase: string
}

//Phrase Patch
export interface PhrasesPartialUpdateRequestParams {
    id: number
}
export interface PhrasePartialUpdateRequestData {
    phrase?: string
}