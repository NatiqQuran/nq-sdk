//Translation List

interface TranslationsListResponseItem {
    id: number;
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
    id: number;
}
export interface TranslationViewResponseData {
    id: number;
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
    id: number;
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
    id: number;
}
export interface TranslationsUpdateRequestData {
    id: number;
    mushaf: number;
    translator: number;
    language: string;
    release_date: string;
    source: string;
    approved: boolean;
}
