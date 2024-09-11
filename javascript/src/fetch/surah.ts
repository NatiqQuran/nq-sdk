import axios from "axios";

import { API_URL, queries } from "../assets/fetchLib";

interface SurahListParams {
    mushaf: "hafs";
    sort?: "number" | "name";
    order?: "ASC" | "DESC";
    from?: number;
    to?: number;
}

export function getSurahList(params: SurahListParams) {
    return axios.get(API_URL + "/surah" + queries(params));
}

export function getSurah(UUID: string) {
    return axios.get(API_URL + "/surah/" + UUID);
}
