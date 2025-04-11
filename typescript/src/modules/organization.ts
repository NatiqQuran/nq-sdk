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
import { BaseController } from "../utils/baseController";

export class ControllerOrganization extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async list(
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationListResponseData>> {
        return await this.axiosGet(`/organization`, config);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationViewResponseData>> {
        return await this.axiosGet(`/organization/${target}`, config);
    }

    async add(
        data: OrganizationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/organization`, data, config);
    }

    async edit(
        target: UUID,
        data: OrganizationAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/organization/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/organization/${target}`, config);
    }

    /**
     * @description `/organization/name`
     */
    name() {
        return new ActionName(this.conn, this.token);
    }
}

class ActionName extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    async view(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<OrganizationNameViewResponseData>> {
        return await this.axiosGet(`/organization/name/${target}`, config);
    }

    async add(
        data: OrganizationNameAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(`/organization/name`, data, config);
    }

    async edit(
        target: UUID,
        data: OrganizationNameEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosPost(
            `/organization/name/${target}`,
            data,
            config
        );
    }

    async delete(
        target: UUID,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.axiosDelete(`/organization/name/${target}`, config);
    }
}
