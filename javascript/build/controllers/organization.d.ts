import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import { RequestConfig, DefaultResponseData, UUID } from "../interfaces/utils/utils.js";
import { OrganizationListResponseData, OrganizationNameViewResponseData, OrganizationAddrequestBody, OrganizationViewResponseData, OrganizationNameAddrequestBody, OrganizationNameEditrequestBody } from "../interfaces/organization.js";
export declare class ControllerOrganization {
    readonly conn: Connection;
    constructor(connection: Connection);
    list(config?: RequestConfig): Promise<AxiosResponse<OrganizationListResponseData>>;
    view(target: UUID, config?: RequestConfig): Promise<AxiosResponse<OrganizationViewResponseData>>;
    add(data: OrganizationAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: OrganizationAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
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
    add(data: OrganizationNameAddrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    edit(target: UUID, data: OrganizationNameEditrequestBody, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
    delete(target: UUID, config?: RequestConfig): Promise<AxiosResponse<DefaultResponseData>>;
}
export {};
