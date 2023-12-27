import { StateSchema } from 'app/providers/StoreProvider';
import {
    createEntityAdapter,
    createSlice,
    EntityState,
    PayloadAction,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { AtricleDetailsCommentsSchema } from '../types/AtricleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const AtricleDetailsCommentsSlice = createSlice({
    name: 'AtricleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<AtricleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});


export const { actions: AtricleDetailsCommentsSliceActions } = AtricleDetailsCommentsSlice;
export const { reducer: AtricleDetailsCommentsSliceReducer } = AtricleDetailsCommentsSlice;
