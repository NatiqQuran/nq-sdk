//Phrases List
interface PhrasesListItem {
    id: number;
    phrase: string;
}
export type PhrasesListResponseData = PhrasesListItem[];

//Phrases View
export interface PhrasesViewRequestParams {
    id: number;
}
export interface PhrasesViewResponseData {
    id: number;
    phrase: string;
}

//Pharses Add
export interface PhrasesAddRequestData {
    phrase: string;
}

//Phrases Edit
export interface PhrasesEditRequestParams {
    id: number;
}
export interface PhrasesEditRequestData {
    phrase: string;
}

//Phrases Update
export interface PhrasesUpdateRequestParams {
    id: number;
}
export interface PhrasesUpdateRequestData {
    phrase?: string;
}

// Phrases Modify
export interface PhrasesModifyRequestData {
    phrases: {
        [key: string]: string;
    };
}
export interface PhrasesModifyResponseData {
    success: boolean;
    message: string;
}
