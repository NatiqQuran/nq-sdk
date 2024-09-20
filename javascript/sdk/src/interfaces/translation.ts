import { LangCodeType } from "../langCode";

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
    language: string;
    release_date: string | null;
    source: string;
    status: string;
    bismillah_text: string;
    translator: TranslatorInsideTranslationProps;
    ayahs: AyahInsideTranslationViewProps[];
}
