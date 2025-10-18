import axiosInstance from './axios.config';

// ---- Types ----
export interface GetProductsParams {
  page?: number;
  limit?: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  file: string; // Required field for file upload
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

// ---- API Functions ----

export const getAllProducts = async (
  params: GetProductsParams = { page: 1, limit: 10 }
): Promise<ProductsResponse> => {
  try {
    const response = await axiosInstance.get('/api/products', { params });
    return response as unknown as ProductsResponse;
  } catch (error) {
    console.error('[getAllProducts] Error:', error);
    throw error;
  }
};

export const createProduct = async (data: FormData): Promise<Product> => {
  try {
    const response = await axiosInstance.post('/api/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response as unknown as Product;
  } catch (error) {
    console.error('[createProduct] Error:', error);
    throw error;
  }
};
