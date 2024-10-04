import { AxiosRequestConfig } from "axios";

interface RequestConfig
    extends Omit<
        AxiosRequestConfig,
        "url" | "baseUrl" | "method" | "params" | "data"
    > {}

export interface ListRequestConfig<P = undefined> extends RequestConfig {
    params?: P;
}

export interface ViewRequestConfig<P = undefined> extends RequestConfig {
    uuid: string;
    params?: P;
}

export interface AddRequestConfig<D = undefined, P = undefined>
    extends RequestConfig {
    params?: P;
    data: D;
}

export interface EditRequestConfig<D = undefined, P = undefined>
    extends RequestConfig {
    uuid: string;
    params?: P;
    data: D;
}
export interface ModifyRequestConfig<D = undefined, P = undefined>
    extends EditRequestConfig<D, P> {}

export interface DeleteRequestConfig<P = undefined> extends RequestConfig {
    uuid: string;
    params?: P;
}
