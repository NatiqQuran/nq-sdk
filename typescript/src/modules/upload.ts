import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig } from "../utils/globalTypes";
import { UploadAddParams, UploadAddResponseData, UploadSubjectsViewResponseData } from "../types/upload";
import { BaseController } from "../utils/baseController";

export class ControllerUpload extends BaseController{
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    // PUT /upload/
    async upload(
        params: UploadAddParams,
        data: Blob,
        config?: RequestConfig
    ): Promise<AxiosResponse<UploadAddResponseData>> {
        let form = new FormData();
        form.append("file", data);
        
        return await this.axiosPost(`/upload/?subject=${params.subject}`, form, config);
    }

    // GET /upload/subjects/
    async subjects(config?: RequestConfig): Promise<AxiosResponse<UploadSubjectsViewResponseData[]>> {
        return await this.axiosGet(`/upload/subjects/`, config);
    }
}
