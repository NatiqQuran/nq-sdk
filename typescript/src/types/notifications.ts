
import { ListQueryParams } from "../utils/globalTypes";


// Notifications
// Notifications List
export interface NotificationsListRequestParams {
    page:number;
    page_size:number;
  
}
export type NotificationStatus =
  | 'nothing_happened'
  | 'got_notification'
  | 'viewed_notification'
  | 'opened_notification';

export type NotificationMessageType =
  | 'success'
  | 'failed'
  | 'warning'
  | 'pending';

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
export interface NotificationsViewRequestParams {
    id: string;
}

export interface NotificationsViewResponseData {
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

// Notifications Add
export interface NotificationsAddRequestData {
    resource_controller: string;
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
}

export interface NotificationsAddResponseData {
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
    created_at: string;
}

// Notifications Edit
export interface NotificationsEditRequestParams {
    id: string;
}

export interface NotificationsEditRequestData {
    resource_controller: string;
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
}

export interface NotificationsEditResponseData {
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

// Notifications Update
export interface NotificationsUpdateRequestParams {
    id: string;
}

export interface NotificationsUpdateRequestData {
    resource_controller?: string;
    resource_action?: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
}

export interface NotificationsUpdateResponseData {
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

// /notifications/me/
export interface NotificationsMeListRequestParams extends ListQueryParams {}
export interface NotificationsMeListResponseData{
    uuid: string;
    resource_controller: string;
    resource_action: string;
    resource_uuid?: string;
    status?: NotificationStatus;
    description?: string;
    message?: string;
    message_type?: NotificationMessageType;
    created_at: string;
};

// /notifications/opened/
export interface NotificationsOpenedRequestParams {
  uuid: string;
}
export type NotificationsOpenedResponseData = Record<string, unknown>;

// /notifications/viewed/
export type NotificationsViewedResponseData = Record<string, unknown>;
