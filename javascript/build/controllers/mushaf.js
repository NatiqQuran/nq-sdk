export class ControllerMushaf {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/mushaf`, config);
    }
    async view(target, config) {
        return await this.conn.axios.get(`/mushaf/${target}`, config);
    }
    async add(data, config) {
        return await this.conn.axios.post(`/mushaf`, data, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/mushaf/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/mushaf/${target}`, config);
    }
}
//# sourceMappingURL=mushaf.js.map