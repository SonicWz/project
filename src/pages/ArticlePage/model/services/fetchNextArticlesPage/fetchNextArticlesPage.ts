import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticlePageSliceActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageNumber, getArticlesHasMore, getArticlesIsLoading } from '../../selectors/Article';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesPageNumber(getState());
            const isLoading = getArticlesIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(ArticlePageSliceActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
