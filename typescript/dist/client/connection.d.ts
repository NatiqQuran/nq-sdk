import { AxiosInstance } from "axios";
export declare class Connection {
    private servers;
    private live;
    private axios_instance;
    constructor(servers: URL[], auth_token?: string);
    healthCheck(): Promise<void>;
    selectBestPing(): void;
    setToken(newToken: string): void;
    get axios(): AxiosInstance;
}
