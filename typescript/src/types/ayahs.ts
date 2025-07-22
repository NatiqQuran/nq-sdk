import { Sajdah, FilterQueryParams } from "../utils/globalTypes";

// Ayahs
interface AyahsDefaultRequestData {
    surah_uuid: string;
    text: string;
    is_bismillah?: boolean;
    bismillah_text?: string;
    sajdah?: Sajdah;
}
interface AyahsDefaultResponseData {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

// Ayahs List
export interface AyahsListRequestParams extends FilterQueryParams {
    surah_uuid?: string;
}
export type AyahsListResponseItem = AyahsDefaultResponseData;
export type AyahsListResponseData = AyahsListResponseItem[];

// Ayahs View
export interface AyahsViewRequestParams {
    uuid: string;
}
export type AyahsViewResponseData = AyahsDefaultResponseData & {
    mushaf: string;
    words: { uuid: string; text: string }[];
};

// Ayahs Add
export type AyahsAddRequestData = AyahsDefaultRequestData;
export type AyahsAddResponseData = AyahsDefaultResponseData;

// Ayahs Edit
export type AyahsEditRequestData = AyahsDefaultRequestData;
export type AyahsEditResponseData = AyahsDefaultResponseData;

// Ayahs PartialEdit
export interface AyahsPartialEditRequestParams {
    uuid: string;
}
export type AyahsPartialEditRequestData = Partial<AyahsDefaultRequestData>;
export type AyahsPartialEditResponseData = AyahsDefaultResponseData;

// Ayahs Translation
interface AyahsTranslationDefaultRequestData {
    translation_uuid?: string;
    ayah_uuid?: string;
    text: string;   
    bismillah?: string;
}
interface AyahsTranslationDefaultResponseItem{
    uuid: string;
    text: string;   
    bismillah?: string;
}
 // Ayahs Translation List
export interface AyahsTranslationListRequestParams extends FilterQueryParams {
    ayah_uuid?: string;
    translation_uuid?: string;
}
export type AyahsTranslationListResponseItem =  AyahsTranslationDefaultResponseItem;
export type AyahsTranslationListResponseData = AyahsTranslationListResponseItem;

// Ayahs Translation View
export interface AyahsTranslationViewRequestParams {
    uuid: string;
}
export type AyahsTranslationViewResponseData = AyahsTranslationDefaultResponseItem; 
export type AyahsTranslationAddRequestData = AyahsTranslationDefaultRequestData;
export type AyahsTranslationAddResponseData = AyahsTranslationDefaultResponseItem;

// Ayahs Translation Edit
export interface AyahsTranslationEditRequestParams {
    uuid: string;
}
export type AyahsTranslationEditRequestData = AyahsTranslationDefaultRequestData;
export type AyahsTranslationEditResponseData = AyahsTranslationDefaultResponseItem;

// Ayahs Translation Partial Edit
export type AyahsTranslationPartialEditRequestData = Partial<AyahsTranslationDefaultRequestData>;
export type AyahsTranslationPartialEditResponseData = AyahsTranslationDefaultResponseItem;
