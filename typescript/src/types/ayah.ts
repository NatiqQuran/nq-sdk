import { Filter, Sajdah, UUID } from "../utils/globalTypes";

//Ayah

//Ayah list
type AyahListSort = "number" | "createTime" | "updateTime";
export interface AyahListRequestParams extends Filter<AyahListSort> {
    mushaf: string;
}
export interface AyahListResponseItem {
    number: number;
    uuid: UUID;
    sajdah: Sajdah;
    text: string;
}
export type AyahListResponseData = AyahListResponseItem[];

//Ayah View
interface AyahViewWord {
    uuid: UUID;
    word: string;
}
export interface AyahViewResponseData {
    uuid: UUID;
    mushaf: string;
    surah: string;
    ayah_number: number;
    sajdah: Sajdah;
    text: string;
    words: AyahViewWord[];
}

//Ayah Add | Edit
export interface AyahAddRequestData {
    surah_uuid: UUID;
    sajdah: Sajdah;
    text: string;
}
