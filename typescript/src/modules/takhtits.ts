import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig, DefaultResponseData } from "../utils/globalTypes";
import {
    TakhtitsListRequestParams,
    TakhtitsListResponseData,
    TakhtitsViewResponseData,
    TakhtitsAddRequestData,
    TakhtitsAddResponseData,
    TakhtitsEditRequestData,
    TakhtitsEditResponseData,
    TakhtitsUpdateRequestData,
    TakhtitsUpdateResponseData,
    TakhtitsAyahsBreakerViewRequesParams,
    TakhtitsAyahsBreakerViewResponseData,
    TakhtitsAyahsBreakersAddResponseData,
    TakhtitsWordsBreakerViewRequesParams,
    TakhtitsWordsBreakerViewRequesData
} from "../types/takhtits";

// ------------------- AyahsBreakers Action -------------------
export class TakhtitsAyahsBreakersAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /takhtits/{uuid}/ayahs-breakers/ */
    async list(
        uuid:string,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsAyahsBreakerViewResponseData[]>> {
        return this.axiosGet(`/takhtits/${uuid}/ayahs-breakers/`, config);
    }

    /** GET /takhtits/{uuid}/ayahs-breakers/{breaker_uuid}/ */
    async view(
        uuid:string,
        config?: RequestConfig<TakhtitsAyahsBreakerViewRequesParams>
    ): Promise<AxiosResponse<TakhtitsAyahsBreakerViewResponseData>> {
        return this.axiosGet(
            `/takhtits/${uuid}/ayahs-breakers/${config?.params?.breaker_uuid}/`,
            config
        );
    }

    /** POST /takhtits/{uuid}/ayahs-breakers/ */
    async create(
        uuid:string,
        data: Partial<TakhtitsAyahsBreakerViewResponseData>,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsAyahsBreakersAddResponseData>> {
        return this.axiosPost(
            `/takhtits/${uuid}/ayahs-breakers/`,
            data,
            config
        );
    }
}

// ------------------- WordsBreakers Action -------------------
export class TakhtitsWordsBreakersAction extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }

    /** GET /takhtits/{uuid}/words-breakers/ */
    async list(
        uuid:string,
        config?: RequestConfig
    ): Promise<AxiosResponse<any[]>> {
        return this.axiosGet(`/takhtits/${uuid}/words-breakers/`, config);
    }

    /** GET /takhtits/{uuid}/words-breakers/{breaker_uuid}/ */
    async view(
        params: TakhtitsWordsBreakerViewRequesParams,
        config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return this.axiosGet(
            `/takhtits/${params.uuid}/words-breakers/${params.breaker_uuid}/`,
            config
        );
    }

    /** POST /takhtits/{uuid}/words-breakers/ */
    async create(
        uuid:string,
        data: TakhtitsWordsBreakerViewRequesData,
        config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return this.axiosPost(
            `/takhtits/${uuid}/words-breakers/`,
            data,
            config
        );
    }
}

// ------------------- Main Takhtits Controller -------------------
export class TakhtitsController extends BaseController {
    public ayahsBreakers: TakhtitsAyahsBreakersAction;
    public wordsBreakers: TakhtitsWordsBreakersAction;

    constructor(connection: Connection, token?: string) {
        super(connection, token);
        this.ayahsBreakers = new TakhtitsAyahsBreakersAction(connection, token);
        this.wordsBreakers = new TakhtitsWordsBreakersAction(connection, token);
    }

    /** GET /takhtits/ */
    async list(
        config?: RequestConfig<TakhtitsListRequestParams>
    ): Promise<AxiosResponse<TakhtitsListResponseData[]>> {
        return this.axiosGet(`/takhtits/`, config);
    }

    /** GET /takhtits/{uuid}/ */
    async retrieve(
        uuid:string,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsViewResponseData>> {
        return this.axiosGet(`/takhtits/${uuid}/`, config);
    }

    /** POST /takhtits/ */
    async create(
        data: TakhtitsAddRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsAddResponseData>> {
        return this.axiosPost(`/takhtits/`, data, config);
    }

    /** PUT /takhtits/{uuid}/ */
    async update(
        uuid:string,
        data: TakhtitsEditRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsEditResponseData>> {
        return this.axiosPut(`/takhtits/${uuid}/`, data, config);
    }

    /** PATCH /takhtits/{uuid}/ */
    async partialUpdate(
        uuid:string,
        data: TakhtitsUpdateRequestData,
        config?: RequestConfig
    ): Promise<AxiosResponse<TakhtitsUpdateResponseData>> {
        return this.axiosPatch(`/takhtits/${uuid}/`, data, config);
    }

    /** DELETE /takhtits/{uuid}/ */
    async delete(
        uuid:string,
        config?: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return this.axiosDelete(`/takhtits/${uuid}/`, config);
    }
}
