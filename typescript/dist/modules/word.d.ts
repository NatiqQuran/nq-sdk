import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { WordAddRequestData, WordViewResponseData } from "../types/word";
export declare class ControllerWord {
    readonly conn: Connection;
    constructor(connection: Connection);
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<WordViewResponseData>>;
    edit(target: UUID, data: WordAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
