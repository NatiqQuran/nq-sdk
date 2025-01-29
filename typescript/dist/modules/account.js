var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ControllerAccount {
    constructor(connection) {
        this.conn = connection;
    }
    sendCode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conn.axios.post("/account/sendCode", data);
        });
    }
    verify(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conn.axios.post("/account/verify", data);
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conn.axios.get("/account/logout");
        });
    }
}
//# sourceMappingURL=account.js.map