import { FilterQueryParams } from "../utils/globalTypes";

// Mushafs
type Status = "draft" | "pending_review" | "published";
 interface MushafsDefaultRequestData {
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}
 interface MushafsDefaultResponseData {
    uuid: string;
    short_name: string;
    name: string;
    source?: string;
    status?: Status;
}

//Mushaf List
export interface MushafsListRequestParams extends FilterQueryParams {}
export type MushafsListResponseData = MushafsDefaultResponseData[];

//Mushaf View
export type MushafsViewResponseData = MushafsDefaultResponseData;

//Mushaf Add
export type MushasfAddRequestData = MushafsDefaultRequestData;
export type MushafAddResponseData = MushafsDefaultResponseData;

//Mushaf Edit
export type MushafsEditRequestData = MushafsDefaultRequestData;
export type MushafEditResponseData = MushafsDefaultResponseData;

//Mushaf Partial Edit
export type MushafsPartialEditRequestData = Partial<MushafsDefaultRequestData>;
export type MushafsPartialEditResponseData = MushafsDefaultResponseData;

//Mushaf Import
export interface MushafImportRequestData {
    file: File | Blob;
}
export type MushafImportResponseData = MushafsDefaultResponseData;