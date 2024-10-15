import { LangCodeType } from "../langCode.js";
import { Filter } from "./utils.js";

//Translation
interface Translator {
    account_uuid: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
}

//Translation List
type TranslationListSort = "language" | "createTime" | "updateTime";
export interface TranslationListParams extends Filter<TranslationListSort> {
    mushaf: string;
    language?: LangCodeType;
    translator_account?: string; //TODO: translator_account_uuid
}
interface TranslationListItem {
    uuid: string;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
    approved: boolean;
    bismillah: string;
    translator: Translator;
}
export type TranslationListResponseData = TranslationListItem[];

//Translation View
export interface TranslationViewParams {
    surah_uuid?: string;
}
interface TranslationViewAyah {
    uuid: string;
    text_uuid: string;
    number: number;
    surah_number: number;
    text: string;
}
export interface TranslationViewResponseData {
    mushaf_uuid: string;
    language: LangCodeType;
    release_date: string | null;
    source: string;
    status: string;
    bismillah: string;
    translator: Translator;
    ayahs: TranslationViewAyah[];
}

//Translation Add | Edit
export interface TranslationAddRequestData {
    translator_account_uuid: string | null;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
}

//Translation/Text
//Translation/Text View
export interface TranslationTextViewParams {
    ayah_uuid: string;
}
export interface TranslationTextViewResponseData {
    uuid: string;
    text: string;
}
//Translation/Text Modify
export interface TranslationTextModifyRequestData {
    text: string;
}
