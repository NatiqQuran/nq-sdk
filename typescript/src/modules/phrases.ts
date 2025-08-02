import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    PhrasesListResponseData,
    PhrasesViewResponseData,
    PhrasesAddRequestData,
    PhrasesAddResponseData,
    PhrasesEditRequestData,
    PhrasesEditResponseData,
    PhrasesPartialEditRequestData,
    PhrasesPartialEditResponseData, 
    PhrasesModifyRequestParams,
    PhrasesModifyRequestData,
    PhrasesModifyResponseData,
} from "../types/phrases";

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
        return await this.axiosPost(`/phrases/modify/`, data, config);
    }
}

export class PhrasesController extends BaseController {
    public modify: PhrasesModifyAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.modify = new PhrasesModifyAction(connection, token);
    }

    /** GET /phrases/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesListResponseData>> {
        return await this.axiosGet(`/phrases/`, config);
    }

    /** GET /phrases/{uuid}/ */
    async retrieve(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesViewResponseData>> {
        return await this.axiosGet(`/phrases/${uuid}/`, config);
    }

    /** POST /phrases/ */
    async create(
        data: PhrasesAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesAddResponseData>> {
        return await this.axiosPost(`/phrases/`, data, config);
    }

    /** PUT /phrases/{uuid}/ */
    async update(
        uuid: string,
        data: PhrasesEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesEditResponseData>> {
        return await this.axiosPut(`/phrases/${uuid}/`, data, config);
    }

    /** PATCH /phrases/{uuid}/ */
    async partialUpdate(
        uuid: string,
        data: PhrasesPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesPartialEditResponseData>> {
        return await this.axiosPatch(`/phrases/${uuid}/`, data, config);
    }

    /** DELETE /phrases/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrases/${uuid}/`, config);
    }

}
