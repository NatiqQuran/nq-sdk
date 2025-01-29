import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import { ProfileEditRequestData, ProfileListResponseData } from "../types/profile";
export declare class ControllerProfile {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<ProfileListResponseData>>;
    edit(data: ProfileEditRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
