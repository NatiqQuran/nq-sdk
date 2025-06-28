// Groups

// Groups List
interface GroupsListResponseItem {
    url: string;
    name: string;
}
export type GroupsListResponseData = GroupsListResponseItem[];

// Groups View
export interface GroupsViewRequestParams {
    id: number;
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
    id: number;
}

export interface GroupsEditRequestData {
    name: string;
}

// Groups Update
export interface GroupsUpdateRequestParams {
    id: number;
}
export interface GroupsUpdateRequestData {
    name?: string;
}
