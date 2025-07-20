import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    WordListResponseData,
    WordViewRequestParams,
    WordViewResponseData,
    WordAddRequestData,
    WordAddResponseData,
    WordEditRequestParams,
    WordEditRequestData,
    WordEditResponseData,
    WordUpdateRequestParams,
    WordUpdateRequestData,
    WordUpdateResponseData,
} from "../types/words";
import { BaseController } from "../utils/baseController";

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
        params: WordViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordViewResponseData>> {
        return await this.axiosGet(`/words/${params.uuid}/`, config);
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
        params: WordEditRequestParams,
        data: WordEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordEditResponseData>> {
        return await this.axiosPut(`/words/${params.uuid}/`, data, config);
    }

    /** PATCH /words/{uuid}/ */
    async partialEdit(
        params: WordUpdateRequestParams,
        data: WordUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<WordUpdateResponseData>> {
        return await this.axiosPatch(`/words/${params.uuid}/`, data, config);
    }

    /** DELETE /words/{uuid}/ */
    async delete(
        params: WordEditRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/words/${params.uuid}/`, config);
    }
}
