// Takhtits

interface TakhtitsDefaultResponseData {
    uuid: string;
    creator:number;
    mushaf:number;
    account:number
    created_at:string;
}

// Takhtits List
export interface TakhtitsListRequestParams{
    mushaf:string;
}
export type TakhtitsListResponseData = TakhtitsDefaultResponseData;

// Takhtits View
export type TakhtitsViewResponseData = TakhtitsDefaultResponseData;

// Takhtits Add
export interface TakhtitsAddRequestData{
    mushaf_uuid:string;
    account_uuid:string;
}
export type TakhtitsAddResponseData = TakhtitsDefaultResponseData;

// Takhtits Edit
export interface TakhtitsEditRequestData{
    mushaf:number;
    account:number;   
}
export type TakhtitsEditResponseData = TakhtitsDefaultResponseData

// Takhtits Update
export interface TakhtitsUpdateRequestData{
    mushaf?:number;
    account?:number;   
}
export type TakhtitsUpdateResponseData = TakhtitsDefaultResponseData


// Takhtits AyahsBreakersView
export interface TakhtitsAyahsBreakerViewRequesParams{
    breaker_uuid:string;
} 
export interface TakhtitsAyahsBreakerViewResponseData{
    uuid:string
    type?: "page" | "juz" | "hizb" | "rub" | "manzil"| "ruku";
}
// Takhtits AyahsBreakers Add
export interface TakhtitsAyahsBreakersAddResponseData{
    uuid:string
    type?: "page" | "juz" | "hizb" | "rub" | "manzil"| "ruku";
}

// Takhtits WordsBreakers View
export interface TakhtitsWordsBreakerViewRequesParams{
    breaker_uuid:string;
    uuid:string
} 

// Takhtits WordsBreakers Add   
export interface TakhtitsWordsBreakerViewRequesData{
    word_uuid:string;
    type:string
} 









