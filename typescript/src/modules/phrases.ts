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

export class ControllerPhrases extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /phrases/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesListResponseData>> {
        return await this.axiosGet(`/phrases/`, config);
    }

    /** GET /phrases/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesViewResponseData>   > {
        return await this.axiosGet(`/phrases/${uuid}/`, config);
    }

    /** POST /phrases/ */
    async add(
        data: PhrasesAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesAddResponseData>> {
        return await this.axiosPost(`/phrases/`, data, config);
    }

    /** PUT /phrases/{uuid}/ */
    async edit(
        uuid: string,
        data: PhrasesEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<PhrasesEditResponseData>> {
        return await this.axiosPut(`/phrases/${uuid}/`, data, config);
    }

    /** PATCH /phrases/{uuid}/ */
    async partialEdit(
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

    /** POST /phrases/modify/ */    
    async modify(
        data: PhrasesModifyRequestData,
        config?: RequestConfig<PhrasesModifyRequestParams>
    ): Promise<AxiosResponse<PhrasesModifyResponseData>> {
        return await this.axiosPost(`/phrases/modify/`, data, config);
    }
}
