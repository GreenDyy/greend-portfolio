import axiosInstance from './axios.config';

interface GetProductsParams {
    page?: number;
    limit?: number;
}

interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

interface ProductsResponse {
    data: Product[];
    total: number;
    page: number;
    limit: number;
}

const getAllProducts = async (params: GetProductsParams = { page: 1, limit: 10 }): Promise<ProductsResponse> => {
    try {
        const response = await axiosInstance.get('/api/products', { params });
        return response as ProductsResponse;
    } catch (error) {
        throw error;
    }
};

const createProduct = async (data: FormData): Promise<Product> => {
    try {
        const response = await axiosInstance.post('/api/products', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response as Product;
    } catch (error) {
        throw error;
    }
};

export { getAllProducts, createProduct };
export type { GetProductsParams, Product, ProductsResponse };

