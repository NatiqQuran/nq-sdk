import axios from "axios";

import { API_URL, queries } from "../assets/fetchLib";
import { LangCodeType } from "../assets/langCode";

interface TranslationListParams {
    mushaf: "hafs";
    language?: LangCodeType;
    sort?: "language";
    order?: "ASC" | "DESC";
    from?: number;
    to?: number;
}

export function getTranslationList(params: TranslationListParams) {
    return axios.get(API_URL + "/translation" + queries(params));
}

interface TranslationParams {
    surah_uuid?: string;
}

export function getTranslation(UUID: string, params: TranslationParams) {
    return axios.get(API_URL + "/translation/" + UUID + queries(params));
}
