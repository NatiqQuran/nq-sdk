import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
    UUID,
} from "../utils/globalTypes";
import {
    OrganizationListResponseData,
    OrganizationNameViewResponseData,
    OrganizationAddRequestData,
    OrganizationViewResponseData,
    OrganizationNameAddRequestData,
    OrganizationNameEditRequestData,
} from "../types/organization";

export class ControllerOrganization {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationListResponseData>> {
        return this.conn.axios.get(`/organization`, config);
    }

    view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationViewResponseData>> {
        return this.conn.axios.get(`/organization/${target}`, config);
    }

    add(
        data: OrganizationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization`, data, config);
    }

    edit(
        target: UUID,
        data: OrganizationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization/${target}`, data, config);
    }

    delete(
        target: UUID,
        config?: RequestConfig
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
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationNameViewResponseData>> {
        return this.conn.axios.get(`/organization/name/${target}`, config);
    }

    add(
        data: OrganizationNameAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(`/organization/name`, data, config);
    }

    edit(
        target: UUID,
        data: OrganizationNameEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.post(
            `/organization/name${target}`,
            data,
            config
        );
    }

    delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.conn.axios.delete(`/organization/name/${target}`, config);
    }
}
