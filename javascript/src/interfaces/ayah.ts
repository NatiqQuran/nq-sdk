import { Filter, Sajdah, UUID } from "./utils/utils.js";

//Ayah

//Ayah list
type AyahListSort = "number" | "createTime" | "updateTime";
export interface AyahListRequestParameters extends Filter<AyahListSort> {
    mushaf: string;
}
interface AyahListItem {
    number: number;
    uuid: UUID;
    sajdah: Sajdah;
    text: string;
}
export type AyahListResponseData = AyahListItem[];

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
export interface AyahAddrequestBody {
    surah_uuid: UUID;
    sajdah: Sajdah;
    text: string;
}
