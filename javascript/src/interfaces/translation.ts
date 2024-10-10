import { LangCodeType } from "../langCode";
import { Filter } from "./utils";

//Translation

type TranslationListSort = "language" | "createTime" | "updateTime";

interface Translator {
    account_uuid: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
}
//Translation List
export interface TranslationListParam extends Filter<TranslationListSort> {
    mushaf: string;
    language?: LangCodeType;
    translator_account?: string; //TODO: translator_account_uuid
}
export interface TranslationListItem {
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
interface TranslationViewAyah {
    uuid: string;
    text_uuid: string;
    number: number;
    surah_number: number;
    text: string;
}
export interface TranslationViewProps {
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
export interface TranslationViewRequestData {
    translator_account_uuid: string | null;
    language: LangCodeType;
    release_date: string | null; // TODO: Date
    source: string | null;
}
