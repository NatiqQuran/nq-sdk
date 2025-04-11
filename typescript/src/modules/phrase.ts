import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    PhraseListResponseData,
    PhraseAddRequestData,
    PhraseViewResponseData,
} from "../types/phrase";
import { BaseController } from "../utils/baseController";

export class ControllerPhrase extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhraseListResponseData>> {
        return await this.axiosGet(`/phrase`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhraseViewResponseData>> {
        return await this.axiosGet(`/phrase/${target}`, config);
    }

    async add(
        data: PhraseAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrase`, data, config);
    }

    async edit(
        target: UUID,
        data: PhraseAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrase/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrase/${target}`, config);
    }
}
