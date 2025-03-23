import { LangCodeType } from "../utils/langCode.js";
import { Filter, UUID } from "../utils/globalTypes";

//Translation
interface Translator {
    account_uuid: UUID;
    username: string;
    first_name: string | null;
    last_name: string | null;
}

//Translation List
type TranslationListSort = "language" | "createTime" | "updateTime";
export interface TranslationListRequestParams
    extends Filter<TranslationListSort> {
    mushaf: string;
    language?: LangCodeType;
    translator_account_uuid?: string;
}
type TranslationStatus = "ok" | "notapproved" | "incomplete";
export interface TranslationListResponseItem {
    uuid: UUID;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
    status: TranslationStatus;
    approved: boolean;
    bismillah: string;
    translator: Translator;
}
export type TranslationListResponseData = TranslationListResponseItem[];

//Translation View
export interface TranslationViewRequestParams {
    surah_uuid?: string;
}
interface TranslationViewResponseAyah {
    uuid: UUID;
    text_uuid: UUID;
    number: number;
    surah_number: number;
    text: string;
    bismillah?: string | null;
}
export interface TranslationViewResponseData {
    mushaf_uuid: UUID;
    language: LangCodeType;
    release_date: string | null;
    source: string;
    status: string | null;
    bismillah: string;
    translator: Translator;
    ayahs: TranslationViewResponseAyah[];
}

//Translation Add | Edit
export interface TranslationAddRequestData {
    translator_account_uuid: UUID | null;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
}

//Translation/Ayah
//Translation/Ayah View
export interface TranslationAyahViewRequestParams {
    ayah_uuid: UUID;
}
export interface TranslationAyahViewResponseData {
    uuid: UUID;
    text: string;
    bismillah?: string | null;
    has_bismillah: boolean;
}
//Translation/Text Modify
export interface TranslationAyahModifyRequestData {
    text: string;
    bismillah?: string;
}
