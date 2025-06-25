import { UUID } from "./utils/utils.js";
interface UserListItem {
    uuid: UUID;
    email: string | null;
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
    language: string | null;
}
export type UserListResponseData = UserListItem[];
export interface UserAddrequestBody {
    username: string;
    primary_email?: string | null;
    first_name: string;
    last_name: string;
    birthday: string;
    profile_image?: string;
    language: string;
}
export {};
