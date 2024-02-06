import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { {{pascalCase}}Schema } from '../types/{{pascalCase}}Schema';

const initialState: {{pascalCase}}Schema = {

};

export const {{pascalCase}}Slice = createSlice({
    name: '{{pascalCase}}',
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

export const { actions: {{pascalCase}}Actions } = {{pascalCase}}Slice;
export const { reducer: {{pascalCase}}Reducer } = {{pascalCase}}Slice;
