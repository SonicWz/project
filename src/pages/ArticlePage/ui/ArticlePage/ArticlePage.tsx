import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticlePageSliceActions, ArticlePageSliceReducer, getArticles } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { articleDetailsActions } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchNextArticlesPage } from 'pages/ArticlePage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import cls from './ArticlePage.module.scss';
import {
    getArticlesError, getArticlesHasMore, getArticlesIsLoading, getArticlesPageNumber, getArticlesView,
} from '../../model/selectors/Article';

interface ArticlePageProps {
    className?: string,
}

const reducers: ReducersList = {
    articlesPage: ArticlePageSliceReducer,
};

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesView);
    const isLoading = useSelector(getArticlesIsLoading);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(ArticlePageSliceActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(ArticlePageSliceActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticlePage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
