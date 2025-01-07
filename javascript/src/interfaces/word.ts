//Word View
export interface WordViewResponseData {
    uuid: string;
    creator_user_id: number;
    word: string;
}

//Word Add | Edit
export interface WordAddRequestData {
    ayah_uuid: string;
    word: string;
}
