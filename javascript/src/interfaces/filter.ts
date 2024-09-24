export default interface Filter {
    sort?: string;
    order?: "asc" | "desc";
    from?: number;
    to?: number;
}
