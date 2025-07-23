import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig } from "../utils/globalTypes";
import {
    ProfileViewResponseData,
    ProfileMeAddRequestData,
    ProfileMeAddResponseData,
    ProfileMeViewResponseData,
} from "../types/profile";

export class ControllerProfile extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /profile/{uuid}/ */
    async view(
        uuid: string,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileViewResponseData>> {
        return await this.axiosGet(`/profile/${uuid}/`, config);
    }

    /** GET /profile/me/ */
    async meView(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeViewResponseData>> {
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
