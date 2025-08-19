
export interface SurahsListResponseData {
}
export interface SurahsListRequestParams {
    mushaf?: string;
    ordering?: string;
    page?: number;
    page_size?: number;
    search?: string;
}
export interface SurahsCreateRequestData {
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}
export interface SurahsCreateResponseData {
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}
export interface SurahsRetrieveResponseData {
    ayahs: object[];
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}
export interface SurahsUpdateRequestData {
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}
export interface SurahsUpdateResponseData {
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}
export interface SurahsPartialupdateRequestData {
    mushaf?: object;
    mushaf_uuid?: string;
    name?: string;
    names?: string;
    number?: number;
    number_of_ayahs?: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid?: string;
}
export interface SurahsPartialupdateResponseData {
    mushaf: object;
    mushaf_uuid: string;
    name: string;
    names: string;
    number: number;
    number_of_ayahs: string;
    period?: 'makki' | 'madani';
    search_terms?: string;
    uuid: string;
}