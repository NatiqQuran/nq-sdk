import { Filter } from "./utils";

//Mushaf

type MushafListSort = "name" | "createTime" | "updateTime";

//Mushaf List
export interface MushafListParam extends Filter<MushafListSort> {}
export interface MushafListItemProps {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListProps = MushafListItemProps[];
//Mushaf View
export interface MushafViewProps {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
export interface MushafPlain {
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
