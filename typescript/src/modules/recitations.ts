import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    RecitationsListResponseData,
    RecitationsViewResponseData,
    RecitationsAddRequestData,
    RecitationsAddResponseData,
    RecitationsEditRequestData,
    RecitationsEditResponseData,
    RecitationsPartialEditRequestData,
    RecitationsPartialEditResponseData,
    RecitationsUploadRequestParams,
    RecitationsUploadRequestData,
} from "../types/recitations";

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
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsViewResponseData>> {
        return await this.axiosGet(`/recitations/${uuid}/`, config);
    }

    /** POST /recitations/ */
    async add(
        data: RecitationsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsAddResponseData>> {
        return await this.axiosPost(`/recitations/`, data, config);
    }

    /** PUT /recitations/{uuid}/ */
    async edit(
        uuid: string,
        data: RecitationsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsEditResponseData>> {
        return await this.axiosPut(`/recitations/${uuid}/`, data, config);
    }

    /** PATCH /recitations/{uuid}/ */
    async partialEdit(
        uuid: string,
        data: RecitationsPartialEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<RecitationsPartialEditResponseData>> {
        return await this.axiosPatch(`/recitations/${uuid}/`, data, config);
    }

    /** DELETE /recitations/{uuid}/ */
    async delete(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/recitations/${uuid}/`, config);
    }
    async upload(
        uuid:string,
        data: RecitationsUploadRequestData,
        config?: RequestConfig<RecitationsUploadRequestParams>
    ): Promise<AxiosResponse<DefaultResponseData>> {
        const formData = new FormData();
        formData.append("file", data.file);

        return await this.axiosPost(
            `/recitations/upload/${uuid}/`,
            formData,
            {
                ...config,
                params:config?.params,
                headers: {
                    ...(config?.headers || {}),
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    }
}
