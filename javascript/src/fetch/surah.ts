import axios, { AxiosResponse } from "axios";

import { API_URL, queries } from "../assets/fetchLib";
import { SurahListProps, SurahViewProps } from "../interfaces/surah";

interface SurahListParams {
    mushaf: "hafs";
    sort?: "number" | "name";
    order?: "ASC" | "DESC";
    from?: number;
    to?: number;
}

export function getSurahList(
    params: SurahListParams
): Promise<AxiosResponse<SurahListProps>> {
    return axios.get<SurahListProps>(API_URL + "/surah" + queries(params));
}

export function getSurah(UUID: string): Promise<AxiosResponse<SurahViewProps>> {
    return axios.get<SurahViewProps>(API_URL + "/surah/" + UUID);
}
