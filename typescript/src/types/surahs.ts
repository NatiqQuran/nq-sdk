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
interface SurahsDefaultResponseData {
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
export type SurahsListResponseItem = SurahsDefaultResponseData;
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
export interface SurahsViewResponseData extends SurahsDefaultResponseData {
    ayahs: SurahsViewResponseAyah[];
}

//Surahs Add
export type SurahsAddRequestData = SurahsDefaultRequestData;
export type SurahsAddResponseData = SurahsDefaultResponseData;

//Surahs Edit
export type SurahsEditRequestData = SurahsDefaultRequestData;
export type SurahsEditResponseData = SurahsDefaultResponseData;

//Surahs PartialEdit
export type SurahsPartialEditRequestData = Partial<SurahsDefaultRequestData>;
export type SurahsPartialEditResponseData = SurahsDefaultResponseData;
