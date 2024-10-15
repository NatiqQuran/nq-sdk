//Types
import { LangCodeType } from "./langCode.js";
export { type LangCodeType };

//Interfaces
import {
    MushafListResponseData,
    MushafViewResponseData,
} from "./interfaces/mushaf.js";
import {
    SurahListResponseData,
    SurahViewResponseData,
} from "./interfaces/surah.js";
import {
    AyahListResponseData,
    AyahViewResponseData,
} from "./interfaces/ayah.js";
import {
    TranslationListResponseData,
    TranslationViewResponseData,
} from "./interfaces/translation.js";
export {
    type MushafListResponseData,
    type MushafViewResponseData,
    type SurahListResponseData,
    type SurahViewResponseData,
    type AyahListResponseData,
    type AyahViewResponseData,
    type TranslationListResponseData,
    type TranslationViewResponseData,
};

//Controllers
import { Connection } from "./connection.js";
import { ControllerSurah } from "./controllers/surah.js";
import { ControllerMushaf } from "./controllers/mushaf.js";
import { ControllerAyah } from "./controllers/ayah.js";
import { ControllerTranslation } from "./controllers/translation.js";
export {
    Connection,
    ControllerSurah,
    ControllerMushaf,
    ControllerAyah,
    ControllerTranslation,
};

//Functions
import { getLangNameFromCode } from "./langCode.js";
export { getLangNameFromCode };
