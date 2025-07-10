import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    MushafsListResponseData,
    MushafsViewRequestParams,
    MushafViewResponseData,
    MushasfAddRequestData,
    MushafsEditRequestParams,
    MushafsEditRequestData,
    MushafsUpdateRequestParams,
    MushafasUpdateRequestData,
} from "../types/mushafs";
import { BaseController } from "../utils/baseController";

export class ControllerMushafs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /Mushafs/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafsListResponseData>> {
        return await this.axiosGet(`/mushafs`, config);
    }

    /** GET /Mushafs/{id}/ */
    async view(
        params: MushafsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.axiosGet(`/mushafs/${params.id}/`, config);
    }

    /** POST /Mushafs/ */
    async add(
        data: MushasfAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/mushafs`, data, config);
    }

    /** PUT /Mushafs/{id}/ */
    async Edit(
        params: MushafsEditRequestParams,
        data: MushafsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/mushafs/${params.id}/`, data, config);
    }

    /** PATCH /Mushafs/{id}/ */
    async partialEdit(
        params: MushafsUpdateRequestParams,
        data: MushafasUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/mushafs/${params.id}/`, data, config);
    }

    /** DELETE /Mushafs/{id}/ */
    async delete(
        params: MushafsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/mushafs/${params.id}/`, config);
    }
}
