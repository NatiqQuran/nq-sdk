//Types
import { LangCodeType } from "./langCode.js";
export { type LangCodeType };

//Interfaces
import {
    AccountSendCodeRequesteData,
    AccountVerifyRequesteData,
} from "./interfaces/account.js";
import { UserListItem, UserAddRequestData } from "./interfaces/user.js";
import { ProfileEditRequestData } from "./interfaces/profile.js";
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
    type ProfileEditRequestData,
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
import { ControllerAccount } from "./controllers/account.js";
import { ControllerUser } from "./controllers/user.js";
import { ControllerProfile } from "./controllers/profile.js";
import { ControllerSurah } from "./controllers/surah.js";
import { ControllerMushaf } from "./controllers/mushaf.js";
import { ControllerAyah } from "./controllers/ayah.js";
import { ControllerTranslation } from "./controllers/translation.js";
import { ControllerPhrase } from "./controllers/phrese.js";
import { ControllerOrganization } from "./controllers/organization.js";
export {
    Connection,
    ControllerAccount,
    ControllerUser,
    ControllerProfile,
    ControllerSurah,
    ControllerMushaf,
    ControllerAyah,
    ControllerTranslation,
    ControllerPhrase,
    ControllerOrganization,
};

//Functions
import { getLangNameFromCode } from "./langCode.js";
export { getLangNameFromCode };
