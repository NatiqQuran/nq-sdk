export interface UploadAddParams {
    subject: string | "recitations";
}

export interface UploadAddResponseData {
    uuid: string;
}

export interface UploadSubjectsViewResponseData {
    subject: string;
    type: string;
    description: string;
    max_size: number;
}

