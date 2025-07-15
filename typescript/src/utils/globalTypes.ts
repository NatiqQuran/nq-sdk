import { AxiosRequestConfig } from "axios";

export interface RequestConfig<P = undefined>
    extends Omit<AxiosRequestConfig, "url" | "baseUrl" | "method" | "data"> {
    params?: P;
}
export interface Filter<S> {
    sort?: S;
    order?: "asc" | "desc";
    from?: number;
    to?: number;
}

export type UUID = string;
export type Sajdah = "vajib" | "mustahab";
export type Period = "makki" | "madani";

export type DefaultResponseData = string;
export interface ErrorResponseData {
    error_name: string;
    error: string;
    detail: string;
}
