import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { WordAddrequestBody, WordViewResponseData } from "../interfaces/word.js";
export declare class ControllerWord {
    readonly conn: Connection;
    constructor(connection: Connection);
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<WordViewResponseData>>;
    edit(target: UUID, data: WordAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
