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

export class ControllerPhrase extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Phrases/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesListResponseData>> {
        return await this.axiosGet(`/phrase`, config);
    }

    /** GET /Phrases/{id}/ */
    async view(
        params: PhrasesViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesViewResponseData>> {
        return await this.axiosGet(`/phrase/${params.id}`, config);
    }

    /** POST /Phrases/ */
    async add(
        data: PhrasesAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrase`, data, config);
    }

    /** PUT /Phrases/{id}/ */
    async edit(
        params: PhrasesEditRequestParams,
        data: PhrasesEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/phrase/${params.id}`, data, config);
    }

    /** PATCH /Phrases/{id}/ */
    async partialEdit(
        params: PhrasesUpdateRequestParams,
        data: PhrasesUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/phrase/${params.id}`, data, config);
    }

    /** DELETE /Phrases/{id}/ */
    async delete(
        params: PhrasesEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrase/${params.id}`, config);
    }

    /** POST /phrase/modify/ */
    async modify(
        data: PhrasesModifyRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesModifyResponseData>> {
        return await this.axiosPost(`/phrase/modify`, data, config);
    }
}
