export const API_URL = "https://api.natiq.net";

export function queries(params: object): string | null {
    const paramsAsArray: Array<string[]> = Object.entries(params);

    if (paramsAsArray.length === 0) return null;

    const ParamsAsQueryArray: string[] = paramsAsArray.map(
        (item) => item[0] + "=" + item[1]
    );

    return "?" + ParamsAsQueryArray.join("&");
}
