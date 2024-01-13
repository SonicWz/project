import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view;

export const getArticlesIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
