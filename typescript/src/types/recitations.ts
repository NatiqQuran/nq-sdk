//Recitations List

type Status = "draft" | "pending_review" | "published";

interface RecitationsListItem {
    uuid: string;
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    recitation_type: string;
    created_at: string;
    ayahs_timestamps: string;
}
export type RecitationsListResponseData = RecitationsListItem[];

//Recitations View
export interface RecitationsViewRequestParams {
    uuid: string;
}
export interface RecitationsViewResponseData {
    uuid: string;
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
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
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    file: FileObject;
    recitation_type: string;
    words_timestamps: WordsTimestampsItem[];
}
export interface RecitationsAddResponseDate {
    uuid: string;
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
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
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
    recitation_date: string;
    recitation_location: string;
    duration: string;
    file: FileObject;
    recitation_type: string;
    words_timestamps: WordsTimestampsItem[];
}
export interface RecitationsEditResponseData {
    uuid: string;
    mushaf: number;
    surah: number;
    status: Status;
    reciter_account: number;
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
    mushaf?: number;
    surah?: number;
    status?: Status;
    reciter_account?: number;
    recitation_date?: string;
    recitation_location?: string;
    duration?: string;
    file?: FileObject;
    recitation_type?: WordsTimestampsItem[];
}
export interface RecitationsUpdateResponseData {
    mushaf?: number;
    surah?: number;
    status?: Status;
    reciter_account?: number;
    recitation_date?: string;
    recitation_location?: string;
    duration?: string;
    file?: FileObject;
    recitation_type?: WordsTimestampsItem[];
}
