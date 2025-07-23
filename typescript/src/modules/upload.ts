import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig } from "../utils/globalTypes";
import { UploadAddParams, UploadAddResponseData, UploadSubjectsViewResponseData } from "../types/upload";

export class ControllerUpload extends BaseController{
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    // PUT /upload/
    async upload(
        data: Blob,
        config?: RequestConfig<UploadAddParams>
    ): Promise<AxiosResponse<UploadAddResponseData>> {
        let form = new FormData();
        form.append("file", data);
        
        return await this.axiosPost(`/upload/`, form, config);
    }

    // GET /upload/subjects/
    async subjects(config?: RequestConfig): Promise<AxiosResponse<UploadSubjectsViewResponseData[]>> {
        return await this.axiosGet(`/upload/subjects/`, config);
    }
}
