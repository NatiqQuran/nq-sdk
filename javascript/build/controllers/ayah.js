export class ControllerAyah {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/ayah`, config);
    }
    async view(target, config) {
        return await this.conn.axios.get(`/ayah/${target}`, config);
    }
    async add(data, config) {
        return await this.conn.axios.post(`/ayah`, data, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/ayah/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/ayah/${target}`, config);
    }
}
//# sourceMappingURL=ayah.js.map