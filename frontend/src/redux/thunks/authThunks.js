import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/axiosInstance';

export const loginUserThunk = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await API.post('/auth/login', userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
