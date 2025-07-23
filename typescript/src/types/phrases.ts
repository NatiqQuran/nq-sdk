//Phrases

 interface PhrasesDefaultRequestData  { 
    phrase: string;

}
 interface PhrasesDefaultResponseData  { 
    uuid:string;
    phrase: string;

}

//Phrases List

export type PhrasesListResponseData = PhrasesDefaultResponseData

//Phrases View
export type PhrasesViewResponseData = PhrasesDefaultResponseData

//Pharses Add
export type PhrasesAddRequestData = PhrasesDefaultRequestData
export type PhrasesAddResponseData = PhrasesDefaultResponseData

//Phrases Edit
export type PhrasesEditRequestData = PhrasesDefaultRequestData
export type PhrasesEditResponseData = PhrasesDefaultResponseData

//Phrases Partial Edit
export type PhrasesPartialEditRequestData = PhrasesDefaultRequestData
export type PhrasesPartialEditResponseData = PhrasesDefaultResponseData

// Phrases Modify
export interface PhrasesModifyRequestParams {
    language: string;
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
