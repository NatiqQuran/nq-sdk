import { UUID } from "./utils/utils.js";

//Organization List
export interface OrganizationListItem {
    uuid: UUID;
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
//Organization/Name List
export interface OrganizationNameListItem {
    uuid: UUID;
    language: string;
    name: string;
}
export type OrganizationNameListResponseData = OrganizationNameListItem[];

//Organization/Name View
export interface OrganizationNameViewResponseData {
    uuid: UUID;
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
