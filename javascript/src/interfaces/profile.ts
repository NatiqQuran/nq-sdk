import { UUID } from "./utils/utils.js";

//profie List
interface ProfileListItem {
    uuid: UUID;
    email: string | null;
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
    language: string | null;
}
export type ProfileListResponseData = ProfileListItem[];

//profile Edit
export interface ProfileEditrequestBody {
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    language: string | null;
    profile_image: string | null;
}
