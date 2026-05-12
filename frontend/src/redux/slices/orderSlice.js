import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: { orders: [], loading: false, success: false },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        resetOrder: (state) => {
            state.success = false;
        }
    }
});

export const { setOrders, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
