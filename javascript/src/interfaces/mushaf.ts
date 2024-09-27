//Mushaf

import Filter from "./filter";

//Mushaf List
export interface MushafListItemProps {
    uuid: string;
    creator_user_id: number;
    short_name: string;
    name: string;
    source: string;
}
export type MushafListProps = MushafListItemProps[];
//Mushaf View
export interface MushafViewProps {
    uuid: string;
    creator_user_id: number;
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

export interface MushafListParam extends Filter {}
