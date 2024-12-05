import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    ProfileListItem,
    ProfileAddRequestData,
} from "../interfaces/profile.js";

export class ControllerAyah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<ProfileListItem>
    ): Promise<AxiosResponse<ProfileListItem[]>> {
        return await this.conn.axios.get(`/profile`, config);
    }

    async edit(
        data: ProfileAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post("/profile", data, config);
    }
}
