import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    ProfileEditRequestData,
    ProfileListResponseData,
} from "../interfaces/profile.js";

export class ControllerProfile {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig
    ): Promise<AxiosResponse<ProfileListResponseData>> {
        return await this.conn.axios.get(`/profile`, config);
    }

    async edit(
        data: ProfileEditRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post("/profile", data, config);
    }
}
