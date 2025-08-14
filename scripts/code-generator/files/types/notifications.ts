
export interface NotificationsMeResponseData {
}
export interface NotificationsMeRequestParams {
    page?: number;
    page_size?: number;
}
export interface NotificationsOpenedResponseData {
}
export interface NotificationsOpenedRequestParams {
    uuid: string;
}
export interface NotificationsViewedResponseData {
}
export interface NotificationsListResponseData {
}
export interface NotificationsListRequestParams {
    page?: number;
    page_size?: number;
}
export interface NotificationsCreateRequestData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}
export interface NotificationsCreateResponseData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}
export interface NotificationsRetrieveResponseData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}
export interface NotificationsUpdateRequestData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}
export interface NotificationsUpdateResponseData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}
export interface NotificationsPartialupdateRequestData {
    created_at?: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action?: string;
    resource_controller?: string;
    resource_uuid?: string;
    status?: object;
    uuid?: string;
}
export interface NotificationsPartialupdateResponseData {
    created_at: string;
    description?: string;
    message?: string;
    message_type?: object;
    resource_action: string;
    resource_controller: string;
    resource_uuid?: string;
    status?: object;
    uuid: string;
}