import { LangCodeType } from "../langCode";
import Filter from "./filter";

//Surah
interface SurahName {
    arabic: string;
    pronunciation?: string;
    translation_phrase?: string;
    translation?: string;
}
//Surah List
interface SurahInListProps {
    uuid: string;
    number: number;
    period?: "makki" | "madani";
    number_of_ayahs: number;
    name: SurahName[];
}
export type SurahListProps = SurahInListProps[];
//Surah View
interface AyahInsideSurahViewProps {
    number: number;
    uuid: string;
    sajdeh?: "vajib" | "mustahab";
    text: string;
}
export interface SurahViewProps {
    uuid: string;
    mushaf_uuid: string;
    mushaf_name: string;
    name: SurahName[];
    period?: "makki" | "madani";
    number: number;
    bismillah_status: boolean;
    bismillah_as_first_ayah: boolean;
    bismillah_text?: string;
    number_of_ayahs: number;
    ayahs: AyahInsideSurahViewProps[];
}
export interface SurahViewParam {
    format: "word" | "text";
    langCode?: LangCodeType;
}
export interface SurahListParam extends Filter {
    lang_code?: LangCodeType;
    mushaf: string;
}

export interface SurahPlain {
    name: String,
    name_pronunciation?: string,
    name_translation_phrase?: String,
    name_transliteration?: String,
    period?: "makki" | "madani";
    number: number,
    bismillah_status: boolean,
    bismillah_as_first_ayah: boolean,
    mushaf_uuid: string,
}
