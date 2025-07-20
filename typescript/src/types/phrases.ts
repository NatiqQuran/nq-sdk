//Phrases
//Phrases List
interface PhrasesListItem {
    uuid: string;
    phrase: string;
}
export type PhrasesListResponseData = PhrasesListItem[];

//Phrases View
export interface PhrasesViewRequestParams {
    uuid: string;
}
export interface PhrasesViewResponseData {
    uuid: string;
    phrase: string;
}

//Pharses Add
export interface PhrasesAddRequestData {
    phrase: string;
}
export interface PhrasesAddResponseData {
    uuid: string;
    phrase: string;
}

//Phrases Edit
export interface PhrasesEditRequestParams {
    uuid: string;
}
export interface PhrasesEditRequestData {
    phrase: string;
}
export interface PhrasesEditResponseData {
    uuid: string;
    phrase: string;
}

//Phrases Update
export interface PhrasesUpdateRequestParams {
    uuid: string;
}
export interface PhrasesUpdateRequestData {
    phrase?: string;
}
export interface PhrasesUpdateResponseData {
    uuid: string;
    phrase: string;
}

// Phrases Modify
export interface PhrasesModifyRequestParams {
    language:string
}
export interface PhrasesModifyRequestData {
    phrases: {
        [key: string]: string;
    };
}
export interface PhrasesModifyResponseData {
    phrases: {
        [key: string]: string;
    };
}
