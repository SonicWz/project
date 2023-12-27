import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment/index';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { AtricleDetailsCommentsSliceReducer, getArticleComments } from '../../model/slices/AtricleDetailsCommentsSlice';
import cls from './AtricleDetailsPage.module.scss';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/AtricleDetailsPage/model/selectors/Comments/Comments';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/AtricleDetailsPage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AtricleDetailsPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsComments: AtricleDetailsCommentsSliceReducer,
};

const AtricleDetailsPage = ({ className }: AtricleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);

    const isLoading = useSelector(getArticleCommentsIsLoading);

    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.AtricleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    if (error) {
        <div className={classNames(cls.AtricleDetailsPage, {}, [className])}>
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} />
        </div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AtricleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentsList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AtricleDetailsPage);
