import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
  RequestConfig,
  DefaultResponseData,
  ErrorResponseData,
} from "../utils/globalTypes";
import {
  AyahsListRequestParams,
  AyahsListResponseData,
  AyahsRetrieveRequestParams,
  AyahsRetrieveResponseData,
  AyahsAddRequestData,
  AyahsAddResponseData,
  AyahsUpdateRequestParams,
  AyahsUpdateRequestData,
  AyahsUpdateResponseData,
  AyahsPartialUpdateRequestParams,
  AyahsPartialUpdateRequestData,
  AyahsPartialUpdateResponseData,
} from "../types/ayahs";
import { BaseController } from "../utils/baseController";

export class ControllerAyahs extends BaseController {
  constructor(connection: Connection, token?: string) {
    super(connection, token);
  }

  /** GET /ayahs/ */
  async list(
    config?: RequestConfig<AyahsListRequestParams>
  ): Promise<AxiosResponse<AyahsListResponseData>> {
    return await this.axiosGet(`/ayahs`, config);
  }

  /** GET /ayahs/{id}/ */
  async view(
    params: AyahsRetrieveRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<AyahsRetrieveResponseData>> {
    return await this.axiosGet(`/ayahs/${params.id}/`, config);
  }

  /** POST /ayahs/ */
  async add(
    data: AyahsAddRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<AyahsAddResponseData>> {
    return await this.axiosPost(`/ayahs`, data, config);
  }

  /** PUT /ayahs/{id}/ */
  async update(
    params: AyahsUpdateRequestParams,
    data: AyahsUpdateRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<AyahsUpdateResponseData>> {
    return await this.axiosPut(`/ayahs/${params.id}/`, data, config);
  }

  /** PATCH /ayahs/{id}/ */
  async partialUpdate(
    params: AyahsPartialUpdateRequestParams,
    data: AyahsPartialUpdateRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<AyahsPartialUpdateResponseData>> {
    return await this.axiosPatch(`/ayahs/${params.id}/`, data, config);
  }

  /** DELETE /ayahs/{id}/ */
  async delete(
    params: AyahsRetrieveRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<DefaultResponseData>> {
    return await this.axiosDelete(`/ayahs/${params.id}/`, config);
  }
}