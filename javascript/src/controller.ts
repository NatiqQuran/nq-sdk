import { NQConnection } from "./connection";

export type ActionStatus<T> = T | number | string;
export default interface Controller<T> {
    readonly conn: NQConnection,

    // Actions
    list: <P>(params: P) => Promise<T[]>,
    view: <Target, P>(target: Target, params: P) => Promise<T>;
    add: (value: T) => Promise<ActionStatus<T>>,
    edit: <Target>(target: Target, value: T) => Promise<ActionStatus<T>>,
    remove: <Target>(target: Target) => Promise<ActionStatus<T>>,
}
