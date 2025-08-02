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

// Ayah Translation Types
export interface AyahTranslationListResponseData {
    uuid: string;
    translation_uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}

export interface AyahTranslationViewRequestParams {
    uuid: string;
}

export interface AyahTranslationViewResponseData {
    uuid: string;
    translation_uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}

export interface AyahTranslationAddRequestData {
    ayah_uuid: string;
    translation_uuid: string;
    text: string;
    bismillah?: string;
}

export interface AyahTranslationEditRequestParams {
    uuid: string;
}

export interface AyahTranslationEditRequestData {
    ayah_uuid: string;
    translation_uuid: string;
    text: string;
    bismillah?: string;
}

export interface AyahTranslationUpdateRequestParams {
    uuid: string;
}

export interface AyahTranslationUpdateRequestData {
    ayah_uuid?: string;
    translation_uuid?: string;
    text?: string;
    bismillah?: string;
}
