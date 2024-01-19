import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIscrollSchema } from '../types/UIUIscrollSchema';

const initialState: UIscrollSchema = {
    scroll: {},
};

export const UIscrollSlice = createSlice({
    name: 'UIscroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path as string] = action.payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: UIscrollSliceActions } = UIscrollSlice;
export const { reducer: UIscrollSliceReducer } = UIscrollSlice;
