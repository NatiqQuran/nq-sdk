import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    OrganizationListResponseData,
    OrganizationNameViewResponseData,
    OrganizationAddRequestData,
    OrganizationViewResponseData,
    OrganizationNameAddRequestData,
    OrganizationNameEditRequestData,
} from "../interfaces/organization.js";

export class ControllerOrganization {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: RequestConfig
    ): Promise<AxiosResponse<OrganizationListResponseData>> {
        return this.conn.axios.get(`/organization`, config);
    }

    view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<OrganizationViewResponseData>> {
        return this.conn.axios.get(`/organization/${target}`, config);
    }

    add(
        data: OrganizationAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization`, data, config);
    }

    edit(
        target: string,
        data: OrganizationAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization/${target}`, data, config);
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/organization/${target}`, config);
    }

    /**
     * @description `/organization/name`
     */
    name() {
        return new ActionName(this.conn);
    }
}

class ActionName {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    view(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<OrganizationNameViewResponseData>> {
        return this.conn.axios.get(`/organization/name/${target}`, config);
    }

    add(
        data: OrganizationNameAddRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization/name`, data, config);
    }

    edit(
        target: string,
        data: OrganizationNameEditRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(
            `/organization/name${target}`,
            data,
            config
        );
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/organization/name/${target}`, config);
    }
}
