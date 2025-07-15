//Mushaf

//Mushaf List
export interface MushafsListResponseItem {
    uuid: string;
    short_name: string;
    name: string;
    source: string;
    status?: 'draft' | 'pending_review' | 'published';
}
export type MushafsListResponseData = MushafsListResponseItem[];

//Mushaf View
export interface MushafsViewRequestParams {
    uuid: string;
}
export interface MushafViewResponseData {
    uuid: string;
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
    uuid: string;
}
export interface MushafsEditRequestData {
    short_name?: string;
    name: string;
    source: string;
}

//Mushaf Update
export interface MushafsUpdateRequestParams {
    uuid: string;
}
export interface MushafasUpdateRequestData {
    short_name: string;
    name: string;
    source: string;
}
