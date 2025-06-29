//Recitations List
interface RecitationsListItem {
    id: number;
    phrase: string;
}
export type RecitationsListResponseData = RecitationsListItem[];

//Recitations View
export interface RecitationsViewRequestParams {
    id: number;
}
export interface RecitationsViewResponseData {
    id: number;
    phrase: string;
}

//Pharses Add
export interface RecitationsAddRequestData {
    phrase: string;
}

//Recitations Edit
export interface RecitationsEditRequestParams {
    id: number;
}
export interface RecitationsEditRequestData {
    phrase: string;
}

//Recitations Update
export interface RecitationsUpdateRequestParams {
    id: number;
}
export interface RecitationsUpdateRequestData {
    phrase?: string;
}
