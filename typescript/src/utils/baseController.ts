import { Connection } from "../client/connection";
import { RequestConfig } from "../utils/globalTypes";

export class BaseController {
    protected conn: Connection;
    protected token: string | undefined;

    constructor(connection: Connection, auth_token?: string) {
        this.conn = connection;
        this.token = auth_token;
        if (auth_token) {
            this.setAuthToken(auth_token);
        }
    }

    private setAuthToken(token: string) {
        this.token = token;
    }

    // Helper method to add token to the request config if available
    protected getAuthConfig<P>(config?: RequestConfig<P>): RequestConfig<P> {
        if (this.token) {
            return {
                ...config,
                headers: {
                    ...config?.headers,
                    Authorization: this.token, // Add token to Authorization header
                },
            };
        }
        return config || {}; // Return empty config if no token is available
    }

    // Optionally, you can have methods for making common requests like GET, POST, etc.
    protected async clientGet<T, C>(
        url: any,
        config?: RequestConfig<C>
    ): Promise<T> {
        return (await this.conn.client
            .GET(url, this.getAuthConfig(config))).data
    }

    protected async clientPost<T>(
        url: any,
        data: any,
        config?: RequestConfig
    ): Promise<T> {
        return (await this.conn.client
            .POST(url, {
                body: data,
                headers: this.getAuthConfig(config).headers
            })).data
    }

    protected async clientDelete<T>(url: any, config?: RequestConfig): Promise<T> {
        return (await this.conn.client
            .DELETE(url, this.getAuthConfig(config))).data
    }
}
