//Organization List
export interface OrganizationListItem {
    uuid: string;
    username: string;
    primary_name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
export type OrganizationListResponseData = OrganizationListItem[];

//Organization view
export interface OrganizationViewResponseData {
    usename: string;
    name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}

//Organization Add | Edit
export interface OrganizationAddRequestData {
    usename: string;
    name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}

//Organization/Name
//Organization/Text List
export interface OrganizationNameListItem {
    uuid: string;
    language: string;
    name: string;
}
export type OrganizationNameListResponseData = OrganizationNameListItem[];

//Organization/Text View
export interface OrganizationNameViewResponseData {
    uuid: string;
    language: string;
    name: string;
}

//Organization/Name Add
export interface OrganizationNameAddRequestData {
    name: string;
    language: string;
}

//Organization/Name Edit
export interface OrganizationNameEditRequestData {
    name: string;
}
