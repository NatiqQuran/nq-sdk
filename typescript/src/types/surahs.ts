import { Sajdah, Period,ListQueryParams,Status } from "../utils/globalTypes.js";

//Surah

//Surah List
export interface SurahViewRequestParams extends ListQueryParams {
    mushaf: string;
    }
interface MushafDetails {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    Status?:Status;
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
    is_bismillah: boolean;
    bismillah_text: string;
    text: string;

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
    mushaf_uuid:string
    name:string
    number: number;
    period?: Period;
    search_terms?: string[];
}
export interface SurahAddResponseItem {
    uuid: string;
    mushaf: MushafDetails[];
    names: string;
    number: number;
    period?: Period;
    search_terms?: string[];
    number_of_ayahs: string;
}

//Surah Edit
export interface SurahsEditRequestParams {
    uuid: string;
}
export interface SurahsEditRequestData {
    mushaf_uuid:string
    name:string
    number: number;
    period?: Period;
    search_terms?: string[];
}
export interface SurahEditResponseItem {
    uuid: string;
    mushaf: MushafDetails[];
    names: string;
    number: number;
    period?: Period;
    search_terms?: string[];
    number_of_ayahs: string;
}

//Surah Update
export interface SurahsUpdateRequestParams {
    uuid: string;
}
export interface SurahsUpdateRequestData {
    mushaf_uuid?:string
    name?:string
    number?: number;
    period?: Period;
    search_terms?: string[];
}
export interface SurahUpdateResponseItem {
    uuid: string;
    mushaf: MushafDetails[];
    names: string;
    number: number;
    period?: Period;
    search_terms?: string[];
    number_of_ayahs: string;
}
