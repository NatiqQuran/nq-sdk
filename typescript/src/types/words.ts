import { FilterQueryParams } from "../utils/globalTypes";
//Word
//Word List
export interface WordViewRequestParams extends FilterQueryParams {
    ayah_uuid?: string;
}
interface WordListResponseItem {
    uuid: string;
    text: string;
}
export type WordListResponseData = WordListResponseItem[];

//Word View
export interface WordViewRequestParams {
    uuid: string;
}
export interface WordViewResponseData {
    uuid: string;
    text: string;
}

//Word Add
export interface WordAddRequestData {
    ayah_uuid?: string;
}
export interface WordAddResponseData {
    ayah_uuid: string;
    text: string;
}
export interface WordAddResponseData {
    uuid: string;
    text: string;
}

//Word Edit
export interface WordEditRequestParams {
    uuid: string;
}
export interface WordEditRequestData {
    ayah_uuid: string;
    text: string;
}
export interface WordEditResponseData {
    uuid: string;
    text: string;
}
//Word Update
export interface WordUpdateRequestParams {
    uuid: string;
}
export interface WordUpdateRequestData {
    ayah_uuid?: string;
    text?: string;
}
export interface WordUpdateResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}
