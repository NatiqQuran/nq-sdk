import { UUID } from "../utils/globalTypes";

//Word View
export interface WordViewResponseData {
    word: string;
}

//Word Add | Edit
export interface WordAddRequestData {
    ayah_uuid: UUID;
    word: string;
}
