import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await API.get('/products');
    return response.data;
});
