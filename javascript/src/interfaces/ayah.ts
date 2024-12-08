import { Filter, Sajdah } from "./utils.js";

//Ayah

//Ayah list
type AyahListSort = "number" | "createTime" | "updateTime";
export interface AyahListParams extends Filter<AyahListSort> {
    mushaf: string;
}
interface AyahListItem {
    number: number;
    uuid: string;
    sajdah: Sajdah;
    text: string;
}
export type AyahListResponseData = AyahListItem[];

//Ayah View
interface AyahViewWord {
    uuid: string;
    word: string;
}
export interface AyahViewResponseData {
    uuid: string;
    mushaf: string;
    surah: string;
    ayah_number: number;
    sajdah: Sajdah;
    text: string;
    words: AyahViewWord[];
}

//Ayah Add | Edit
export interface AyahAddRequestData {
    surah_uuid: string;
    sajdah: Sajdah;
    ayah_number: number;
}
