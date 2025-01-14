import { UUID } from "./utils/utils.js";

//Permission List
interface PermissionListItemConditions {
    // id: number | null;  // deleted
    name: string;
    value: string;
}
interface PermissionListItem {
    uuid: UUID;
    account: {
        uuid: UUID;
        username: string;
        firs_name: string;
        last_name: string;
    };
    object: string;
    action: string;
    conditions: PermissionListItemConditions[];
}
export type PermissionListResponseData = PermissionListItem[];

//Permission view
interface PermissionViewConditions {
    name: string;
    value: string;
}
export interface PermissionViewResponseData {
    uuid: UUID;
    account: {
        uuid: UUID;
        username: string;
        firs_name: string | null;
        last_name: string | null;
    };
    object: string;
    action: string;
    conditions: PermissionViewConditions[];
}

//Permission Add
export interface PermissionAddrequestBody {
    subject: UUID;
    object: string;
    action: string;
    conditions: PermissionListItemConditions[];
}

//Permission Edit
export interface PermissionEditrequestBody {
    subject: UUID;
    object: string;
    action: string;
    conditions: PermissionViewConditions[];
}
