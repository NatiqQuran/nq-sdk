import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData } from "../interfaces/utils/utils.js";
import { ProfileEditrequestBody, ProfileListResponseData } from "../interfaces/profile.js";
export declare class ControllerProfile {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<ProfileListResponseData>>;
    edit(data: ProfileEditrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
