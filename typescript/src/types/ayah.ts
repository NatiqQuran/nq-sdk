import { Filter, Sajdah, UUID } from "../utils/globalTypes";

//Ayah

//Ayah list
type AyahListSort = "number" | "createTime" | "updateTime";
export interface AyahListRequestParams extends Filter<AyahListSort> {
    mushaf: string;
}
interface Breaker {
    name: string;
    number: number;
}
export interface AyahListResponseItem {
    number: number;
    uuid: UUID;
    sajdah: Sajdah;
    text: string;
    words: string[];
    breakers: Breaker;
}
export type AyahListResponseData = AyahListResponseItem[];

//Ayah View
interface SurahName {
    arabic: string;
    translation: string;
    translation_phrase: string;
    pronunciation: string;
    transliteration: string;
}
interface Surah {
    uuid: UUID;
    names: SurahName[];
}
interface AyahViewWord {
    uuid: UUID;
    word: string;
}
export interface AyahViewResponseData {
    uuid: UUID;
    mushaf: string;
    surah: Surah;
    ayah_number: number;
    sajdah: Sajdah;
    text: string;
    words: AyahViewWord[];
}

//Ayah Add
export interface AyahAddRequestData {
    surah_uuid: UUID;
    sajdah: Sajdah;
    text: string;
    is_bismillah: boolean;
    bismillah_text?: string;
}

//Ayah Edit
export interface AyahEditRequestData {
    ayah_number: number;
    sajdah: Sajdah;
    bismillah?: {
        is_ayah: boolean;
        text?: string;
    };
}
