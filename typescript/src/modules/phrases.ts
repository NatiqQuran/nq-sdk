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
    PhraseUpdateRequestData,
    PhrasePartialUpdateRequestData,
    PhrasesRetrieveRequestParams,
    PhrasesUpdateRequestParams,
    PhrasesPartialUpdateRequestParams,
} from "../types/phrases";
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
        params: PhrasesRetrieveRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhraseViewResponseData>> {
        return await this.axiosGet(`/phrase/${params.id}`, config);
    }

    async add(
        data: PhraseAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrase`, data, config);
    }

    async edit(
        params: PhrasesUpdateRequestParams,
        data: PhraseUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/phrase/${params.id}`, data, config);
    }

    async partialUpdate(
        params: PhrasesPartialUpdateRequestParams,
        data: PhrasePartialUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/phrase/${params.id}`, data, config);
    }

    async delete(
        id: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrase/${id}`, config);
    }
}
