import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import {
    MushafListRequestParameters,
    MushafListResponseData,
    MushafViewResponseData,
    MushafAddRequestData,
} from "../types/mushaf";
import { BaseController } from "../utils/baseController";

export class ControllerMushaf extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig<MushafListRequestParameters>
    ): Promise<AxiosResponse<MushafListResponseData>> {
        return await this.axiosGet(`/mushaf`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.axiosGet(`/mushaf/${target}`, config);
    }

    async add(
        data: MushafAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/mushaf`, data, config);
    }

    async edit(
        target: UUID,
        data: MushafAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/mushaf/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/mushaf/${target}`, config);
    }
}
