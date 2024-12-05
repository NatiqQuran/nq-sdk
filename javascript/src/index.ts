//Types
import { LangCodeType } from "./langCode.js";
export { type LangCodeType };

//Interfaces
import {
    AccountSendCodeRequesteData,
    AccountVerifyRequesteData,
} from "./interfaces/account.js";
import { UserListItem, UserAddRequestData } from "./interfaces/user.js";
import {
    ProfileListItem,
    ProfileAddRequestData,
} from "./interfaces/profile.js";
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
    PhraseAddRequestData,
    PhraseViewResponseData,
} from "./interfaces/phrase.js";
export {
    type AccountSendCodeRequesteData,
    type AccountVerifyRequesteData,
    type UserListItem,
    type UserAddRequestData,
    type ProfileListItem,
    type ProfileAddRequestData,
    type MushafListResponseData,
    type MushafViewResponseData,
    type SurahListResponseData,
    type SurahViewResponseData,
    type AyahListResponseData,
    type AyahViewResponseData,
    type TranslationListResponseData,
    type TranslationViewResponseData,
    type PhraseListResponseData,
    type PhraseAddRequestData,
    type PhraseViewResponseData,
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
