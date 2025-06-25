import { UUID } from "./utils/utils.js";
export interface WordViewResponseData {
    uuid: UUID;
    creator_user_id: number;
    word: string;
}
export interface WordAddrequestBody {
    ayah_uuid: UUID;
    word: string;
}
