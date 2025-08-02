import { Sajdah, Period, MushafShortName } from "../utils/globalTypes.js";

//Surah

//Surah List
interface MushafDetails {
    id: number;
    short_name: MushafShortName;
    name: string;
    source: string;
}
export interface SurahListResponseItem {
    id: number;
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
    id: number;
}
interface SurahViewResponseAyah {
    id: number;
    number: string;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}
export interface SurahViewResponseData {
    id: number;
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
    id: number;
}
export interface SurahsEditRequestData {
    number: number;
    period: Period;
    search_terms?: string[];
}

//Surah Update
export interface SurahsUpdateRequestParams {
    id: number;
}
export interface SurahsUpdateRequestData {
    number?: number;
    period?: Period;
    search_terms?: string[];
}
