import { UUID } from "./utils/utils.js";

//Word View
export interface WordViewResponseData {
    uuid: UUID;
    creator_user_id: number;
    word: string;
}

//Word Add | Edit
export interface WordAddrequestBody {
    ayah_uuid: UUID;
    word: string;
}
