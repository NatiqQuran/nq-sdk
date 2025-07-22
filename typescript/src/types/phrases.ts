import { FilterQueryParams } from "../utils/globalTypes";

//Phrases
export type PhrasesDefaultRequestParams = {
    uuid: string;
}
export type PhrasesDefaultRequestData = { 
    phrase: string;

}
export type PhrasesDefaultResponseData = { 
    uuid:string;
    phrase: string;

}

//Phrases List

export type PhrasesListResponseData = PhrasesDefaultResponseData

//Phrases View
export type PhrasesViewRequestParams =PhrasesDefaultRequestParams
export type PhrasesViewResponseData = PhrasesDefaultResponseData

//Pharses Add
export type PhrasesAddRequestData = PhrasesDefaultRequestData
export type PhrasesAddResponseData = PhrasesDefaultResponseData

//Phrases Edit
export type PhrasesEditRequestParams = PhrasesDefaultRequestParams
export type PhrasesEditRequestData = PhrasesDefaultRequestData
export type PhrasesEditResponseData = PhrasesDefaultResponseData

//Phrases Partial Edit
export type PhrasesPartialEditRequestParams = PhrasesDefaultRequestParams
export type PhrasesPartialEditRequestData = PhrasesDefaultRequestData
export type PhrasesPartialEditResponseData = PhrasesDefaultResponseData

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
