import axiosInstance from '../../services/axios.config';
import axios from 'axios'; // Chỉ dùng cho external APIs

// ===== INTERNAL APIs (dùng axiosInstance với interceptor) =====

export const getProfleByUsername = async (id: number) => {
    return await axiosInstance.get(`/test/get-profile-by-id/${id}`);
}

export const helloName = async (name: string) => {
    return await axiosInstance.get('/test/hello-name', {
        params: { name }
    });
}

// ===== EXTERNAL APIs (dùng axios thường) =====

export const testMockData = async () => {
    return await axios.get('https://n8n.naiscorp.com/webhook-test/mock/users');
}

export const testMockDataPostMethod = async (data: any) => {
    return await axios.post('https://n8n.naiscorp.com/webhook-test/mock/text', data);
};
