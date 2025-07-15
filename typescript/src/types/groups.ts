// Groups

// Groups List
interface GroupsListResponseItem {
    url: string;
    name: string;
}
export type GroupsListResponseData = GroupsListResponseItem[];

// Groups View
export interface GroupsViewRequestParams {
    uuid: string;
}
export interface GroupsViewResponseData {
    url: string;
    name: string;
}

// Groups Add
export interface GroupsAddRequestData {
    name: string;
}

// Groups Edit
export interface GroupsEditRequestParams {
    uuid: string;
}

export interface GroupsEditRequestData {
    name: string;
}

// Groups Update
export interface GroupsUpdateRequestParams {
    uuid: string;
}
export interface GroupsUpdateRequestData {
    name?: string;
}
