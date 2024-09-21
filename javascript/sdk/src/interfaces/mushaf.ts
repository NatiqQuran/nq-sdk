//Mushaf

import Filter from "./filter";

//Mushaf List
interface MushafInListProps {
    uuid: string;
    creator_user_id: number;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}
export type MushafListProps = MushafInListProps[];
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
