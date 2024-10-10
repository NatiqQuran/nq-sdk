import { Filter } from "./utils";

//Mushaf

type MushafListSort = "name" | "createTime" | "updateTime";

//Mushaf List
export interface MushafListParam extends Filter<MushafListSort> {}
export interface MushafListItem {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListProps = MushafListItem[];
//Mushaf View
export interface MushafViewProps {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
export interface MushafViewRequestData {
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
