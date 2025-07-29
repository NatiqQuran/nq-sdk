import { FilterQueryParams } from "../utils/globalTypes";
//Recitations
 type Status = "draft" | "pending_review" | "published";
 interface RecitationsDefaultRequestData {
    mushaf_uuid: string;
    status?: Status;
    reciter_account_uuid:string
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
}
 interface RecitationsDefaultResponseData {
    uuid: string;
    get_mushaf_uuid: string;
    status?: Status;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    words_timestamps: WordsTimestampsItem[];
    ayahs_timestamps: string[];
}
//Recitations List


export interface RecitationsListRequestParams extends FilterQueryParams {
    mushaf_uuid: string;
    reciter_uuid?: string;
}

export type RecitationsListResponseData = RecitationsDefaultResponseData[];

//Recitations View
export type RecitationsViewResponseData = RecitationsDefaultResponseData;

//Pharses Add
interface WordsTimestampsItem {
    start: string;
    end: string;
    word_uuid: string;
}
interface FileObject {
    s3_uuid: string;
}

export type RecitationsAddRequestData = RecitationsDefaultRequestData;
export type RecitationsAddResponseData = RecitationsDefaultResponseData;

//Recitations Edit
export type RecitationsEditRequestData = RecitationsDefaultRequestData;
export type RecitationsEditResponseData = RecitationsDefaultResponseData;

//Recitations Partial Edit
export type RecitationsPartialEditRequestData = Partial<RecitationsDefaultRequestData>;
export type RecitationsPartialEditResponseData = RecitationsDefaultResponseData;

//Recitations Upload
export interface RecitationsUploadRequestParams{
    surah_uuid:string
}
export interface RecitationsUploadRequestData {
    file: File | Blob;
  }
