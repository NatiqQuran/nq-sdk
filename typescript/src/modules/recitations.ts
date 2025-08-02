import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    RecitationsListResponseData,
    RecitationsViewRequestParams,
    RecitationsViewResponseData,
    RecitationsAddRequestData,
    RecitationsEditRequestParams,
    RecitationsEditRequestData,
    RecitationsUpdateRequestParams,
    RecitationsUpdateRequestData,
} from "../types/recitations";
import { BaseController } from "../utils/baseController";

export class RecitationsController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Recitation/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsListResponseData>> {
        return await this.axiosGet(`/recitations/`, config);
    }

    /** GET /Recitation/{id}/ */
    async retrieve(
        params: RecitationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsViewResponseData>> {
        return await this.axiosGet(`/recitations/${params.id}/`, config);
    }

    /** POST /Recitation/ */
    async create(
        data: RecitationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/recitations/`, data, config);
    }

    /** PUT /Recitation/{id}/ */
    async update(
        params: RecitationsEditRequestParams,
        data: RecitationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/recitations/${params.id}/`, data, config);
    }

    /** PATCH /Recitation/{id}/ */
    async partialUpdate(
        params: RecitationsUpdateRequestParams,
        data: RecitationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/recitations/${params.id}/`, data, config);
    }

    /** DELETE /Recitation/{id}/ */
    async delete(
        params: RecitationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/recitations/${params.id}/`, config);
    }
}
