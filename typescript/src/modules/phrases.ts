import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    PhrasesListResponseData,
    PhrasesViewRequestParams,
    PhrasesViewResponseData,
    PhrasesAddRequestData,
    PhrasesAddResponseData,
    PhrasesEditRequestParams,
    PhrasesEditRequestData,
    PhrasesEditResponseData,
    PhrasesUpdateRequestParams,
    PhrasesUpdateRequestData,
    PhrasesUpdateResponseData,
    PhrasesModifyRequestParams,
    PhrasesModifyRequestData,
    PhrasesModifyResponseData,
} from "../types/phrases";
import { BaseController } from "../utils/baseController";

export class ControllerPhrases extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /phrases/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesListResponseData>> {
        return await this.axiosGet(`/phrases`, config);
    }

    /** GET /phrases/{uuid}/ */
    async view(
        params: PhrasesViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesViewResponseData>> {
        return await this.axiosGet(`/phrases/${params.uuid}/`, config);
    }

    /** POST /phrases/ */
    async add(
        data: PhrasesAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesAddResponseData>> {
        return await this.axiosPost(`/phrases`, data, config);
    }

    /** PUT /phrases/{uuid}/ */
    async edit(
        params: PhrasesEditRequestParams,
        data: PhrasesEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesEditResponseData>> {
        return await this.axiosPut(`/phrases/${params.uuid}/`, data, config);
    }

    /** PATCH /phrases/{uuid}/ */
    async partialEdit(
        params: PhrasesUpdateRequestParams,
        data: PhrasesUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesUpdateResponseData>> {
        return await this.axiosPatch(`/phrases/${params.uuid}/`, data, config);
    }

    /** DELETE /phrases/{uuid}/ */
    async delete(
        params: PhrasesEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrases/${params.uuid}/`, config);
    }

    /** POST /phrases/modify/ */
    async modify(
        params: PhrasesModifyRequestParams,
        data: PhrasesModifyRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesModifyResponseData>> {
        return await this.axiosPost(`/phrases/modify/?language=${params.language}`, data, config);
    }
}
