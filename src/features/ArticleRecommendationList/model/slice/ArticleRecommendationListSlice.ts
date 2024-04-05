import { createSlice } from '@reduxjs/toolkit';
import { ArticleRecommendationListSchema } from '../types/ArticleRecommendationListSchema';

const initialState: ArticleRecommendationListSchema = {};

export const ArticleRecommendationListSlice = createSlice({
    name: 'ArticleRecommendationList',
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

export const { actions: ArticleRecommendationListActions } =
    ArticleRecommendationListSlice;
export const { reducer: ArticleRecommendationListReducer } =
    ArticleRecommendationListSlice;
