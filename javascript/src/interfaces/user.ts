//user view
export interface UserListItem {
    uuid: string;
    email: string | null;
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
    language: string | null;
}
export type UserListResponseData = UserListItem[];

//user Add | Edit
export interface UserAddRequestData {
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
}
