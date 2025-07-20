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

export class ControllerProfile extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /profile/{uuid}/ */
    async view(
        params: PrifileViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileViewResponseData>> {
        return await this.axiosGet(`/profile/${params.uuid}`, config);
    }

    /** GET /profile/me/ */
    async meList(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeListResponseData>> {
        return await this.axiosGet(`/profile/me/`, config);
    }

    /** POST /profile/me/ */
    async meAdd(
        data: ProfileMeAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeAddResponseData>> {
        return await this.axiosPost(`/profile/me/`, data, config);
    }

   
}
