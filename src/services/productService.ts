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
  image?: string;
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
    const { data } = await axiosInstance.get<ProductsResponse>('/api/products', { params });
    return data;
  } catch (error) {
    console.error('[getAllProducts] Error:', error);
    throw error;
  }
};

export const createProduct = async (data: FormData): Promise<Product> => {
  try {
    const { data: createdProduct } = await axiosInstance.post<Product>('/api/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return createdProduct;
  } catch (error) {
    console.error('[createProduct] Error:', error);
    throw error;
  }
};
