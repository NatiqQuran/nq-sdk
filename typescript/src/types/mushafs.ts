import { Filter, UUID } from "../utils/globalTypes";

//Mushaf

//Mushaf List
export interface MushafsListResponseItem {
    id: number;
    short_name: string;
    name: string;
    source: string;
}
export type MushafsListResponseData = MushafsListResponseItem[];

//Mushaf View
export interface MushafsRetrieveRequestParams {
    id: number
}
export interface MushafViewResponseData {
    id: number;
    short_name: string;
    name: string;
    source: string;
    bismillah_text: string;
}

//Mushaf Add
export interface MushasfAddRequestData {
    short_name?: string;
    name: string;
    source: string;
}

//Mushaf Put
export interface MushafsUpdateRequestParams {
    id: number
}
export interface MushafsUpdateRequestData {
    short_name?: string;
    name: string;
    source: string;
}

//Mushaf Patch
export interface MushafsPartialUpdateRequestParams {
    id: number
}
export interface MushafasPartialUpdateRequestData {
    short_name: string;
    name: string;
    source: string;
}



