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
export interface MushafsViewRequestParams {
    id: number;
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

//Mushaf Edit
export interface MushafsEditRequestParams {
    id: number;
}
export interface MushafsEditRequestData {
    short_name?: string;
    name: string;
    source: string;
}

//Mushaf Update
export interface MushafsUpdateRequestParams {
    id: number;
}
export interface MushafasUpdateRequestData {
    short_name: string;
    name: string;
    source: string;
}
