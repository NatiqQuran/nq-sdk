import { FilterQueryParams, Status } from "../utils/globalTypes";
//Translation
//Translation List
export interface TranslationsListRequestParams extends FilterQueryParams {
    language: string;
    mushaf_uuid: string;
}
interface TranslationsListResponseItem {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
export type TranslationsListResponseData = TranslationsListResponseItem[];

//Translation View
export interface TranslationViewResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}

//Translation Add
export interface TranslationsAddRequestData {
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
export interface TranslationAddResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}

//Translation Edit
export interface TranslationsEditRequestData {
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
export interface TranslationEditResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
//Translation Update
export interface TranslationsUpdateRequestData {
    language?: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
export interface TranslationUpdateResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
