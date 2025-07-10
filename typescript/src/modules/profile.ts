import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    PrifileViewRequestParams,
    ProfileViewResponseData,
    ProfileMeListResponseData,
    ProfileMeAddRequestData,
    ProfileMeAddResponseData,
} from "../types/profile";
import { BaseController } from "../utils/baseController";

export class ControllerProfiles extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /profiles/{id}/ */
    async view(
        params: PrifileViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileViewResponseData>> {
        return await this.axiosGet(`/profiles/${params.id}/`, config);
    }

    /** GET /profiles/me/ */
    async meList(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeListResponseData>> {
        return await this.axiosGet(`/profiles/me/`, config);
    }

    /** POST /profiles/me/ */
    async meAdd(
        data: ProfileMeAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeAddResponseData>> {
        return await this.axiosPost(`/profiles/me/`, data, config);
    }
}
