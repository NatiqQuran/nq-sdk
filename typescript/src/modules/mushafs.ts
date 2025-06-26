import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    MushafsListResponseData,
    MushafsRetrieveRequestParams,
    MushafViewResponseData,
    MushasfAddRequestData,
    MushafsUpdateRequestParams,
    MushafsUpdateRequestData,
    MushafsPartialUpdateRequestParams,
    MushafasPartialUpdateRequestData
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
        return await this.axiosGet(`/mushafs`, config);
    }

    /** GET /mushafs/{id}/ */
    async view(
        params: MushafsRetrieveRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.axiosGet(`/mushafs/${params.id}/`, config);
    }

    /** POST /mushafs/ */
    async add(
        data: MushasfAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/mushafs`, data, config);
    }

    /** PUT /mushafs/{id}/ */
    async update(
        params: MushafsUpdateRequestParams,
        data: MushafsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPut(`/mushafs/${params.id}/`, data, config);
    }

    /** PATCH /mushafs/{id}/ */
    async partialUpdate(
        params: MushafsPartialUpdateRequestParams,
        data: MushafasPartialUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPatch(`/mushafs/${params.id}/`, data, config);
    }

    /** DELETE /mushafs/{id}/ */
    async delete(
        params: MushafsUpdateRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/mushafs/${params.id}/`, config);
    }
}
