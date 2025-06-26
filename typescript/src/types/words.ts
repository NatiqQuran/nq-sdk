import { IdParam } from "../utils/globalTypes";

// Word schema (components/schemas/Word)
export interface WordResponseData {
  id: number;
  ayah_id: number;
  text: string;
}

// لیست Word
export type WordListResponseData = WordResponseData[];

// نمایش یک Word
export type WordViewRequestParams = IdParam;
export type WordViewResponseData = WordResponseData;

//  Word
export interface WordAddRequestData {
  ayah_id: number;
  text: string;
}
export type WordAddResponseData = WordResponseData;

// Word (PUT)
export type WordUpdateRequestParams = IdParam;
export interface WordUpdateRequestData {
  ayah_id: number;
  text: string;
}
export type WordUpdateResponseData = WordResponseData;

//  Word (PATCH)
export type WordPartialUpdateRequestParams = IdParam;
export interface WordPartialUpdateRequestData {
  ayah_id?: number;
  text?: string;
}
export type WordPartialUpdateResponseData = WordResponseData;

// حذف Word
export type WordDeleteRequestParams = IdParam;
