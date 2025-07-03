import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig } from "../utils/globalTypes";
import { UploadResponseData } from "../types/upload";

export class ControllerUpload {
    constructor(private connection: Connection, private token?: string) {}

    // PUT /upload/
    async upload(
        config?: RequestConfig
    ): Promise<AxiosResponse<UploadResponseData>> {
        return await this.connection.axios.put(`/upload`, undefined, config);
    }

    // GET /upload/subjects/
    async subjects(config?: RequestConfig): Promise<AxiosResponse<void>> {
        return await this.connection.axios.get(`/upload/subjects`, config);
    }
}
