import { UUID } from "../utils/globalTypes";

// Permission
interface PermissionConditions {
    name: string;
    value: string;
}
// Permission List
export interface PermissionListResponseItem {
    uuid: UUID;
    account: {
        uuid: UUID;
        username: string;
        first_name: string | null;
        last_name: string | null;
    };
    object: string;
    action: string;
    conditions: PermissionConditions[];
}
export type PermissionListResponseData = PermissionListResponseItem[];

// Permission view
export type PermissionViewResponseData = PermissionListResponseItem;

// Permission Add/Edit
export interface PermissionAddRequestData {
    subject: UUID;
    object: string;
    action: string;
    conditions: PermissionConditions[];
}
