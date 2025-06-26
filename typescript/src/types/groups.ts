import { UUID } from "../utils/globalTypes";

// //Organization List
// export interface OrganizationListItem {
//     uuid: UUID;
//     username: string;
//     primary_name: string;
//     profile_image: string | null;
//     established_date: string;
//     national_id: string;
// }
// export type OrganizationListResponseData = OrganizationListItem[];

// //Organization view
// export interface OrganizationViewResponseData {
//     usename: string;
//     name: string;
//     profile_image: string | null;
//     established_date: string;
//     national_id: string;
// }

// //Organization Add | Edit
// export interface OrganizationAddRequestData {
//     usename: string;
//     name: string;
//     profile_image: string | null;
//     established_date: string;
//     national_id: string;
// }

// //Organization/Name
// //Organization/Name List
// export interface OrganizationNameListItem {
//     uuid: UUID;
//     language: string;
//     name: string;
// }
// export type OrganizationNameListResponseData = OrganizationNameListItem[];

// //Organization/Name View
// export interface OrganizationNameViewResponseData {
//     uuid: UUID;
//     language: string;
//     name: string;
// }

// //Organization/Name Add
// export interface OrganizationNameAddRequestData {
//     name: string;
//     language: string;
// }

// //Organization/Name Edit
// export interface OrganizationNameEditRequestData {
//     name: string;
// }

// Group

// Group List
export interface GroupListResponseItem {
    url: string;
    name: string;
}
export type GroupListResponseData = GroupListResponseItem[];

// Group View
export interface GroupViewResponseData {
    url: string;
    name: string;
}

// Group Add
export interface GroupAddRequestData {
    name: string;
}

// Group Update
export interface GroupUpdateRequestData {
    name: string;
}

// Group Partial Update
export interface GroupPartialUpdateRequestData {
    name?: string;
}
