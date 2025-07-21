import { Sajdah } from "../utils/globalTypes";
import { FilterQueryParams } from "../utils/globalTypes";

//Ayah

// Ayahs List
export interface AyahsListRequestParams extends FilterQueryParams {
    surah_uuid?: string;
}
interface AyahsListResponseItem {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}
export type AyahsListResponseData = AyahsListResponseItem[];

//Ayah View
export interface AyahsViewRequestParams {
    uuid: string;
}
interface SurahInAyah {
    uuid: string;
    names: string;
}
interface Word {
    uuid: string;
    text: string;
}
export interface AyahsViewResponseData {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: SurahInAyah;
    mushaf: string;
    words: Word[];
}

// Ayah Add
export interface AyahsAddRequestData {
    surah_uuid: string;
    text: string;
    is_bismillah?: boolean;
    bismillah_text?: string;
    sajdah?: Sajdah;
}

export interface AyahsAddResponseData {
    surah_uuid: string;
    text: string;
    is_bismillah?: boolean;
    bismillah_text?: string;
    sajdah?: Sajdah;
}

//Ayah Edit | Update
export interface AyahsEditRequestParams {
    uuid: string;
}

export interface AyahsEditRequestData {
    number?: number;
    sajdah?: Sajdah;
}

export interface AyahsEditResponseData {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

export interface AyahsUpdateRequestParams {
    uuid: string;
}

export interface AyahsUpdateRequestData {
    number?: number;
    sajdah?: Sajdah;
}

export interface AyahsUpdateResponseData {
    uuid: string;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

//Ayahs/Traslation
//Ayahs/Traslation List
export interface AyahsTraslationRequestParams extends FilterQueryParams {
    ayah_uuid?: string;
    translation_uuid?: string;
}
interface AyahsTraslationResponseItem {
    uuid: string;
    text: string;
    bismillah?: string;
}
export type AyahsTraslationListResponseData = AyahsTraslationResponseItem[];

//Ayahs/Traslation view
export interface AyahsTraslationViewRequestParams {
    uuid: string;
}
export interface AyahsTraslationViewResponseData {
    uuid: string;
    text: string;
    bismillah?: string;
}

//Ayahs/Traslation Add
export interface AyahsTraslationAddRequestParams {
    ayah_uuid?: string;
    traslation_uuid?: string;
}
export interface AyahsTraslationAddRequestDate {
    traslation_uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}
export interface AyahsTraslationAddResponsetDate {
    uuid: string;
    text: string;
    bismillah?: string;
}
//Ayahs/Traslation Edit
export interface AyahsTraslationEditRequestParams {
    ayah_uuid?: string;
    traslation_uuid?: string;
    uuid: string;
}

export interface AyahsTraslationEditRequestData {
    traslation_uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}
export interface AyahsTraslationEditResponseData {
    uuid: string;
    text: string;
    bismillah?: string;
}

//Ayahs/Traslation Update
export interface AyahsTraslationUpdateRequestParams {
    ayah_uuid?: string;
    traslation_uuid?: string;
    uuid: string;
}

export interface AyahsTraslationUpdateRequestData {
    traslation_uuid?: string;
    ayah_uuid?: string;
    text?: string;
    bismillah?: string;
}
export interface AyahsTraslationUpdateResponseData {
    uuid: string;
    text: string;
    bismillah?: string;
}
