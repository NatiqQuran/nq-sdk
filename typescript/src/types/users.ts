// Users 
 interface UsersDefaultRequestData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
 interface UsersDefaultResponseData {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
// Users List
export type UsersListResponseData = UsersDefaultResponseData[];

//Users View
export type UsersViewResponseData = UsersDefaultResponseData;

//Users Add
export type UsersAddRequestData = UsersDefaultRequestData;
export type UsersAddResponseData = UsersDefaultResponseData;

//Users Edit
export type UsersEditRequestData = UsersDefaultRequestData;
export type UsersEditResponseData = UsersDefaultResponseData;

//Users Partial Edit
export type UsersPartialEditRequestData = Partial<UsersDefaultRequestData>;
export type UsersPartialEditResponseData = UsersDefaultResponseData;
