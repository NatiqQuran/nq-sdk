import { AxiosRequestConfig } from "axios";

export interface RequestConfig<P = undefined>
    extends Omit<AxiosRequestConfig, "url" | "baseUrl" | "method" | "data"> {
    RequestParameters?: P;
}
export interface Filter<S> {
    sort?: S;
    order?: "asc" | "desc";
    from?: number;
    to?: number;
}

export type UUID = string;
export type Sajdah = "vajib" | "mustahab" | null;
export type Period = "makki" | "madani" | null;

export type DefaultResponseData = string;
export interface ErrorResponseData {
    error_name: string;
    error: string;
    detail: string | null;
}
