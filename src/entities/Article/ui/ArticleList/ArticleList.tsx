import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/Article';
import { ArticalListItem } from '../ArticalListItem/ArticalListItem';
import { ArticalListItemSkeleton } from '../ArticalListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;



    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ArticalListItemSkeleton className={cls.card} key={index} view={view} />
        ));

    const renderArticle = (article: Article) => (
        <ArticalListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
