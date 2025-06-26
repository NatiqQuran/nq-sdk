import { Sajdah } from "../utils/globalTypes";

//Ayah

// Ayahs List
export interface AyahsListRequestParams {
  surah_id?: number;
}
export interface AyahsListResponseItem {
  id: number;
  number: number;
  sajdah: Sajdah | null;
  text: string;
  breakers: string;
  bismillah: string;
  surah: string;
}
export type AyahsListResponseData = AyahsListResponseItem[];
  
//Ayah View
export interface AyahsRetrieveRequestParams {
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
  export interface AyahsRetrieveResponseData {
    id: number;
    number: number;
    sajdah: Sajdah | null;
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
  bismillah_text?: string | null;
  sajdah?: Sajdah | null;
}

export interface AyahsAddResponseData {
    id: number;
    number: number;
    sajdah: Sajdah | null;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

//Ayah Put | Patch
export interface AyahsUpdateRequestParams {
    id: number;
  }

export interface AyahsUpdateRequestData {
    number?: number;
    sajdah?: Sajdah | null;
  }

export interface AyahsUpdateResponseData {
    id: number;
    number: number;
    sajdah: Sajdah | null;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}

export interface AyahsPartialUpdateRequestParams {
    id: number;
}

export interface AyahsPartialUpdateRequestData {
    number?: number;
    sajdah?: Sajdah | null;
}

export interface AyahsPartialUpdateResponseData {
    id: number;
    number: number;
    sajdah: Sajdah | null;
    text: string;
    breakers: string;
    bismillah: string;
    surah: string;
}
