import { LangCodeType } from "../langCode";
import Filter from "./filter";

//Translation
interface TranslatorInsideTranslationProps {
    account_uuid: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
}
//Translation List
interface TranslationInListProps {
    uuid: string;
    language: LangCodeType;
    release_date: string | null;
    source: string;
    approved: boolean;
    bismillah_text: string;
    translator: TranslatorInsideTranslationProps;
}
export type TranslationListProps = TranslationInListProps[];
//Translation View
interface AyahInsideTranslationViewProps {
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
    bismillah_text: string;
    translator: TranslatorInsideTranslationProps;
    ayahs: AyahInsideTranslationViewProps[];
}

export interface TranslationViewParam {
    surah_uuid: string;
}

export interface TranslationListParam extends Filter {
    language: LangCodeType;
    mushaf: string;
    translator_account?: string;
}

export interface TranslationPlain {
    translator_account_uuid?: string;
    language: LangCodeType;
    release_date?: string;// TODO: Date
    source?: string;
}
