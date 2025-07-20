import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    RecitationsListResponseData,
    RecitationsViewRequestParams,
    RecitationsViewResponseData,
    RecitationsAddRequestData,
    RecitationsAddResponseDate,
    RecitationsEditRequestParams,
    RecitationsEditRequestData,
    RecitationsEditResponseData,
    RecitationsUpdateRequestParams,
    RecitationsUpdateRequestData,
    RecitationsUpdateResponseData,
} from "../types/recitations";
import { BaseController } from "../utils/baseController";

export class ControllerRecitations extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /recitations/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsListResponseData>> {
        return await this.axiosGet(`/recitations/`, config);
    }

    /** GET /recitations/{uuid}/ */
    async view(
        params: RecitationsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsViewResponseData>> {
        return await this.axiosGet(`/recitations/${params.uuid}/`, config);
    }

    /** POST /recitations/ */
    async add(
        data: RecitationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsAddResponseDate>> {
        return await this.axiosPost(`/recitations/`, data, config);
    }

    /** PUT /recitations/{uuid}/ */
    async edit(
        params: RecitationsEditRequestParams,
        data: RecitationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsEditResponseData>> {
        return await this.axiosPut(`/recitations/${params.uuid}/`, data, config);
    }

    /** PATCH /recitations/{uuid}/ */
    async partialEdit(
        params: RecitationsUpdateRequestParams,
        data: RecitationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsUpdateResponseData>> {
        return await this.axiosPatch(`/recitations/${params.uuid}/`, data, config);
    }

    /** DELETE /recitations/{uuid}/ */
    async delete(
        params: RecitationsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/recitations/${params.uuid}/`, config);
    }
}
