export class ControllerPhrase {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async list(config) {
        return await this.conn.axios.get(`/phrase`, config);
    }
    async view(target, config) {
        return await this.conn.axios.get(`/phrase/${target}`, config);
    }
    async add(data, config) {
        return await this.conn.axios.post(`/phrase`, data, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/phrase/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/phrase/${target}`, config);
    }
}
//# sourceMappingURL=phrese.js.map