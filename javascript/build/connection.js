import axios from "axios";
export class Connection {
    servers;
    live;
    axios_instance;
    constructor(servers, auth_token) {
        this.servers = servers.map((x) => ({ url: x }));
        this.live = this.servers[0];
        // Create an instance of axios, so we don't have to include auth headers in every line
        this.axios_instance = axios.create({
            // default url like api.natiq.net
            baseURL: this.live.url.toString(),
            headers: {
                Authorization: auth_token,
            },
        });
    }
    async healthCheck() {
        for (let server of this.servers) {
            const begin = Date.now();
            const resp = await this.axios.get("/");
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
    selectBestPing() {
        let best = { ping: 10000 };
        for (let i = 0; i <= this.servers.length; i++) {
            const server = this.servers[i];
            if (server.ping && server.ping < best.ping) {
                best = server;
            }
        }
        this.live = best;
        this.axios_instance.defaults.baseURL = this.live.url.toString();
    }
    setToken(newToken) {
        this.axios_instance.defaults.headers.common.Authorization = newToken;
    }
    get axios() {
        return this.axios_instance;
    }
}
//# sourceMappingURL=connection.js.map