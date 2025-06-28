import { Filter, UUID } from "./utils/utils.js";
type MushafListSort = "name" | "createTime" | "updateTime";
export interface MushafListRequestParameters extends Filter<MushafListSort> {}
interface MushafListItem {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListResponseData = MushafListItem[];
export interface MushafViewResponseData {
    uuid: UUID;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
export interface MushafAddrequestBody {
    short_name: string;
    name: string;
    source: string;
}
export {};
