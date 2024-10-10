import { LangCodeType } from "../langCode";
import Filter from "./filter";

//Surah
interface SurahName {
    arabic: string;
    pronunciation: string | null;
    translation_phrase: string | null;
    translation: string | null;
    transliteration: string | null;
}
//Surah List
export interface SurahListParam extends Filter {
    mushaf: string;
    lang_code?: LangCodeType;
}
export interface SurahListItem {
    uuid: string;
    number: number;
    period: "makki" | "madani" | null;
    number_of_ayahs: number;
    names: SurahName[];
}
export type SurahListResponseData = SurahListItem[];
//Surah Vew
export interface SurahViewParam {
    format?: "word" | "text";
    langCode?: LangCodeType;
}
interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdah: "vajib" | "mustahab" | null;
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
    period: "makki" | "madani" | null;
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
    period: "makki" | "madani" | null;
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    mushaf_uuid: string;
}
