import * as TranslationsType from "../types/translations";
import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig } from "../utils/globalTypes";

export class TranslationsAyah extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** GET /translations/ayah/ */
    async translations_ayah_retrieve(config?: RequestConfig<TranslationsType.TranslationsAyahRequestParams>
    ): Promise<AxiosResponse<TranslationsType.TranslationsAyahResponseData>> {
        return await this.axiosGet(`/translations/ayah/`, config);
    }
    /** POST /translations/ayah/ */
    async translations_ayah_create(data: TranslationsType.TranslationsAyahRequestData, config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosPost(`/translations/ayah/`, data, config);
    }
}

export class TranslationsImport extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** POST /translations/import/ */
    async translations_import_create(config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsType.TranslationsImportResponseData>> {
        return await this.axiosPost(`/translations/import/`, config);
    }
}

export class TranslationsController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }
    
    /** GET /translations/ */
    async list(config?: RequestConfig<TranslationsType.TranslationsListRequestParams>
    ): Promise<AxiosResponse<TranslationsType.TranslationsListResponseData>> {
        return await this.axiosGet(`/translations/`, config);
    }
    
    /** POST /translations/ */
    async create(data: TranslationsType.TranslationsCreateRequestData,config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsType.TranslationsCreateResponseData>> {
        return await this.axiosPost(`/translations/`, data, config);
    }
    
    /** GET /translations/{uuid}/ */
    async retrieve(uuid: string,config?: RequestConfig<TranslationsType.TranslationsRetrieveRequestParams>
    ): Promise<AxiosResponse<TranslationsType.TranslationsRetrieveResponseData>> {
        return await this.axiosGet(`/translations/${uuid}/`, config);
    }
    
    /** PUT /translations/{uuid}/ */
    async update(uuid: string,data: TranslationsType.TranslationsUpdateRequestData,config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsType.TranslationsUpdateResponseData>> {
        return await this.axiosPut(`/translations/${uuid}/`, data, config);
    }
    
    /** PATCH /translations/{uuid}/ */
    async partialUpdate(uuid: string,data: TranslationsType.TranslationsPartialupdateRequestData,config?: RequestConfig
    ): Promise<AxiosResponse<TranslationsType.TranslationsPartialupdateResponseData>> {
        return await this.axiosPatch(`/translations/${uuid}/`, data, config);
    }
    
    /** DELETE /translations/{uuid}/ */
    async delete(uuid: string,config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosDelete(`/translations/${uuid}/`, config);
    }
    
    ayah() {
        return new TranslationsAyah(this.conn);
    }
    import() {
        return new TranslationsImport(this.conn);
    }
}