export class ControllerWord {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async view(target, config) {
        return await this.conn.axios.get(`/word/${target}`, config);
    }
    async edit(target, data, config) {
        return await this.conn.axios.post(`/word/${target}`, data, config);
    }
    async delete(target, config) {
        return await this.conn.axios.delete(`/word/${target}`, config);
    }
}
//# sourceMappingURL=word.js.map