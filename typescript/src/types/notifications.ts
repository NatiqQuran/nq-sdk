import { FilterQueryParams } from "../utils/globalTypes";

// Notifications
 type NotificationStatus =
    | "nothing_happened"
    | "got_notification"
    | "viewed_notification"
    | "opened_notification";

 type NotificationMessageType =
    | "success"
    | "failed"
    | "warning"
    | "pending";

 interface NotificationsDefaultRequestData {
    resource_controller?: string;
    resource_action?: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
}
 interface NotificationsDefaultResponseData {
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

export type NotificationsListResponseItem = NotificationsDefaultResponseData;

export type NotificationsListResponseData = NotificationsListResponseItem[];

// Notifications View
export type NotificationsViewResponseData = NotificationsDefaultResponseData;

// Notifications Add
export type NotificationsAddRequestData = NotificationsDefaultRequestData;
export type NotificationsAddResponseData = NotificationsDefaultResponseData;

// Notifications Edit
export type NotificationsEditRequestData = NotificationsDefaultRequestData;

export type NotificationsEditResponseData = NotificationsDefaultResponseData;

// Notification Partial Edit
export type NotificationsPartialEditRequestData = Partial<NotificationsDefaultRequestData>;

export type NotificationsPartialEditResponseData = NotificationsDefaultResponseData;




// /notifications/me/
export type NotificationsMeListRequestParams = FilterQueryParams;
export type NotificationsMeListResponseData = NotificationsDefaultResponseData[];


// /notifications/opened/
export type NotificationsOpenedResponseData = NotificationsDefaultResponseData;

// /notifications/viewed/
export type NotificationsViewedResponseData = Record<string, unknown>;
