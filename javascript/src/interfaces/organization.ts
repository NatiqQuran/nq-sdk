//Organization List
export interface OrganizationListItem {
    uuid: string;
    username: string;
    primary_name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
//Organization view
export interface OrganizationAddResponsetData {
    usename: string;
    name: string;
    profile_image: string | null;
    established_date: string;
    national_id: string;
}
