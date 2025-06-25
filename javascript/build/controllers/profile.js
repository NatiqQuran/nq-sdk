export class ControllerProfile {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/profile`, config);
    }
    async edit(data, config) {
        return await this.conn.axios.post("/profile", data, config);
    }
}
//# sourceMappingURL=profile.js.map