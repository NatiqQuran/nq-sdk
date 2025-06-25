export class ControllerSurah {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    list(config) {
        return this.conn.axios.get(`/surah`, config);
    }
    view(target, config) {
        return this.conn.axios.get(`/surah/${target}`, config);
    }
    add(data, config) {
        return this.conn.axios.post(`/surah`, data, config);
    }
    edit(target, data, config) {
        return this.conn.axios.post(`/surah/${target}`, data, config);
    }
    delete(target, config) {
        return this.conn.axios.delete(`/surah/${target}`, config);
    }
}
//# sourceMappingURL=surah.js.map