//Types
import { LangCodeType } from "./langCode";
export { type LangCodeType };

//Interfaces
import { MushafListProps, MushafViewProps } from "./interfaces/mushaf";
import { SurahListResponseData, SurahViewProps } from "./interfaces/surah";
import {
    TranslationListProps,
    TranslationViewProps,
} from "./interfaces/translation";
export {
    type MushafListProps,
    type MushafViewProps,
    type SurahListResponseData,
    type SurahViewProps,
    type TranslationListProps,
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
