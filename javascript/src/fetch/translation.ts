import axios, { AxiosResponse } from "axios";

import {
    TranslationListProps,
    TranslationViewProps,
} from "../interfaces/translation";

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

export function getTranslationList(
    params: TranslationListParams
): Promise<AxiosResponse<TranslationListProps>> {
    return axios.get<TranslationListProps>(
        API_URL + "/translation" + queries(params)
    );
}

interface TranslationParams {
    surah_uuid?: string;
}

export function getTranslation(
    UUID: string,
    params: TranslationParams
): Promise<AxiosResponse<TranslationViewProps>> {
    return axios.get<TranslationViewProps>(
        API_URL + "/translation/" + UUID + queries(params)
    );
}
