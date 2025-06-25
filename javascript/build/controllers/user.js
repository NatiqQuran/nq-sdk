export class ControllerUser {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/user`, config);
    }
    async view(target, config) {
        return await this.conn.axios.get(`/user/${target}`, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/user/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/user/${target}`, config);
    }
}
//# sourceMappingURL=user.js.map