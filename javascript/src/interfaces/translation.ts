import { LangCodeType } from "../langCode";
import Filter from "./filter";

//Translation
interface TranslatorDataProps {
    account_uuid: string;
    username: string;
    first_name: string | null;
    last_name: string | null;
}
//Translation List
export interface TranslationListItemProps {
    uuid: string;
    language: LangCodeType;
    release_date: string | null;
    source: string;
    approved: boolean;
    bismillah: string;
    translator: TranslatorDataProps;
}
export type TranslationListProps = TranslationListItemProps[];
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
    bismillah: string;
    translator: TranslatorDataProps;
    ayahs: AyahInsideTranslationViewProps[];
}

export interface TranslationListParam extends Filter {
    language: LangCodeType;
    mushaf: string;
    translator_account: string | null;
}

export interface TranslationPlain {
    translator_account_uuid: string | null;
    language: LangCodeType;
    release_date: string | null;// TODO: Date
    source: string | null;
}
