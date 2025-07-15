// Users List
interface UsersListResponseItem {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
export type UsersListResponseData = UsersListResponseItem[];

//Users View
export interface UsersViewRequestParams {
    uuid: string;
}
export interface UsersViewResponseData {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

//Users Add
export interface UsersAddRequestData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

//Users Edit
export interface UsersEditRequestParams {
    uuid: string;
}
export interface UsersEditRequestData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
export interface UsersEditResponseData {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

//Users Update
export interface UsersUpdateRequestParams {
    uuid: string;
}
export interface UsersUpdateRequestData {
    username?: string;
    password?: string;
    password2?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
}
export interface UsersUpdateResponseData {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
