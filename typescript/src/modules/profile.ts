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
import { BaseController } from "../utils/baseController";

export class ControllerProfile extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileListResponseData>> {
        return await this.axiosGet(`/profile`, config);
    }

    async edit(
        data: ProfileEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost("/profile", data, config);
    }
}
