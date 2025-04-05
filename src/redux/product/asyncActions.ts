import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductItem, FetchProductsParams } from './types';

const API_BASE_URL = 'https://672f4a27229a881691f27354.mockapi.io';

export const fetchProducts = createAsyncThunk<ProductItem[], FetchProductsParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `${API_BASE_URL}/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductByIdStatus',
  async (params: { id: string | undefined }) => {
    const { id } = params;
    const { data } = await axios.get(`${API_BASE_URL}/items/${id}`);
    return data;
  },
);
