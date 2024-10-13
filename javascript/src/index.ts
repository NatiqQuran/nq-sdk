//Types
import { LangCodeType } from "./langCode";
export { type LangCodeType };

//Interfaces
import {
    MushafListResponseData,
    MushafViewResponseData,
} from "./interfaces/mushaf";
import {
    SurahListResponseData,
    SurahViewResponseData,
} from "./interfaces/surah";
import {
    TranslationListResponseData,
    TranslationViewResponseData,
} from "./interfaces/translation";
export {
    type MushafListResponseData,
    type MushafViewResponseData,
    type SurahListResponseData,
    type SurahViewResponseData,
    type TranslationListResponseData,
    type TranslationViewResponseData,
};

//Controllers
import { Connection } from "./connection";
import { ControllerSurah } from "./controllers/surah";
import { ControllerMushaf } from "./controllers/mushaf";
import { ControllerTranslation } from "./controllers/translation";
export { Connection, ControllerSurah, ControllerMushaf, ControllerTranslation };

//Functions
import { getLangNameFromCode } from "./langCode";
export { getLangNameFromCode };
