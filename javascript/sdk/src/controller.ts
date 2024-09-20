import { Connection } from "./connection";

export type ActionStatus<T> = T | number | string;
export default interface Controller {
    readonly conn: Connection,

    // Actions
    list: <R, P>(params: P) => Promise<R[]>,
    view: <R, Target, P>(target: Target, params: P) => Promise<R>;
    add: <T, R>(value: T) => Promise<ActionStatus<R>>,
    edit: <T, Target, R>(target: Target, value: T) => Promise<ActionStatus<R>>,
    delete: <R, Target>(target: Target) => Promise<ActionStatus<R>>,
}
