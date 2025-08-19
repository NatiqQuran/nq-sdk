
export interface RecitationsListResponseData {
}
export interface RecitationsListRequestParams {
    mushaf_uuid?: string;
    ordering?: string;
    page?: number;
    page_size?: number;
    reciter_uuid?: string;
    search?: string;
}
export interface RecitationsCreateRequestData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}
export interface RecitationsCreateResponseData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}
export interface RecitationsRetrieveResponseData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}
export interface RecitationsUpdateRequestData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}
export interface RecitationsUpdateResponseData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}
export interface RecitationsPartialupdateRequestData {
    ayahs_timestamps?: string;
    created_at?: string;
    duration?: string;
    file?: object;
    get_mushaf_uuid?: string;
    get_surah_uuid?: string;
    mushaf_uuid?: string;
    recitation_date?: string;
    recitation_location?: string;
    recitation_type?: string;
    reciter_account_uuid?: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid?: string;
    updated_at?: string;
    uuid?: string;
    words_timestamps?: object[];
}
export interface RecitationsPartialupdateResponseData {
    ayahs_timestamps: string;
    created_at: string;
    duration: string;
    file: object;
    get_mushaf_uuid: string;
    get_surah_uuid: string;
    mushaf_uuid: string;
    recitation_date: string;
    recitation_location: string;
    recitation_type: string;
    reciter_account_uuid: string;
    status?: 'draft' | 'pending_review' | 'published';
    surah_uuid: string;
    updated_at: string;
    uuid: string;
    words_timestamps: object[];
}