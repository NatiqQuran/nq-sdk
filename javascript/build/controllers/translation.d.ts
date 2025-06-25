import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { TranslationListRequestParameters, TranslationListResponseData, TranslationTextModifyrequestBody, TranslationTextViewRequestParameters, TranslationTextViewResponseData, TranslationViewRequestParameters, TranslationAddrequestBody, TranslationViewResponseData } from "../interfaces/translation.js";
export declare class ControllerTranslation {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig<TranslationListRequestParameters>): Promise<AxiosResponse<TranslationListResponseData>>;
    view(target: UUID, config?: RequestConfig<TranslationViewRequestParameters>): Promise<AxiosResponse<TranslationViewResponseData>>;
    add(data: TranslationAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: TranslationAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    /**
     * @description `/translation/text`
     */
    text(): ActionText;
}
declare class ActionText {
    readonly conn: Connection;
    constructor(connection: Connection);
    view(target: string, config: RequestConfig<TranslationTextViewRequestParameters>): Promise<AxiosResponse<TranslationTextViewResponseData>>;
    modify(target: string, data: TranslationTextModifyrequestBody, config: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: string, config: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
export {};
