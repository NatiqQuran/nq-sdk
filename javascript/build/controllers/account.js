export class ControllerAccount {
    conn;
    constructor(connection) {
        this.conn = connection;
    }
    async sendCode(data) {
        return this.conn.axios.post("/account/sendCode", data);
    }
    async verify(data) {
        return this.conn.axios.post("/account/verify", data);
    }
    async logout() {
        return this.conn.axios.get("/account/logout");
    }
}
//# sourceMappingURL=account.js.map