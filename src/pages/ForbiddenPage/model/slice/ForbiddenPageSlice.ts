import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ForbiddenPageSchema } from '../types/ForbiddenPageSchema';

const initialState: ForbiddenPageSchema = {

};

export const ForbiddenPageSlice = createSlice({
    name: 'ForbiddenPage',
    initialState,
    reducers: {
        reducerName: (state, action: PayloadAction<DataType>) => {
            state.name = action.payload;
        },
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

export const { actions: ForbiddenPageActions } = ForbiddenPageSlice;
export const { reducer: ForbiddenPageReducer } = ForbiddenPageSlice;
