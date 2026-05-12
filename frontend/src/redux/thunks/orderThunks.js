import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance';

export const placeOrder = createAsyncThunk(
    'orders/placeOrder',
    async (orderData, thunkAPI) => {
        try {
            const response = await API.post('/orders', orderData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);
