import { Filter, UUID } from "../utils/globalTypes";

//Mushaf

//Mushaf List
type MushafListSort = "name" | "createTime" | "updateTime";
export interface MushafListRequestParameters extends Filter<MushafListSort> {}
export interface MushafListResponseItem {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListResponseData = MushafListResponseItem[];

//Mushaf View
export interface MushafViewResponseData {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
//Mushaf Add | Edit
export interface MushafAddRequestData {
    short_name: string;
    name: string;
    source: string;
}
