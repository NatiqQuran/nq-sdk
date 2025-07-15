//Word List
interface WordListResponseItem {
    uuid: string;
    ayah_uuid: string;
    text: string;
}
export type WordListResponseData = WordListResponseItem[];

//Word View
export interface WordViewRequestParams {
    uuid: string;
}
export interface WordViewResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}

//Word Add
export interface WordAddRequestData {
    text: string;
}
export interface WordAddResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}

//Word Edit
export interface WordEditRequestParams {
    uuid: string;
}
export interface WordEditRequestData {
    text: string;
}
export interface WordEditResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}

//Word Update
export interface WordUpdateRequestParams {
    uuid: string;
}
export interface WordUpdateRequestData {
    text?: string;
}
export interface WordUpdateResponseData {
    uuid: string;
    ayah_uuid: string;
    text: string;
}
