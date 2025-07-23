import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import { BaseController } from "../utils/baseController";
import {
  NotificationsListRequestParams,
  NotificationsListResponseData,
  NotificationsViewResponseData,
  NotificationsAddRequestData,
  NotificationsAddResponseData,
  NotificationsEditRequestData,
  NotificationsEditResponseData,
  NotificationsPartialEditRequestData,
  NotificationsPartialEditResponseData,
  NotificationsMeListRequestParams,
  NotificationsMeListResponseData,
  NotificationsOpenedResponseData,
  NotificationsViewedResponseData,
} from "../types/notifications";


export class ControllerNotifications extends BaseController {
  constructor(connection: Connection, token?: string) {
    super(connection, token);
  }

  /** GET /notifications/ */
  async list(
    config?: RequestConfig<NotificationsListRequestParams>
  ): Promise<AxiosResponse<NotificationsListResponseData>> {
    return await this.axiosGet(`/notifications/`, config);
  }

  /** GET /notifications/{id}/ */
  async view(
    id: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsViewResponseData>> {
    return await this.axiosGet(`/notifications/${id}/`, config);
  }

  /** POST /notifications/ */
  async add(
    data: NotificationsAddRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsAddResponseData>> {
    return await this.axiosPost(`/notifications/`, data, config);
  }

  /** PUT /notifications/{id}/ */
  async edit(
    id: string,
    data: NotificationsEditRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsEditResponseData>> {
    return await this.axiosPut(`/notifications/${id}/`, data, config);
  }

  /** PATCH /notifications/{id}/ */
  async partialEdit(
    id: string,
    data: NotificationsPartialEditRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsPartialEditResponseData>> {
    return await this.axiosPatch(`/notifications/${id}/`, data, config);
  }

  /** DELETE /notifications/{id}/ */
  async delete(
    id: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<DefaultResponseData>> {
    return await this.axiosDelete(`/notifications/${id}/`, config);
  }

  /** GET /notifications/me/ */
  async listMine(
    config?: RequestConfig<NotificationsMeListRequestParams>
  ): Promise<AxiosResponse<NotificationsMeListResponseData>> {
    return await this.axiosGet(`/notifications/me/`, config);
  }

  /** GET /notifications/opened/?uuid=... */
  async markOpened(
    uuid: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsOpenedResponseData>> {
    return await this.axiosGet(`/notifications/opened/?uuid=${uuid}`, config);
  }

  /** GET /notifications/viewed/ */
  async markViewed(
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsViewedResponseData>> {
    return await this.axiosGet(`/notifications/viewed/`, config);
  }
}
