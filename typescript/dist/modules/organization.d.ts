import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData, UUID } from "../utils/globalTypes";
import { OrganizationListResponseData, OrganizationNameViewResponseData, OrganizationAddRequestData, OrganizationViewResponseData, OrganizationNameAddRequestData, OrganizationNameEditRequestData } from "../types/organization";
export declare class ControllerOrganization {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<OrganizationListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<OrganizationViewResponseData>>;
    add(data: OrganizationAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: OrganizationAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    /**
     * @description `/organization/name`
     */
    name(): ActionName;
}
declare class ActionName {
    readonly conn: Connection;
    constructor(connection: Connection);
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<OrganizationNameViewResponseData>>;
    add(data: OrganizationNameAddRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: OrganizationNameEditRequestData, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
export {};
