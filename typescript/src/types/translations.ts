
export interface TranslationsAyahResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsAyahRequestParams {
    ayah_uuid?: string;
    surah_uuid?: string;
    translation_uuid?: string;
}
export interface TranslationsAyahRequestData {
    ayah_uuid: string;
    bismillah?: string;
    text: string;
    translation_uuid: string;
    uuid: string;
}
export interface TranslationsImportResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsListResponseData {
}
export interface TranslationsListRequestParams {
    language?: string;
    mushaf_uuid?: string;
    ordering?: string;
    page?: number;
    page_size?: number;
    search?: string;
}
export interface TranslationsCreateRequestData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsCreateResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsRetrieveResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsRetrieveRequestParams {
    surah_uuid?: string;
}
export interface TranslationsUpdateRequestData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsUpdateResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsPartialupdateRequestData {
    language?: string;
    mushaf_uuid?: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid?: string;
    uuid?: string;
}
export interface TranslationsPartialupdateResponseData {
    language: string;
    mushaf_uuid: string;
    release_date?: string;
    source?: string;
    status?: 'draft' | 'pending_review' | 'published';
    translator_uuid: string;
    uuid: string;
}
export interface TranslationsTranslations_ayah_create_2RequestData {
    ayah_uuid: string;
    bismillah?: string;
    text: string;
    translation_uuid: string;
    uuid: string;
}
export interface TranslationsTranslations_ayah_create_2ResponseData {
    ayah_uuid: string;
    bismillah?: string;
    text: string;
    translation_uuid: string;
    uuid: string;
}
export interface TranslationsTranslations_ayah_updateRequestData {
    ayah_uuid: string;
    bismillah?: string;
    text: string;
    translation_uuid: string;
    uuid: string;
}
export interface TranslationsTranslations_ayah_updateResponseData {
    ayah_uuid: string;
    bismillah?: string;
    text: string;
    translation_uuid: string;
    uuid: string;
}