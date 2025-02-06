import { UUID } from "../utils/globalTypes";

//Word View
export interface WordViewResponseData {
    uuid: UUID;
    creator_user_id: number;
    word: string;
}

//Word Add | Edit
export interface WordAddRequestData {
    ayah_uuid: UUID;
    word: string;
}
