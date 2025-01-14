import { Filter, UUID } from "./utils/utils.js";

//Mushaf

//Mushaf List
type MushafListSort = "name" | "createTime" | "updateTime";
export interface MushafListRequestParameters extends Filter<MushafListSort> {}
interface MushafListItem {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListResponseData = MushafListItem[];

//Mushaf View
export interface MushafViewResponseData {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
//Mushaf Add | Edit
export interface MushafAddrequestBody {
    short_name: string;
    name: string;
    source: string;
}
