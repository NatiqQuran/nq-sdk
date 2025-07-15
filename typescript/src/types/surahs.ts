import { Sajdah, Period } from "../utils/globalTypes.js";

//Surah

//Surah List
interface MushafDetails {
uuid: string;
    short_name: string;
    name: string;
    source: string;
}
export interface SurahListResponseItem {
uuid: string;
    mushaf: MushafDetails[];
    names: string;
    number: number;
    period?: Period;
    search_terms?: string[];
    number_of_ayahs: string;
}
export type SurahListResponseData = SurahListResponseItem[];

//Surah View
export interface SurahViewRequestParams {
uuid: string;
}
interface SurahViewResponseAyah {
uuid: string;
    number: string;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}
export interface SurahViewResponseData {
uuid: string;
    mushaf: MushafDetails[];
    names: string;
    number: number;
    period: Period;
    search_terms?: string[];
    number_of_ayahs: number;
    ayahs: SurahViewResponseAyah[];
}

//Surah Add
export interface SurahAddRequestData {
    number: number;
    period: Period;
    search_terms?: string[];
}

//Surah Edit
export interface SurahsEditRequestParams {
uuid: string;
}
export interface SurahsEditRequestData {
    number: number;
    period: Period;
    search_terms?: string[];
}

//Surah Update
export interface SurahsUpdateRequestParams {
uuid: string;
}
export interface SurahsUpdateRequestData {
    number?: number;
    period?: Period;
    search_terms?: string[];
}
