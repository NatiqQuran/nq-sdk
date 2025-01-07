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
import {
    PhraseListResponseData,
    PhraseViewResponseData,
} from "./interfaces/phrase.js";
import { WordViewResponseData } from "./interfaces/word.js";
import {
    PermissionListResponseData,
    PermissionViewResponseData,
} from "./interfaces/permission.js";
export {
    type MushafListResponseData,
    type MushafViewResponseData,
    type SurahListResponseData,
    type SurahViewResponseData,
    type AyahListResponseData,
    type AyahViewResponseData,
    type TranslationListResponseData,
    type TranslationViewResponseData,
    type PhraseListResponseData,
    type PhraseViewResponseData,
    type WordViewResponseData,
    type PermissionListResponseData,
    type PermissionViewResponseData,
};

//Controllers
import { Connection } from "./connection.js";
import { ControllerAccount } from "./controllers/account.js";
import { ControllerUser } from "./controllers/user.js";
import { ControllerOrganization } from "./controllers/organization.js";
import { ControllerPermission } from "./controllers/permission.js";
import { ControllerMushaf } from "./controllers/mushaf.js";
import { ControllerSurah } from "./controllers/surah.js";
import { ControllerAyah } from "./controllers/ayah.js";
import { ControllerWord } from "./controllers/word.js";
import { ControllerTranslation } from "./controllers/translation.js";
import { ControllerPhrase } from "./controllers/phrese.js";
import { ControllerProfile } from "./controllers/profile.js";
export {
    Connection,
    ControllerAccount,
    ControllerUser,
    ControllerOrganization,
    ControllerPermission,
    ControllerMushaf,
    ControllerSurah,
    ControllerAyah,
    ControllerWord,
    ControllerTranslation,
    ControllerPhrase,
    ControllerProfile,
};

//Functions
import { getLangNameFromCode } from "./langCode.js";
export { getLangNameFromCode };
