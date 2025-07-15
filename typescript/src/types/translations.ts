//Translation List

interface TranslationsListResponseItem {
    uuid: string;
    mushaf: number;
    translator: string;
    language: string;
    release_date: string;
    source: string;
    approved: boolean;
}
export type TranslationsListResponseData = TranslationsListResponseItem[];

//Translation View
export interface TranslationsViewRequestParams {
    uuid: string;
}
export interface TranslationViewResponseData {
    uuid: string;
    mushaf: number;
    translator: string;
    language: string;
    release_date: string;
    source: string;
    approved: boolean;
}

//Translation Add
export interface TranslationsAddRequestData {
    mushaf: number;
    translator: number;
    language: string;
    release_date?: string;
    source?: string;
    approved?: boolean;
}

//Translation Edit
export interface TranslationsEditRequestParams {
    uuid: string;
}
export interface TranslationsEditRequestData {
    mushaf: number;
    translator: number;
    language: string;
    release_date?: string;
    source?: string;
    approved?: boolean;
}

//Translation Update
export interface TrasnlationsUpdateRequestParams {
    uuid: string;
}
export interface TranslationsUpdateRequestData {
    uuid: string;
    mushaf: number;
    translator: number;
    language: string;
    release_date: string;
    source: string;
    approved: boolean;
}
