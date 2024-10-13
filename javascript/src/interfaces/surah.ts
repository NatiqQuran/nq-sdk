import { LangCodeType } from "../langCode.js";
import { Filter, Sajdah, Period } from "./utils.js";

//Surah
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
    transliteration: string | null;
}
//Surah List
type SorahListSort = "name" | "number" | "createTime" | "updateTime";
export interface SurahListParams extends Filter<SorahListSort> {
    mushaf: string;
}
interface SurahListItem {
    uuid: string;
    number: number;
    period: Period;
    number_of_ayahs: number;
    names: SurahName[];
}
export type SurahListResponseData = SurahListItem[];
//Surah View
export interface SurahViewParams {
    format?: "word" | "text";
    langCode?: LangCodeType;
}
interface SurahViewAyah {
    number: number;
    uuid: string;
    sajdah: Sajdah;
    text: string;
}
export interface SurahViewResponseData {
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
    ayahs: SurahViewAyah[];
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
