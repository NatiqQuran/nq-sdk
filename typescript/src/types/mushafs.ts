import { FilterQueryParams } from "../utils/globalTypes";

// Mushaf

//Mushaf List
export interface MushafsListRequestParams extends FilterQueryParams {}
type Status = "draft" | "pending_review" | "published";
export interface MushafsListResponseItem {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
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
    source?: string;
    status?: Status;
}

//Mushaf Add
export interface MushasfAddRequestData {
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}
export interface MushafAddResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}

//Mushaf Edit
export interface MushafsEditRequestParams {
    uuid: string;
}
export interface MushafsEditRequestData {
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}
export interface MushafEditResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}

//Mushaf Update
export interface MushafsUpdateRequestParams {
    uuid: string;
}
export interface MushafasUpdateRequestData {
    short_name?: string;
    name?: string;
    source?: string;
    status?: Status;
}
export interface MushafUpdateResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}

//Mushaf Import
export interface MushafImportRequestData {
    file: File | Blob;
}
export interface MushafImportResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}
