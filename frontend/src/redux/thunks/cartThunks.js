import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance';

export const syncCartWithServer = createAsyncThunk(
    'cart/sync',
    async (cartData, thunkAPI) => {
        try {
            
            const response = await API.post('/cart/sync', { items: cartData });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);
