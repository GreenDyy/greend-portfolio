import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

// Lấy API URL từ biến môi trường
const DEV_API_URL = import.meta.env.VITE_DEV_API_URL
const PROD_API_URL = import.meta.env.VITE_PROD_API_URL
const NODE_ENV = import.meta.env.VITE_NODE_ENV || import.meta.env.MODE;

// Chọn base URL dựa trên môi trường
const BASE_URL = NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL;

// Tạo instance axios với cấu hình cơ bản
const axiosInstance = axios.create({
    baseURL: BASE_URL,
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

