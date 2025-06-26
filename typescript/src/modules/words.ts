import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import {
  RequestConfig,
  DefaultResponseData,
  IdParam,
} from "../utils/globalTypes";
import {
  WordListResponseData,
  WordAddRequestData,
  WordAddResponseData,
  WordResponseData,
  WordUpdateRequestParams,
  WordUpdateRequestData,
  WordUpdateResponseData,
  WordPartialUpdateRequestParams,
  WordPartialUpdateRequestData,
  WordPartialUpdateResponseData,
} from "../types/words";
import { BaseController } from "../utils/baseController";

export class ControllerWord extends BaseController {
  constructor(connection: Connection, token?: string) {
    super(connection, token);
  }

  /** GET /words/ */
  async list(
    config?: RequestConfig
  ): Promise<AxiosResponse<WordListResponseData>> {
    return await this.axiosGet(`/words/`, config);
  }

  /** POST /words/ */
  async create(
    data: WordAddRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<WordAddResponseData>> {
    return await this.axiosPost(`/words/`, data, config);
  }

  /** GET /words/{id}/ */
  async view(
    params: WordUpdateRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<WordResponseData>> {
    return await this.axiosGet(`/words/${params.id}/`, config);
  }

  /** PUT /words/{id}/ */
  async update(
    params: WordUpdateRequestParams,
    data: WordUpdateRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<WordUpdateResponseData>> {
    return await this.axiosPut(`/words/${params.id}/`, data, config);
  }

  /** PATCH /words/{id}/ */
  async partialUpdate(
    params: WordPartialUpdateRequestParams,
    data: WordPartialUpdateRequestData,
    config?: RequestConfig
  ): Promise<AxiosResponse<WordPartialUpdateResponseData>> {
    return await this.axiosPatch(`/words/${params.id}/`, data, config);
  }

  /** DELETE /words/{id}/ */
  async delete(
    params: WordDeleteRequestParams,
    config?: RequestConfig
  ): Promise<AxiosResponse<DefaultResponseData>> {
    return await this.axiosDelete(`/words/${params.id}/`, config);
  }
}
