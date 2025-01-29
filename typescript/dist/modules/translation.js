export class ControllerTranslation {
    constructor(connection) {
        this.conn = connection;
    }
    list(config) {
        return this.conn.axios.get(`/translation`, config);
    }
    view(target, config) {
        return this.conn.axios.get(`/translation/${target}`, config);
    }
    add(data, config) {
        return this.conn.axios.post(`/translation`, data, config);
    }
    edit(target, data, config) {
        return this.conn.axios.post(`/translation/${target}`, data, config);
    }
    delete(target, config) {
        return this.conn.axios.delete(`/translation/${target}`, config);
    }
    /**
     * @description `/translation/text`
     */
    text() {
        return new ActionText(this.conn);
    }
}
class ActionText {
    constructor(connection) {
        this.conn = connection;
    }
    view(target, config) {
        return this.conn.axios.get(`/translation/text/${target}`, config);
    }
    modify(target, data, config) {
        return this.conn.axios.post(`/translation/text/${target}`, data, config);
    }
    delete(target, config) {
        return this.conn.axios.delete(`/translation/text/${target}`, config);
    }
}
//# sourceMappingURL=translation.js.map