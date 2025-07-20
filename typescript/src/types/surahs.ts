import {
    Sajdah,
    Period,
    Status,
    FilterQueryParams,
} from "../utils/globalTypes.js";

//Surahs
interface SurahsDefaultRequestData {
    mushaf_uuid: string;
    name: string;
    number: number;
    period?: Period;
    search_terms?: string[];
}
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
export interface SurahsListRequestParams extends FilterQueryParams {
    mushaf: string;
}
export type SurahsListResponseItem = SurahsDefaultResponseItem;
export type SurahsListResponseData = SurahsListResponseItem[];

//Surahs View
export interface SurahsViewResponseAyah {
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
export type SurahsAddRequestData = SurahsDefaultRequestData;
export type SurahsAddResponseData = SurahsDefaultResponseItem;

//Surahs Edit
export type SurahsEditRequestData = SurahsDefaultRequestData;
export type SurahsEditResponseData = SurahsDefaultResponseItem;

//Surahs Update
export type SurahsUpdateRequestData = Partial<SurahsDefaultRequestData>;
export type SurahsUpdateResponseData = SurahsDefaultResponseItem;
