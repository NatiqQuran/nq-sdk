// import { AxiosResponse } from "axios";
// import { Connection } from "../client/connection";
// import { BaseController } from "../utils/baseController";
// import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
// import {
//     GroupsListResponseData,
//     GroupsViewRequestParams,
//     GroupsViewResponseData,
//     GroupsAddRequestData,
//     GroupsAddResponsetData,
//     GroupsEditRequestParams,
//     GroupsEditRequestData,
//     GroupsEditResponsetData,
//     GroupsUpdateRequestParams,
//     GroupsUpdateRequestData,
//     GroupsUpdateResponsetData,
// } from "../types/groups";

// export class ControllerGroups extends BaseController {
//     constructor(connection: Connection, token?: string) {
//         super(connection, token);
//     }

//     /** GET /groups/ */
//     async list(
//         config?: RequestConfig
//     ): Promise<AxiosResponse<GroupsListResponseData>> {
//         return await this.axiosGet(`/groups/`, config);
//     }

//     /** GET /groups/{id}/ */
//     async view(
//         params: GroupsViewRequestParams,
//         config?: RequestConfig
//     ): Promise<AxiosResponse<GroupsViewResponseData>> {
//         return await this.axiosGet(`/groups/${params.id}/`, config);
//     }

//     /** POST /groups/ */
//     async add(
//         data: GroupsAddRequestData,
//         config?: RequestConfig
//     ): Promise<AxiosResponse<GroupsAddResponsetData>> {
//         return await this.axiosPost(`/groups/`, data, config);
//     }

//     /** PUT /groups/{id}/ */
//     async edit(
//         params: GroupsEditRequestParams,
//         data: GroupsEditRequestData,
//         config?: RequestConfig
//     ): Promise<AxiosResponse<GroupsEditResponsetData>> {
//         return await this.axiosPut(`/groups/${params.id}/`, data, config);
//     }

//     /** PATCH /groups/{id}/ */
//     async partialEdit(
//         params: GroupsUpdateRequestParams,
//         data: GroupsUpdateRequestData,
//         config?: RequestConfig
//     ): Promise<AxiosResponse<GroupsUpdateResponsetData>> {
//         return await this.axiosPatch(`/groups/${params.id}/`, data, config);
//     }

//     /** DELETE /groups/{id}/ */
//     async delete(
//         params: GroupsEditRequestParams,
//         config?: RequestConfig
//     ): Promise<AxiosResponse<DefaultResponseData>> {
//         return await this.axiosDelete(`/groups/${params.id}/`, config);
//     }
// }
