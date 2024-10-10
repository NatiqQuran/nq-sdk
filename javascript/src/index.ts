//Types
import { LangCodeType } from "./langCode";
export { type LangCodeType };

//Interfaces
import { MushafListProps, MushafViewRequestData } from "./interfaces/mushaf";
import { SurahListResponseData, SurahViewProps } from "./interfaces/surah";
import {
    TranslationListResponseData,
    TranslationViewProps,
} from "./interfaces/translation";
export {
    type MushafListProps,
    type MushafViewRequestData,
    type SurahListResponseData,
    type SurahViewProps,
    type TranslationListResponseData,
    type TranslationViewProps,
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
