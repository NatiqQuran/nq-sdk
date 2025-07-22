import { FilterQueryParams } from "../utils/globalTypes";

// Notifications
export type NotificationsDefaultRequestParams = {
    id: string;
}
export type NotificationsDefaultRequestData = {
    resource_controller?: string;
    resource_action?: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
}
export type NotificationsDefaultResponseData = {
    uuid: string;
    resource_controller: string;
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
    created_at: string;
    
}


// Notifications List
export interface NotificationsListRequestParams {
    page: number;
    page_size: number;
}
export type NotificationStatus =
    | "nothing_happened"
    | "got_notification"
    | "viewed_notification"
    | "opened_notification";

export type NotificationMessageType =
    | "success"
    | "failed"
    | "warning"
    | "pending";

interface NotificationsListResponseItem {
    uuid: string;
    resource_controller: string;
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
    created_at: string;
}

export type NotificationsListResponseData = NotificationsListResponseItem[];

// Notifications View
export type NotificationsViewRequestParams = NotificationsDefaultRequestParams;
export type NotificationsViewResponseData = NotificationsDefaultResponseData;

// Notifications Add
export type NotificationsAddRequestData = NotificationsDefaultRequestData;
export type NotificationsAddResponseData = NotificationsDefaultResponseData;

// Notifications Edit
export type NotificationsEditRequestParams = NotificationsDefaultRequestParams;
export type NotificationsEditRequestData = NotificationsDefaultRequestData;

export type NotificationsEditResponseData = NotificationsDefaultResponseData;

// Notification Partial Edit
export type NotificationsPartialEditRequestParams = NotificationsDefaultRequestParams;
export type NotificationsPartialEditRequestData = Partial<NotificationsDefaultRequestData>;

export type NotificationsPartialEditResponseData = NotificationsDefaultResponseData;




// /notifications/me/
export type NotificationsMeListRequestParams = FilterQueryParams;
export type NotificationsMeListResponseData = NotificationsDefaultResponseData[];


// /notifications/opened/
export type NotificationsOpenedRequestParams = NotificationsDefaultRequestParams;
export type NotificationsOpenedResponseData = NotificationsDefaultResponseData;

// /notifications/viewed/
export type NotificationsViewedResponseData = Record<string, unknown>;
