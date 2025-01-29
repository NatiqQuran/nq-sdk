import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { TranslationListRequestParams, TranslationListResponseData, TranslationTextModifyRequestData, TranslationTextViewRequestParams, TranslationTextViewResponseData, TranslationViewRequestParams, TranslationAddRequestData, TranslationViewResponseData } from "../types/translation";
export declare class ControllerTranslation {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<TranslationListRequestParams>): Promise<AxiosResponse<TranslationListResponseData>>;
    view(target: UUID, config?: RequestConfig<TranslationViewRequestParams>): Promise<AxiosResponse<TranslationViewResponseData>>;
    add(data: TranslationAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: TranslationAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    /**
     * @description `/translation/text`
     */
    text(): ActionText;
}
declare class ActionText {
    readonly conn: Connection;
    constructor(connection: Connection);
    view(target: string, config: RequestConfig<TranslationTextViewRequestParams>): Promise<AxiosResponse<TranslationTextViewResponseData>>;
    modify(target: string, data: TranslationTextModifyRequestData, config: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: string, config: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
export {};
