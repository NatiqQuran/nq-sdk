import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TranslationsListResponseData,
    TranslationViewResponseData,
    TranslationsAddRequestData,
    TranslationAddResponseData,
    TranslationsEditRequestData,
    TranslationEditResponseData,
    TranslationsUpdateRequestData,
    TranslationUpdateResponseData,
    TranslationsListRequestParams,
} from "../types/translations";
import { BaseController } from "../utils/baseController";

export class ControllerTranslations extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /translations/ */
    async list(
        config?: RequestConfig<TranslationsListRequestParams>
    ): Promise<AxiosResponse<TranslationsListResponseData>> {
        return await this.axiosGet(`/translations/`, config);
    }

    /** GET /translations/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationViewResponseData>> {
        return await this.axiosGet(`/translations/${uuid}/`, config);
    }

    /** POST /translations/ */
    async add(
        data: TranslationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationAddResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }

    /** PUT /translations/{uuid}/ */
    async edit(
        uuid: string,
        data: TranslationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationEditResponseData>> {
        return await this.axiosPut(`/translations/${uuid}/`, data, config);
    }

    /** PATCH /translations/{uuid}/ */
    async update(
        uuid: string,
        data: TranslationsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TranslationUpdateResponseData>> {
        return await this.axiosPatch(`/translations/${uuid}/`, data, config);
    }

    /** DELETE /translations/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/translations/${uuid}/`, config);
    }
}
