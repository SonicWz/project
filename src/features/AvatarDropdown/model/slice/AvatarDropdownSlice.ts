import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvatarDropdownSchema } from '../types/AvatarDropdownSchema';

const initialState: AvatarDropdownSchema = {

};

export const AvatarDropdownSlice = createSlice({
    name: 'AvatarDropdown',
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

export const { actions: AvatarDropdownActions } = AvatarDropdownSlice;
export const { reducer: AvatarDropdownReducer } = AvatarDropdownSlice;
