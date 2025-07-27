import { Sajdah, FilterQueryParams } from "../utils/globalTypes";

// Ayahs
interface AyahsDefaultRequestData {
    surah_uuid: string;
    text: string;
    is_bismillah?: boolean;
    bismillah_text?: string;
    sajdah?: Sajdah;
}
interface AyahsDefaultResponseData {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

// Ayahs List
export interface AyahsListRequestParams extends FilterQueryParams {
    surah_uuid?: string;
}
export type AyahsListResponseItem = AyahsDefaultResponseData;
export type AyahsListResponseData = AyahsListResponseItem[];

// Ayahs View
export type AyahsViewResponseData = AyahsDefaultResponseData & {
    mushaf: string;
    words: { uuid: string; text: string }[];
};

// Ayahs Add
export type AyahsAddRequestData = AyahsDefaultRequestData;
export type AyahsAddResponseData = AyahsDefaultResponseData;

// Ayahs Edit
export type AyahsEditRequestData = AyahsDefaultRequestData;
export type AyahsEditResponseData = AyahsDefaultResponseData;

// Ayahs PartialEdit
export type AyahsPartialEditRequestData = Partial<AyahsDefaultRequestData>;
export type AyahsPartialEditResponseData = AyahsDefaultResponseData;
