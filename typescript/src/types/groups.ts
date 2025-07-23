// Groups
 interface GroupsDefaultRequestData {
    name: string;
}
 interface GroupsDefaultResponseData {
    url: string;
    name: string;
}

// Groups List
export type GroupsListResponseData = GroupsDefaultResponseData[];

// Groups View
export type GroupsViewResponseData = GroupsDefaultResponseData;

// Groups Add
export type GroupsAddRequestData = GroupsDefaultRequestData;
export type GroupsAddResponseData = GroupsDefaultResponseData;

// Groups Edit
export type GroupsEditRequestData = GroupsDefaultRequestData;
export type GroupsEditResponseData = GroupsDefaultResponseData;

// Groups Partial Edit  
export type GroupsPartialEditRequestData = Partial<GroupsDefaultRequestData>;
export type GroupsPartialEditResponseData = GroupsDefaultResponseData;

