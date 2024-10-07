import { AxiosRequestConfig } from "axios";

export interface RequestConfig<P = undefined>
    extends Omit<AxiosRequestConfig, "url" | "baseUrl" | "method" | "data"> {
    params?: P;
}
