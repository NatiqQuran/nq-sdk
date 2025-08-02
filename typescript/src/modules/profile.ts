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

// Me Action Class for Profile
export class ProfileMeAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /profile/me/ */
    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeListResponseData>> {
        return await this.axiosGet(`/profile/me/`, config);
    }

    /** POST /profile/me/ */
    async retrieve(
        data: ProfileMeAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileMeAddResponseData>> {
        return await this.axiosPost(`/profile/me/`, data, config);
    }
}

export class ProfileController extends BaseController {
    public me: ProfileMeAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.me = new ProfileMeAction(connection, token);
    }

    /** GET /profile/{id}/ */
    async retrieve(
        params: PrifileViewRequestParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<ProfileViewResponseData>> {
        return await this.axiosGet(`/profile/${params.id}/`, config);
    }
}
