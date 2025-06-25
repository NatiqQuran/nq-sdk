export class ControllerOrganization {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    list(config) {
        return this.conn.axios.get(`/organization`, config);
    }
    view(target, config) {
        return this.conn.axios.get(`/organization/${target}`, config);
    }
    add(data, config) {
        return this.conn.axios.post(`/organization`, data, config);
    }
    edit(target, data, config) {
        return this.conn.axios.post(`/organization/${target}`, data, config);
    }
    delete(target, config) {
        return this.conn.axios.delete(`/organization/${target}`, config);
    }
    /**
     * @description `/organization/name`
     */
    name() {
        return new ActionName(this.conn);
    }
}
class ActionName {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    view(target, config) {
        return this.conn.axios.get(`/organization/name/${target}`, config);
    }
    add(data, config) {
        return this.conn.axios.post(`/organization/name`, data, config);
    }
    edit(target, data, config) {
        return this.conn.axios.post(`/organization/name${target}`, data, config);
    }
    delete(target, config) {
        return this.conn.axios.delete(`/organization/name/${target}`, config);
    }
}
//# sourceMappingURL=organization.js.map