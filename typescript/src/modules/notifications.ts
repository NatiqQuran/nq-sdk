import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
  NotificationsListRequestParams,
  NotificationsListResponseData,
  NotificationsViewRequestParams,
  NotificationsViewResponseData,
  NotificationsAddRequestData,
  NotificationsAddResponseData,
  NotificationsEditRequestParams,
  NotificationsEditRequestData,
  NotificationsEditResponseData,
  NotificationsUpdateRequestParams,
  NotificationsUpdateRequestData,
  NotificationsUpdateResponseData,
  NotificationsMeListRequestParams,
  NotificationsMeListResponseData,
  NotificationsOpenedRequestParams,
  NotificationsOpenedResponseData,
  NotificationsViewedResponseData,
} from "../types/notifications";

import { BaseController } from "../utils/baseController";

export class ControllerNotifications extends BaseController {
  constructor(connection: Connection, token?: string) {
    super(connection, token);
  }

  /** GET /notifications/ */
  async list(
    params?: NotificationsListRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsListResponseData>> {
    return await this.axiosGet(`/notifications/`, { ...config, params });
  }

  /** GET /notifications/{id}/ */
  async view(
    params: NotificationsViewRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsViewResponseData>> {
    return await this.axiosGet(`/notifications/${params.id}/`, config);
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
    params: NotificationsEditRequestParams,
    data: NotificationsEditRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsEditResponseData>> {
    return await this.axiosPut(`/notifications/${params.id}/`, data, config);
  }

  /** PATCH /notifications/{id}/ */
  async partialEdit(
    params: NotificationsUpdateRequestParams,
    data: NotificationsUpdateRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsUpdateResponseData>> {
    return await this.axiosPatch(`/notifications/${params.id}/`, data, config);
  }

  /** DELETE /notifications/{id}/ */
  async delete(
    params: NotificationsEditRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<DefaultResponseData>> {
    return await this.axiosDelete(`/notifications/${params.id}/`, config);
  }

  /** GET /notifications/me/ */
  async listMine(
    params?: NotificationsMeListRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsMeListResponseData>> {
    return await this.axiosGet(`/notifications/me/`, { ...config, params });
  }

  /** GET /notifications/opened/?uuid=... */
  async markOpened(
    params: NotificationsOpenedRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsOpenedResponseData>> {
    return await this.axiosGet(`/notifications/opened/`, { ...config, params });
  }

  /** GET /notifications/viewed/ */
  async markViewed(
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsViewedResponseData>> {
    return await this.axiosGet(`/notifications/viewed/`, config);
  }
}
