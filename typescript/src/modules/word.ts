import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import { WordAddRequestData, WordViewResponseData } from "../types/word";
import { BaseController } from "../utils/baseController";

export class ControllerWord extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordViewResponseData>> {
        return await this.axiosGet(`/word/${target}`, config);
    }

    async edit(
        target: UUID,
        data: WordAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/word/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/word/${target}`, config);
    }
}
