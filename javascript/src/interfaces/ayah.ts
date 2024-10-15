import { Filter, Sajdah } from "./utils.js";

//Ayah

//Ayah list
type AyahListSort = "number" | "createTime" | "updateTime";
export interface AyahListParams extends Filter<AyahListSort> {
    mushaf: string;
}
interface AyahListItem {
    number: string;
    uuid: string;
    sajdah: Sajdah;
    text: string;
}
export type AyahListResponseData = AyahListItem;

//Ayah View
interface AyahViewWords {
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
    words: AyahViewWords[];
}

//Ayah Add | Edit
export interface AyahViewRequestData {
    surah_id: string;
    sajdah: Sajdah;
    ayah_number: number;
}