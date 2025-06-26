// Auth

// Login
export interface AuthLoginRequestData {
    username: string;
    password: string;
}

// Register
export interface AuthRegisterRequestData {
    username: string;
    password: string;
    password2: string;
    email: string;
    first_name?: string;
    last_name?: string;
}

export interface AuthRegisterResponseData {
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
}
