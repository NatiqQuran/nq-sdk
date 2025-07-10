//Word List
interface WordListResponseItem {
    id: number;
    ayah_id: number;
    text: string;
}
export type WordListResponseData = WordListResponseItem[];

//Word View
export interface WordViewRequestParams {
    id: number;
}
export interface WordViewResponseData {
    id: number;
    ayah_id: number;
    text: string;
}

//Word Add
export interface WordAddRequestData {
    text: string;
}
export interface WordAddResponseData {
    id: number;
    ayah_id: number;
    text: string;
}

//Word Edit
export interface WordEditRequestParams {
    id: number;
}
export interface WordEditRequestData {
    text: string;
}
export interface WordEditResponseData {
    id: number;
    ayah_id: number;
    text: string;
}

//Word Update
export interface WordUpdateRequestParams {
    id: number;
}
export interface WordUpdateRequestData {
    text?: string;
}
export interface WordUpdateResponseData {
    id: number;
    ayah_id: number;
    text: string;
}
