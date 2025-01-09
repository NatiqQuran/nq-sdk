import { LangCodeType } from "../langCode.js";
import { Filter, Sajdah, Period } from "./utils.js";

//Surah List
type SorahlistSort = "name" | "number" | "createTime" | "updateTime";
export interface SurahListParams extends Filter<SorahListSort> {
    mushaf: string;
}
