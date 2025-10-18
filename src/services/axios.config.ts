import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

const DEV_API_URL = 'http://localhost:4006';
const PROD_API_URL = 'https://api.example.com';

// Tạo instance axios với cấu hình cơ bản
const axiosInstance = axios.create({
    baseURL: DEV_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor cho request
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Thêm token vào header nếu có
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error: AxiosError) => {
        // Xử lý lỗi ở đây
        if (error.response?.data) {
            // Lỗi từ server
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            // Không nhận được response
            console.error('Network Error:', error.request);
        } else {
            // Lỗi khi setting up request
            console.error('Request Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

