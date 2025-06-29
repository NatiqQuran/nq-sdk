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

export class ControllerPhrase extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Recitations/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsListResponseData>> {
        return await this.axiosGet(`/phrase`, config);
    }

    /** GET /Recitations/{id}/ */
    async view(
        params: RecitationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsViewResponseData>> {
        return await this.axiosGet(`/phrase/${params.id}`, config);
    }

    /** POST /Recitations/ */
    async add(
        data: RecitationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/phrase`, data, config);
    }

    /** PUT /Recitations/{id}/ */
    async edit(
        params: RecitationsEditRequestParams,
        data: RecitationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/phrase/${params.id}`, data, config);
    }

    /** PATCH /Recitations/{id}/ */
    async partialEdit(
        params: RecitationsUpdateRequestParams,
        data: RecitationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/phrase/${params.id}`, data, config);
    }

    /** DELETE /Recitations/{id}/ */
    async delete(
        params: RecitationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/phrase/${params.id}`, config);
    }
}
