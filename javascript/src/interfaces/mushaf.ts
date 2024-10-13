import { Filter } from "./utils.js";

//Mushaf

//Mushaf List
type MushafListSort = "name" | "createTime" | "updateTime";
export interface MushafListParams extends Filter<MushafListSort> {}
interface MushafListItem {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListResponseData = MushafListItem[];

//Mushaf View
export interface MushafViewRequestData {
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
export interface MushafViewResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
