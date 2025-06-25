import { LangCodeType } from "../langCode.js";
import { Filter, Sajdah, Period, UUID } from "./utils/utils.js";
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
    transliteration: string | null;
}
type SorahListSort = "name" | "number" | "createTime" | "updateTime";
export interface SurahListRequestParameters extends Filter<SorahListSort> {
    mushaf: string;
    lang_code?: string;
}
interface SurahListItem {
    uuid: UUID;
    number: number;
    period: Period;
    number_of_ayahs: number;
    names: SurahName[];
}
export type SurahListResponseData = SurahListItem[];
export interface SurahViewRequestParameters {
    format?: "word" | "text";
    langCode?: LangCodeType;
}
interface SurahViewAyah {
    number: number;
    uuid: UUID;
    sajdah: Sajdah;
    text: string;
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
    ayahs: SurahViewAyah[];
}
export interface SurahViewrequestBody {
    name: string;
    name_pronunciation: string | null;
    name_translation_phrase: string | null;
    name_transliteration: string | null;
    period: Period;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    mushaf_id: UUID;
}
export {};
