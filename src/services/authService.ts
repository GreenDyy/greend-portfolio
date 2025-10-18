import axiosInstance from './axios.config';

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    name?: string;
}

interface AuthResponse {
    token?: string;
    user?: {
        id: string;
        email: string;
        name: string;
    };
    message?: string;
}

const login = async (data: LoginData): Promise<AuthResponse> => {
    try {
        const response = await axiosInstance.post('/api/auth/login', data);
        return response as AuthResponse;
    } catch (error) {
        // Log lỗi để debug
        console.error('Login API Error:', error);
        
        // Throw lại error để component có thể xử lý
        throw error;
    }
};

const register = async (data: RegisterData): Promise<AuthResponse> => {
    try {
        const response = await axiosInstance.post('/api/auth/register', data);
        return response as AuthResponse;
    } catch (error) {
        console.error('Register API Error:', error);
        throw error;
    }
};

export { login, register };
export type { LoginData, RegisterData, AuthResponse };

