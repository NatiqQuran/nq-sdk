import { LangCodeType } from "../langCode.js";
import { Filter, UUID } from "./utils/utils.js";

//Translation
interface Translator {
    account_uuid: UUID;
    username: string;
    first_name: string | null;
    last_name: string | null;
}

//Translation List
type TranslationListSort = "language" | "createTime" | "updateTime";
export interface TranslationListRequestParameters
    extends Filter<TranslationListSort> {
    mushaf: string;
    language?: LangCodeType;
    translator_account?: string; //TODO: translator_account_uuid
}
interface TranslationListItem {
    uuid: UUID;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
    approved: boolean;
    bismillah: string;
    translator: Translator;
}
export type TranslationListResponseData = TranslationListItem[];

//Translation View
export interface TranslationViewRequestParameters {
    surah_uuid?: string;
}
interface TranslationViewAyah {
    uuid: UUID;
    text_uuid: UUID;
    number: number;
    surah_number: number;
    text: string;
}
export interface TranslationViewResponseData {
    mushaf_uuid: UUID;
    language: LangCodeType;
    release_date: string | null;
    source: string;
    status: string;
    bismillah: string;
    translator: Translator;
    ayahs: TranslationViewAyah[];
}

//Translation Add | Edit
export interface TranslationAddrequestBody {
    translator_account_uuid: UUID | null;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
}

//Translation/Text
//Translation/Text View
export interface TranslationTextViewRequestParameters {
    ayah_uuid: UUID;
}
export interface TranslationTextViewResponseData {
    uuid: UUID;
    text: string;
}
//Translation/Text Modify
export interface TranslationTextModifyrequestBody {
    text: string;
}
