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


export class NotificationsController extends BaseController {
  constructor(connection: Connection, token?: string) {
    super(connection, token);
  }

  /** GET /notifications/ */
  async list(
    config?: RequestConfig<NotificationsListRequestParams>
  ): Promise<AxiosResponse<NotificationsListResponseData>> {
    return await this.axiosGet(`/notifications/`, config);
  }

  /** GET /notifications/{uuid}/ */
  async retrieve(
    uuid: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsViewResponseData>> {
    return await this.axiosGet(`/notifications/${uuid}/`, config);
  }

  /** POST /notifications/ */
  async create(
    data: NotificationsAddRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsAddResponseData>> {
    return await this.axiosPost(`/notifications/`, data, config);
  }

  /** PUT /notifications/{uuid}/ */
  async update(
    uuid: string,
    data: NotificationsEditRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsEditResponseData>> {
    return await this.axiosPut(`/notifications/${uuid}/`, data, config);
  }

  /** PATCH /notifications/{uuid}/ */
  async partialUpdate(
    uuid: string,
    data: NotificationsPartialEditRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<NotificationsPartialEditResponseData>> {
    return await this.axiosPatch(`/notifications/${uuid}/`, data, config);
  }

  /** DELETE /notifications/{uuid}/ */
  async delete(
    uuid: string,
    config?: RequestConfig
  ): Promise<AxiosResponse<DefaultResponseData>> {
    return await this.axiosDelete(`/notifications/${uuid}/`, config);
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
