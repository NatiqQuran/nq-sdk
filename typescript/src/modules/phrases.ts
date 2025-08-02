import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    PhrasesListResponseData,
    PhrasesViewRequestParams,
    PhrasesViewResponseData,
    PhrasesAddRequestData,
    PhrasesEditRequestParams,
    PhrasesEditRequestData,
    PhrasesUpdateRequestParams,
    PhrasesUpdateRequestData,
    PhrasesModifyRequestData,
    PhrasesModifyResponseData,
} from "../types/phrases";
import { BaseController } from "../utils/baseController";

// Modify Action Class for Phrases
export class PhrasesModifyAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** POST /phrase/modify/ */
    async create(
        data: PhrasesModifyRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesModifyResponseData>> {
        return await this.axiosPost(`/phrases/modify`, data, config);
    }
}

export class PhraseController extends BaseController {
    public modify: PhrasesModifyAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.modify = new PhrasesModifyAction(connection, token);
    }

    /** GET /Phrase/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesListResponseData>> {
        return await this.axiosGet(`/phrases/`, config);
    }


    /** GET /Phrase/{id}/ */
    async retrieve(
        params: PhrasesViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesViewResponseData>> {
        return await this.axiosGet(`/phrases/${params.id}/`, config);
    }


    /** POST /Phrase/ */
    async create(
        data: PhrasesAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrases/`, data, config);
    }


    /** PUT /Phrase/{id}/ */
    async update(
        params: PhrasesEditRequestParams,
        data: PhrasesEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/phrases/${params.id}/`, data, config);
    }


    /** PATCH /Phrase/{id}/ */
    async partialUpdate(
        params: PhrasesUpdateRequestParams,
        data: PhrasesUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/phrases/${params.id}/`, data, config);
    }

    /** DELETE /Phrase/{id}/ */
    async delete(
        params: PhrasesEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrases/${params.id}/`, config);
    }
}
