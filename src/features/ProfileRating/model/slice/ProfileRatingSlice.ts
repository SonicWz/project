import { createSlice } from '@reduxjs/toolkit';
import { ProfileRatingSchema } from '../types/ProfileRatingSchema';

const initialState: ProfileRatingSchema = {};

export const ProfileRatingSlice = createSlice({
    name: 'ProfileRating',
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

export const { actions: ProfileRatingActions } = ProfileRatingSlice;
export const { reducer: ProfileRatingReducer } = ProfileRatingSlice;
