export type Sajdah = "vajib" | "mustahab" | null;
export type Period = "makki" | "madani" | null;
export interface Filter<S> {
    sort?: S;
    order?: "asc" | "desc";
    from?: number;
    to?: number;
}
