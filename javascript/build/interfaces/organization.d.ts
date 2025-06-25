import { UUID } from "./utils/utils.js";
export interface OrganizationListItem {
    uuid: UUID;
    username: string;
    primary_name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
export type OrganizationListResponseData = OrganizationListItem[];
export interface OrganizationViewResponseData {
    usename: string;
    name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
export interface OrganizationAddrequestBody {
    usename: string;
    name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
export interface OrganizationNameListItem {
    uuid: UUID;
    language: string;
    name: string;
}
export type OrganizationNameListResponseData = OrganizationNameListItem[];
export interface OrganizationNameViewResponseData {
    uuid: UUID;
    language: string;
    name: string;
}
export interface OrganizationNameAddrequestBody {
    name: string;
    language: string;
}
export interface OrganizationNameEditrequestBody {
    name: string;
}
