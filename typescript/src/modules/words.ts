import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    WordListResponseData,
    WordViewResponseData,
    WordAddRequestData,
    WordAddResponseData,
    WordEditRequestData,
    WordEditResponseData,
    WordPartialEditRequestData,
    WordPartialEditResponseData,
} from "../types/words";

export class ControllerWords extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /words/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<WordListResponseData>> {
        return await this.axiosGet(`/words/`, config);
    }

    /** GET /words/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordViewResponseData>> {
        return await this.axiosGet(`/words/${uuid}/`, config);
    }

    /** POST /words/ */
    async add(
        data: WordAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordAddResponseData>> {
        return await this.axiosPost(`/words/`, data, config);
    }

    /** PUT /words/{uuid}/ */
    async edit(
        uuid: string,
        data: WordEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordEditResponseData>> {
        return await this.axiosPut(`/words/${uuid}/`, data, config);
    }

    /** PATCH /words/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: WordPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordPartialEditResponseData>> {
        return await this.axiosPatch(`/words/${uuid}/`, data, config);
    }

    /** DELETE /words/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/words/${uuid}/`, config);
    }
}
