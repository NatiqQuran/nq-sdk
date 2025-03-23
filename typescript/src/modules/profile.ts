import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../utils/globalTypes";
import {
    ProfileEditRequestData,
    ProfileListResponseData,
} from "../types/profile";

export class ControllerProfile {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileListResponseData>> {
        return await this.conn.axios.get(`/profile`, config);
    }

    async edit(
        data: ProfileEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post("/profile", data, config);
    }
}
