// Group
// Groups List
interface GroupsListResponseItem {
    url: string;
    name: string;
}
export type GroupsListResponseData = GroupsListResponseItem[];

// Groups View
export interface GroupsViewRequestParams {
    id: string;
}
export interface GroupsViewResponseData {
    url: string;
    name: string;
}

// Groups Add
export interface GroupsAddRequestData {
    name: string;
}
export interface GroupsAddResponsetData {
    url: string;
    name: string;
}

// Groups Edit
export interface GroupsEditRequestParams {
    id: string;
}

export interface GroupsEditRequestData {
    name: string;
}
export interface GroupsEditResponsetData {
    url: string;
    name: string;
}

// Groups Update
export interface GroupsUpdateRequestParams {
    id: string;
}
export interface GroupsUpdateRequestData {
    name?: string;
}
export interface GroupsUpdateResponsetData {
    url: string;
    name: string;
}
