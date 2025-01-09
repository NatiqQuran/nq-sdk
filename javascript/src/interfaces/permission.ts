//Permission List
interface PermissionListItemConditions {
    // id: number | null;  // deleted
    name: string;
    value: string;
}
interface PermissionListItem {
    uuid: string;
    account: {
        uuid: string;
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
    uuid: string;
    account: {
        uuid: string;
        username: string;
        firs_name: string | null;
        last_name: string | null;
    };
    object: string;
    action: string;
    conditions: PermissionViewConditions[];
}

//Permission Add
export interface PermissionAddRequestData {
    subject: string | null;
    object: string;
    action: string;
    conditions: PermissionListItemConditions[];
}

//Permission Edit
export interface PermissionEditRequestData {
    subject: string | null;
    object: string;
    action: string;
    conditions: PermissionViewConditions[];
}
