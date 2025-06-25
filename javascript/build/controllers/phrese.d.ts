import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { PhraseListResponseData, PhraseAddrequestBody, PhraseViewResponseData } from "../interfaces/phrase.js";
export declare class ControllerPhrase {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<PhraseListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<PhraseViewResponseData>>;
    add(data: PhraseAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: PhraseAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
