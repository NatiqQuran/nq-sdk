import { NQConnection } from "./connection";
import Controller, { ActionStatus } from "./controller";

export function buildController<T>(controller: string) {
    return class implements Controller<T> {
        readonly conn: NQConnection;

        constructor(connection: NQConnection) {
            this.conn = connection;
        }

        async view<Target = string>(target: Target, params: any): Promise<T> {
            return (await this.conn.axios.get(this.conn.generate_full_path(`/${controller}/${target}`),
                {
                    params: params
                }
            )).data;
        }

        async list(params: any): Promise<T[]> {
            return (await this.conn.axios.get(this.conn.generate_full_path(`/${controller}`),
                {
                    params: params
                }
            )).data;
        }

        async add(value: T): Promise<ActionStatus<T>> {
            return (await this.conn.axios.post(this.conn.generate_full_path(`/${controller}`), value)).status;
        }

        async edit<Target = string>(target: Target, value: T): Promise<ActionStatus<T>> {
            return (await this.conn.axios.post(this.conn.generate_full_path(`/${controller}/${target}`), value)).data;
        }

        async remove<Target = string>(target: Target): Promise<ActionStatus<T>> {
            return (await this.conn.axios.delete(this.conn.generate_full_path(`/${controller}/${target}`))).data;
        }
    }
}
