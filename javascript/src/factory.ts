import { Connection } from "./connection";
import Controller, { ActionStatus } from "./controller";

export function buildController<T>(controller: string) {
    return class implements Controller<T> {
        readonly conn: Connection;

        constructor(connection: Connection) {
            this.conn = connection;
        }

        async view<Target = string>(target: Target, params: any): Promise<T> {
            return (await this.conn.axios.get(`/${controller}/${target}`,
                {
                    params: params
                }
            )).data;
        }

        async list(params: any): Promise<T[]> {
            return (await this.conn.axios.get(`/${controller}`,
                {
                    params: params
                }
            )).data;
        }

        async add(value: T): Promise<ActionStatus<T>> {
            return (await this.conn.axios.post(`/${controller}`, value)).status;
        }

        async edit<Target = string>(target: Target, value: T): Promise<ActionStatus<T>> {
            return (await this.conn.axios.post(`/${controller}/${target}`, value)).data;
        }

        async delete<Target = string>(target: Target): Promise<ActionStatus<T>> {
            return (await this.conn.axios.delete(`/${controller}/${target}`)).data;
        }
    }
}
