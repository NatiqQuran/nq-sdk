import { UUID } from "../utils/globalTypes";

// Permission
interface PermissionConditions {
    name: string;
    value: string;
}
// Permission List
export interface PermissionListItem {
    uuid: UUID;
    account: {
        uuid: UUID;
        username: string;
        firs_name: string | null;
        last_name: string | null;
    };
    object: string;
    action: string;
    conditions: PermissionConditions[];
}
export type PermissionListResponseData = PermissionListItem[];

// Permission view
export type PermissionViewResponseData = PerformanceListItem;

// Permission Add/Edit
export interface PermissionAddRequestData {
    subject: UUID;
    object: string;
    action: string;
    conditions: PermissionConditions[];
}
