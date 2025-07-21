import { FilterQueryParams } from "../utils/globalTypes";
//Recitations
//Recitations List

type Status = "draft" | "pending_review" | "published";

export interface RecitationsListRequestParams extends FilterQueryParams {
    mushaf_uuid: string;
    reciter_uuid: string;
}
interface RecitationsListItem {
    uuid: string;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    status?: Status;
    reciter_account_uuid: string;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    ayahs_timestamps: string;
}
export type RecitationsListResponseData = RecitationsListItem[];

//Recitations View
export interface RecitationsViewRequestParams {
    uuid: string;
}
export interface RecitationsViewResponseData {
    uuid: string;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    status?: Status;
    reciter_account_uuid: string;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    ayahs_timestamps: string;
}

//Pharses Add
interface WordsTimestampsItem {
    start: string;
    end: string;
    word_uuid: string;
}
interface FileObject {
    s3_uuid: string;
}

export interface RecitationsAddRequestData {
    mushaf_uuid: string;
    surah_uuid: string;
    status?: Status;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    file: FileObject;
    recitation_type: string;
    words_timestamps: WordsTimestampsItem[];
}
export interface RecitationsAddResponseDate {
    uuid: string;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    status?: Status;
    reciter_account_uuid: string;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    ayahs_timestamps: string[];
}

//Recitations Edit
export interface RecitationsEditRequestParams {
    uuid: string;
}
export interface RecitationsEditRequestData {
    mushaf_uuid: string;
    surah_uuid: string;
    status?: Status;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    file: FileObject;
    recitation_type: string;
    words_timestamps: WordsTimestampsItem[];
}
export interface RecitationsEditResponseData {
    uuid: string;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    status?: Status;
    reciter_account_uuid: string;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    ayahs_timestamps: string[];
}

//Recitations Update
export interface RecitationsUpdateRequestParams {
    uuid: string;
}
export interface RecitationsUpdateRequestData {
    mushaf_uuid?: string;
    surah_uuid?: string;
    status?: Status;
    recitation_date?: string;
    recitation_location?: string;
    duration?: string;
    file?: FileObject;
    recitation_type?: string;
    words_timestamps?: WordsTimestampsItem[];
}
export interface RecitationsUpdateResponseData {
    uuid: string;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    status?: Status;
    reciter_account_uuid: string;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    updated_at: string;
    ayahs_timestamps: string[];
}
