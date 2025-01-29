import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { PhraseListResponseData, PhraseAddRequestData, PhraseViewResponseData } from "../types/phrase";
export declare class ControllerPhrase {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<PhraseListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<PhraseViewResponseData>>;
    add(data: PhraseAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: PhraseAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
