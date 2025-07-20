import {
    Sajdah,
    Period,
    ListQueryParams,
    Status,
} from "../utils/globalTypes.js";

//Surahs
interface SurahsDefaultResponseItem {
    uuid: string;
    mushaf: {
        uuid: string;
        short_name: string;
        name: string;
        source?: string;
        Status?: Status;
    }[];
    names: {
        name: string;
        name_pronunciation: string | null;
        name_translation: string | null;
        name_transliteration: string | null;
    }[];
    number: number;
    period?: Period;
    search_terms?: string[];
    number_of_ayahs: number;
}
//Surahs List
export interface SurahsListRequestParams extends ListQueryParams {
    mushaf: string;
}
export type SurahsListResponseItem = SurahsDefaultResponseItem;
export type SurahsListResponseData = SurahsListResponseItem[];

//Surahs View
interface SurahsViewResponseAyah {
    uuid: string;
    number: string;
    sajdah: Sajdah;
    is_bismillah: boolean;
    bismillah_text: string;
    text: string;
}
export interface SurahsViewResponseData extends SurahsDefaultResponseItem {
    ayahs: SurahsViewResponseAyah[];
}

//Surahs Add
export interface SurahsAddRequestData {
    mushaf_uuid: string;
    name: string;
    number: number;
    period?: Period;
    search_terms?: string[];
}
export type SurahsAddResponseData = SurahsDefaultResponseItem;

//Surahs Edit
export interface SurahsEditRequestData {
    mushaf_uuid: string;
    name: string;
    number: number;
    period?: Period;
    search_terms?: string[];
}
export type SurahsEditResponseData = SurahsDefaultResponseItem;

//Surahs Update
export interface SurahsUpdateRequestData {
    mushaf_uuid?: string;
    name?: string;
    number?: number;
    period?: Period;
    search_terms?: string[];
}
export type SurahsUpdateResponseData = SurahsDefaultResponseItem;
