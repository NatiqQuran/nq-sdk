import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    UUID,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
import {
    AyahListRequestParams,
    AyahListResponseData,
    AyahViewResponseData,
    AyahAddRequestData,
    AyahEditRequestData,
} from "../types/ayah";
import { BaseController } from "../utils/baseController";

export class ControllerAyah extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig<AyahListRequestParams>
    ): Promise<AxiosResponse<AyahListResponseData>> {
        return await this.axiosGet(`/ayah`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<AyahViewResponseData>> {
        return await this.axiosGet(`/ayah/${target}`, config);
    }

    async add(
        data: AyahAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/ayah`, data, config);
    }

    async edit(
        target: UUID,
        data: AyahEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/ayah/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/ayah/${target}`, config);
    }
}
