import { LangCodeType } from "../utils/langCode.js";
import { Filter, Sajdah, Period, UUID } from "../utils/globalTypes";

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
export interface SurahListRequestParams extends Filter<SorahListSort> {
    mushaf: string;
    lang_code?: string;
}
export interface SurahListResponseItem {
    uuid: UUID;
    number: number;
    period: Period;
    number_of_ayahs: number;
    names: SurahName[];
    search_terms?: string[];
}
export type SurahListResponseData = SurahListResponseItem[];
//Surah View
export interface SurahViewRequestParams {
    format?: "word" | "text";
    langCode?: LangCodeType;
}
export interface SurahViewResponseAyah {
    number: number;
    uuid: UUID;
    sajdah: Sajdah;
    text: string;
    words: string[];
}
export interface SurahViewResponseData {
    uuid: UUID;
    mushaf: {
        uuid: UUID;
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
    ayahs: SurahViewResponseAyah[];
    search_terms?: string[];
}
//Surah Add | Edit
export interface SurahAddRequestData {
    name: string;
    name_pronunciation?: string | null;
    name_translation_phrase?: string | null;
    name_transliteration?: string | null;
    period: Period;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    mushaf_uuid: UUID;
    search_terms?: string[];
}
