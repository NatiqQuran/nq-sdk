import axios, { AxiosInstance } from "axios";

interface Server {
    url: URL;
    health?: "Up" | "Down";
    ping?: number;
}

export class Connection {
    private servers: Server[];
    private live: Server;
    private axios_instance: AxiosInstance;

    constructor(servers: URL[], auth_token?: string) {
        this.servers = servers.map(x => ({ url: x } as Server));
        this.live = this.servers[0];
        // Create an instance of axios, so we don't have to include auth headers in every line
        this.axios_instance = axios.create({
            // default url like api.natiq.net
            baseURL: this.live.url.toString(),
            headers: {
                Authorization: auth_token
            }
        });
    }

    public async healthCheck() {
        for (let server of this.servers) {
            const begin = Date.now();
            const resp = await axios.get('/');
            const delay = Date.now() - begin;

            if (resp.status === 200) {
                server.health = "Up";
                server.ping = delay;
            }
            else {
                server.health = "Down";
            }
        }
    }

    // TODO: write it cleaner
    public selectBestPing() {
        let best = { ping: 10000 };
        for (let i = 0; i <= this.servers.length; i++) {
            const server = this.servers[i];
            if (server.ping < best.ping) {
                (best as Server) = server;
            }
        }
        this.live = best as Server;
        this.axios_instance.defaults.baseURL = this.live.url.toString()
    }

    public setToken(newToken: string) {
        this.axios_instance.defaults.headers.common.Authorization = newToken;
    }

    get axios() {
        return this.axios_instance;
    }
}
