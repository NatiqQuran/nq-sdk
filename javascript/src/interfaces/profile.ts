//profie List
export interface ProfileListItem {
    uuid: string;
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
export interface ProfileEditRequestData {
    username: string;
    first_name: string | null;
    last_name: string | null;
    birthday: string | null;
    profile_image: string | null;
}
