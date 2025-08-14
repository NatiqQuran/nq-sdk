
export interface MushafsImportResponseData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsListResponseData {
}
export interface MushafsListRequestParams {
    ordering?: string;
    page?: number;
    page_size?: number;
    search?: string;
}
export interface MushafsCreateRequestData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsCreateResponseData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsRetrieveResponseData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsUpdateRequestData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsUpdateResponseData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}
export interface MushafsPartialupdateRequestData {
    name?: string;
    short_name?: string;
    source?: string;
    status?: object;
    uuid?: string;
}
export interface MushafsPartialupdateResponseData {
    name: string;
    short_name: string;
    source?: string;
    status?: object;
    uuid: string;
}