import axios, { AxiosInstance } from "axios";

interface Server {
    name: string;
    url: URL;
    location: string; // ???
    health?: "Up" | "Down";
    ping?: number;
}

export class NQConnection {
    private servers: Server[];
    private live: Server;
    private axios_instance: AxiosInstance;

    constructor(servers: Server[], auth_token: string) {
        this.servers = servers;
        this.live = servers[0];
        // Create an instance of axios, so we don't have to include auth headers in every line
        this.axios_instance = axios.create({ headers: { Authorization: auth_token } })
    }

    public async healthCheck() {
        for (let server of this.servers) {
            const begin = Date.now();
            const resp = await axios.get(`${server.url.toString()}/`);
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

    public selectBestPing() {
        let best = { ping: 10000 };
        for (let i = 0; i <= this.servers.length; i++) {
            const server = this.servers[i];
            if (server.ping < best.ping) {
                (best as Server) = server;
            }
        }
        this.live = best as Server;
    }

    public generate_full_path(route_path: string): string {
        return this.live.url.toString() + route_path;
    }

    get axios() {
        return this.axios_instance;
    }
}
