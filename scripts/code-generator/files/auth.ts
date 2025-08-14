import * as AuthType from "./types/auth.ts";
import { AxiosResponse } from "axios";
import { Connection } from "../client/connection";
import { BaseController } from "../utils/baseController";
import { RequestConfig } from "../utils/globalTypes";



export class AuthLogin extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** POST /auth/login/ */
    async auth_login_create(data: AuthType.AuthLoginRequestData, config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosPost(`/auth/login/`, data, config);
    }
}

export class AuthLogout extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** POST /auth/logout/ */
    async auth_logout_create(config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosPost(`/auth/logout/`, config);
    }
}

export class AuthLogoutall extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** POST /auth/logoutall/ */
    async auth_logoutall_create(config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosPost(`/auth/logoutall/`, config);
    }
}

export class AuthRegister extends BaseController {
    constructor(conn: Connection, token?: string) {
        super(conn, token);
    }
    /** POST /auth/register/ */
    async auth_register_create(data: AuthType.AuthRegisterRequestData, config?: RequestConfig
    ): Promise<AxiosResponse<any>> {
        return await this.axiosPost(`/auth/register/`, data, config);
    }
}



export class AuthController extends BaseController {
    constructor(connection: Connection, token?: string) {
        super(connection, token);
    }
    // --- Action methods ---
    login() {
        return new AuthLogin(this.conn);
    }
    logout() {
        return new AuthLogout(this.conn);
    }
    logoutall() {
        return new AuthLogoutall(this.conn);
    }
    register() {
        return new AuthRegister(this.conn);
    }
}