//Recitations List

type Status = "draft" | "pending_review" | "published";

interface RecitationsListItem {
    id: number;
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
    id: number;
}
export interface RecitationsViewResponseData {
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
    id: number;
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
