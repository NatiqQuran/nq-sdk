export class ControllerPermission {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/permission`, config);
    }
    async view(target, config) {
        return await this.conn.axios.get(`/permission/${target}`, config);
    }
    async add(data, config) {
        return await this.conn.axios.post(`/permission`, data, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/permission/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/permission/${target}`, config);
    }
}
//# sourceMappingURL=permission.js.map