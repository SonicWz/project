import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import cls from './ArticleInfiniteList.module.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '@/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string,
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams, setSearchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text text={error} theme={TextTheme.ERROR} />
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
});
