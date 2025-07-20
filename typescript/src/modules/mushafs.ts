import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    MushafsListResponseData,
    MushafsViewRequestParams,
    MushafViewResponseData,
    MushasfAddRequestData,
    MushafAddResponseData,
    MushafsEditRequestParams,
    MushafsEditRequestData,
    MushafEditResponseData,
    MushafsUpdateRequestParams,
    MushafasUpdateRequestData,
    MushafUpdateResponseData,
} from "../types/mushafs";
import { BaseController } from "../utils/baseController";

export class ControllerMushafs extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /mushafs/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafsListResponseData>> {
        return await this.axiosGet(`/mushafs/`, config);
    }

    /** GET /mushafs/{uuid}/ */
    async view(
        params: MushafsViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.axiosGet(`/mushafs/${params.uuid}/`, config);
    }

    /** POST /mushafs/ */
    async add(
        data: MushasfAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafAddResponseData>> {
        return await this.axiosPost(`/mushafs/`, data, config);
    }

    /** PUT /mushafs/{uuid}/ */
    async edit(
        params: MushafsEditRequestParams,
        data: MushafsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafEditResponseData>> {
        return await this.axiosPut(`/mushafs/${params.uuid}/`, data, config);
    }

    /** PATCH /mushafs/{uuid}/ */
    async partialEdit(
        params: MushafsUpdateRequestParams,
        data: MushafasUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafUpdateResponseData>> {
        return await this.axiosPatch(`/mushafs/${params.uuid}/`, data, config);
    }

    /** DELETE /mushafs/{uuid}/ */
    async delete(
        params: MushafsEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/mushafs/${params.uuid}/`, config);
    }
}

