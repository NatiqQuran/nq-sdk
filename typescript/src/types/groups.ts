// Groups
export type GroupsDefaultRequestParams = {
    id: string;
}
export type GroupsDefaultRequestData = {
    name: string;
}
export type GroupsDefaultResponseData = {
    url: string;
    name: string;
}

// Groups List
export type GroupsListResponseData = GroupsDefaultResponseData[];

// Groups View
export type GroupsViewRequestParams = GroupsDefaultRequestParams;
export type GroupsViewResponseData = GroupsDefaultResponseData;

// Groups Add
export type GroupsAddRequestData = GroupsDefaultRequestData;
export type GroupsAddResponseData = GroupsDefaultResponseData;

// Groups Edit
export type GroupsEditRequestParams = GroupsDefaultRequestParams;
export type GroupsEditRequestData = GroupsDefaultRequestData;
export type GroupsEditResponseData = GroupsDefaultResponseData;

// Groups Partial Edit  
export type GroupsPartialEditRequestParams = GroupsDefaultRequestParams;
export type GroupsPartialEditRequestData = Partial<GroupsDefaultRequestData>;
export type GroupsPartialEditResponseData = GroupsDefaultResponseData;

