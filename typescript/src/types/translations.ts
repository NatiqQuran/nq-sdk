import { LangCodeType } from "../utils/langCode.js";
import { Filter, UUID } from "../utils/globalTypes.js";

// //Translation
// interface Translator {
//     account_uuid: UUID;
//     username: string;
//     first_name: string | null;
//     last_name: string | null;
// }

//Translation List

interface TranslationsListResponseItem {
    id: number;
    mushaf: number;
    translator: string;
    language: string;
    release_date: string | null;
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
    release_date: string | null;
    source: string;
    approved: boolean;
}

//Translation Add
export interface TranslationsAddRequestData {
    mushaf: number;
    translator: number;
    language: string;
    release_date?: string | null;
    source?: string;
    approved?: boolean;
}

//Translation Put
export interface TranslationsUpdateRequestParams {
    id: number;
}
export interface TranslationsUpdateRequestData {
    mushaf: number;
    translator: number;
    language: string;
    release_date?: string | null;
    source?: string;
    approved?: boolean;
}

//Translation Patch
export interface TrasnlationsPartialUpdateRequestParams {
    id: number
}
export interface TranslationsPartialUpdateRequestData {
    id: number;
    mushaf: number;
    translator: number;
    language: string;
    release_date: string;
    source: string;
    approved: boolean;
    
}