import { LangCodeType } from "../langCode";
import { Filter, Sajdah, Period } from "./utils";

//Surah
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
    transliteration: string | null;
}
//Surah List
export interface SurahListParam
    extends Filter<"name" | "number" | "createTime" | "updateTime"> {
    mushaf: string;
}
export interface SurahListItem {
    uuid: string;
    number: number;
    period: Period;
    number_of_ayahs: number;
    names: SurahName[];
}
export type SurahListResponseData = SurahListItem[];
//Surah View
export interface SurahViewParam {
    format?: "word" | "text";
    langCode?: LangCodeType;
}
interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdah: Sajdah;
    text: string;
}
export interface SurahViewProps {
    uuid: string;
    mushaf: {
        uuid: string;
        short_name: string | null;
        name: string | null;
        source: string | null;
    };
    names: SurahName[];
    period: Period;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text: string | null;
    number_of_ayahs: number;
    ayahs: AyahInsideSurahViewProps[];
}
//Surah Add | Edit
export interface SurahViewRequestData {
    name: String;
    name_pronunciation: string | null;
    name_translation_phrase: string | null;
    name_transliteration: string | null;
    period: Period;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    mushaf_uuid: string;
}
