//Profile
 interface ProfileDefaultRequestData {
    username: string[];
    email?: string;
    first_name?: string;
    last_name?: string;
}
 interface ProfileDefaultResponseData {
    username: string[];
    email?: string;
    first_name?: string;
    last_name?: string;
}
//Profile View
export type ProfileViewResponseData = ProfileDefaultResponseData;

//Profile Me
//Profile Me View
export type ProfileMeViewResponseData = ProfileDefaultResponseData;

// Profile Me Add
export type ProfileMeAddRequestData = ProfileDefaultRequestData;
export type ProfileMeAddResponseData = ProfileDefaultResponseData;
