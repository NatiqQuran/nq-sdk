import { FilterQueryParams } from "../utils/globalTypes";

// Mushafs
export type MushafsDefaultRequestParams = {
    uuid: string;
}
export type MushafsDefaultRequestData = {
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}
export type MushafsDefaultResponseData = {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}

type Status = "draft" | "pending_review" | "published";
//Mushaf List
export interface MushafsListRequestParams extends FilterQueryParams {}
export type MushafsListResponseData = MushafsDefaultResponseData[];

//Mushaf View
export type MushafsViewRequestParams = MushafsDefaultRequestParams;
export type MushafsViewResponseData = MushafsDefaultResponseData;

//Mushaf Add
export type MushasfAddRequestData = MushafsDefaultRequestData;
export type MushafAddResponseData = MushafsDefaultResponseData;

//Mushaf Edit
export type MushafsEditRequestParams = MushafsDefaultRequestParams;
export type MushafsEditRequestData = MushafsDefaultRequestData;
export type MushafEditResponseData = MushafsDefaultResponseData;

//Mushaf Update
export type MushafsUpdateRequestParams = MushafsDefaultRequestParams;
export type MushafasUpdateRequestData = Partial<MushafsDefaultRequestData>;
export type MushafUpdateResponseData = MushafsDefaultResponseData;

//Mushaf Import
export interface MushafImportRequestData {
    file: File | Blob;
}
export type MushafImportResponseData = MushafsDefaultResponseData;