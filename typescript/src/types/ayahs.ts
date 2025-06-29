import { Sajdah } from "../utils/globalTypes";

//Ayah

// Ayahs List
export interface AyahsListRequestParams {
    surah_id?: number;
}
interface AyahsListResponseItem {
    id: number;
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
    id: number;
}
interface SurahInAyah {
    id: number;
    names: string;
}
interface Word {
    id: number;
    ayah_id: number;
    text: string;
}
export interface AyahsViewResponseData {
    id: number;
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
    surah_id: number;
    text: string;
    is_bismillah?: boolean;
    bismillah_text?: string;
    sajdah?: Sajdah;
}

export interface AyahsAddResponseData {
    id: number;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

//Ayah Edit | Update
export interface AyahsEditRequestParams {
    id: number;
}

export interface AyahsEditRequestData {
    number?: number;
    sajdah?: Sajdah;
}

export interface AyahsEditResponseData {
    id: number;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

export interface AyahsUpdateRequestParams {
    id: number;
}

export interface AyahsUpdateRequestData {
    number?: number;
    sajdah?: Sajdah;
}

export interface AyahsUpdateResponseData {
    id: number;
    number: number;
    sajdah: Sajdah;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

//Ayahs/Traslation
//Ayahs/Traslation List
interface AyahsTraslationResponseItem {
    id: number;
    traslation_id: number;
    ayah_id: number;
    text: string;
    bismillah?: string;
}
export type AyahsTraslationListResponseData = AyahsTraslationResponseItem[];

//Ayahs/Traslation view
export interface AyahsTraslationViewRequestParams {
    id: number;
}
export interface AyahsTraslationViewResponseData {
    id: number;
    traslation_id: number;
    ayah_id: number;
    text: string;
    bismillah?: string;
}

//Ayahs/Traslation Add
export interface AyahsTraslationAddRequestData {
    text: string;
    bismillah?: string;
}
//Ayahs/Traslation Edit
export interface AyahsTraslationEditRequestParams {
    id: number;
}

export interface AyahsTraslationEditRequestData {
    text: string;
    bismillah?: string;
}
export interface AyahsTraslationEditResponseData {
    id: number;
    traslation_id: number;
    ayah_id: number;
    text: string;
    bismillah?: string;
}
export interface AyahsTraslationUpdateRequestParams {
    id: number;
}

export interface AyahsTraslationUpdateRequestData {
    text?: string;
    bismillah?: string;
}
export interface AyahsTraslationUpdateResponseData {
    id: number;
    traslation_id: number;
    ayah_id: number;
    text: string;
    bismillah?: string;
}
