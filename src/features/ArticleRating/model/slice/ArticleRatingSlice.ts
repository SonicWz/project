import { createSlice } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/ArticleRatingSchema';

const initialState: ArticleRatingSchema = {};

export const ArticleRatingSlice = createSlice({
    name: 'ArticleRating',
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

export const { actions: ArticleRatingActions } = ArticleRatingSlice;
export const { reducer: ArticleRatingReducer } = ArticleRatingSlice;
