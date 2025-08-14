import { FilterQueryParams, Status } from "../utils/globalTypes";

//Translations
interface TranslationsDefaultRequestData {
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}
interface TranslationsDefaultResponseData {
    uuid: string;
    mushaf_uuid: string;
    translator_uuid: string;
    language: string;
    release_date?: string;
    source?: string;
    status?: Status;
}

//Translations List
export interface TranslationsListRequestParams extends FilterQueryParams {
    language?: string;
    mushaf: string;
}
export type TranslationsListResponseItem = TranslationsDefaultResponseData;
export type TranslationsListResponseData = TranslationsListResponseItem[];

//Translations View
export interface TranslationsViewRequestParams extends FilterQueryParams {
    uuid?: string; 
}
export interface TranslationsViewAyah {
    uuid: string;
    ayah_uuid: string;
    text: string;
    bismillah?: string;
}
export interface TranslationsViewResponseData
    extends TranslationsDefaultResponseData {
    ayahs: TranslationsViewAyah[];
}

//Translations Add
export type TranslationsAddRequestData = TranslationsDefaultRequestData;
export type TranslationsAddResponseData = TranslationsDefaultResponseData;

//Translations Edit
export type TranslationsEditRequestData = TranslationsDefaultRequestData;
export type TranslationsEditResponseData = TranslationsDefaultResponseData;

//Translations PartialEdit
export type TranslationsPartialEditRequestData = TranslationsDefaultRequestData;
export type TranslationsPartialEditResponseData =
    Partial<TranslationsDefaultResponseData>;

// AyahsTranslation 
interface AyahsTranslationDefaultParams {
    ayah_uuid: string;
}
interface AyahsTranslationDefaultRequestData {
    text: string;
    bismillah?: string;
}
interface AyahsTranslationDefaultResponseData {
    uuid: string;
    text: string;
    bismillah?: string;
  }

  // AyahsTranslation List
  export interface AyahsTranslationListRequestParams extends FilterQueryParams {
    uuid:string;
    surah_uuid?:string;
  }
  export type AyahsTranslationListResponseData = AyahsTranslationDefaultResponseData[];

  // AyahsTranslation View 
  export type AyahsTranslationViewRequestParams = AyahsTranslationDefaultParams;
  export type AyahsTranslationViewResponseData = AyahsTranslationDefaultResponseData;

  // AyahsTranslation Add
  export type AyahsTranslationAddRequestParams = AyahsTranslationDefaultParams;
  export type AyahsTranslationAddRequestData = AyahsTranslationDefaultRequestData;
  export type AyahsTranslationAddResponseData = AyahsTranslationDefaultResponseData;

  // AyahsTranslation Edit
  export type AyahsTranslationEditRequestParams = AyahsTranslationDefaultParams;
  export type AyahsTranslationEditResponseData = AyahsTranslationDefaultResponseData;

  // Translation Import
  export interface TranslationImportRequestData {
    file: File;
  }
  export type TranslationImportResponseData = TranslationsDefaultResponseData;

