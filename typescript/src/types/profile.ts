//Prifile View
export interface PrifileViewRequestParams {
    id: number;
}
export interface ProfileViewResponseData {
    username: string[];
    email?: string;
    first_name?: string;
    last_name?: string;
}
//Profile Me
//Profile Me List
interface ProfileMeListResponseItem {
    username: string;
    email?: string;
    first_name?: string;
    last_name?: string;
}
export type ProfileMeListResponseData = ProfileMeListResponseItem[];

// Profile Me Add
export interface ProfileMeAddRequestData {
    username: string[];
    email?: string;
    first_name?: string;
    last_name?: string;
}

export interface ProfileMeAddResponseData {
    username: string[];
    email?: string;
    first_name?: string;
    last_name?: string;
}
