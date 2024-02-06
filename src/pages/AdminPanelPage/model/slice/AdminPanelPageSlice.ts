import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminPanelPageSchema } from '../types/AdminPanelPageSchema';

const initialState: AdminPanelPageSchema = {

};

export const AdminPanelPageSlice = createSlice({
    name: 'AdminPanelPage',
    initialState,
    reducers: {
        // reducerName: (state, action: PayloadAction<DataType>) => {
        //     state.name = action.payload;
        // },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(thunkName.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(thunkName.fulfilled, (
    //             state,
    //             action: PayloadAction<DataType>,
    //         ) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(thunkName.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })
    // },
});

export const { actions: AdminPanelPageActions } = AdminPanelPageSlice;
export const { reducer: AdminPanelPageReducer } = AdminPanelPageSlice;
