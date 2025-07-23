import { FilterQueryParams } from "../utils/globalTypes";

//Word
interface WordDefaultRequestData {
    ayah_uuid: string;
    text: string;
}

interface WordDefaultResponseData {
    uuid: string;
    text: string;
}


//Word List
export interface WordViewRequestParams extends FilterQueryParams {
    ayah_uuid?: string;
}
export type WordListResponseData = WordDefaultResponseData[];

//Word View
export type WordViewResponseData = WordDefaultResponseData;

//Word Add
export interface WordAddRequestParams {
    ayah_uuid?: string;
}
export type WordAddRequestData = WordDefaultRequestData;
export type WordAddResponseData = WordDefaultResponseData;

//Word Edit
export type WordEditRequestData = WordDefaultRequestData;
export type WordEditResponseData = WordDefaultResponseData;
//Word Partial Edit
export type WordPartialEditRequestData = Partial<WordDefaultRequestData>;
export interface WordPartialEditResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}
