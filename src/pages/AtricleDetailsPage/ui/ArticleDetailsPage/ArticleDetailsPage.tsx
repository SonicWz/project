import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment/index';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/AtricleDetailsPage/model/selectors/Comments/Comments';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/AtricleDetailsPage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/AtricleDetailsPage/model/services/AddCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './AtricleDetailsPage.module.scss';
import { AtricleDetailsCommentsSliceReducer, getArticleComments } from '../../model/slices/AtricleDetailsCommentsSlice';
import { Page } from 'shared/ui/Page/Page';

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

    const onSendComment = useCallback((commentText: string) => {
        dispatch(addCommentForArticle(commentText));
    }, [dispatch]);

    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <Page className={classNames(cls.AtricleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    if (error) {
        <Page className={classNames(cls.AtricleDetailsPage, {}, [className])}>
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} />
        </Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.AtricleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentsList
                    isLoading={isLoading}
                    comments={comments}

                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(AtricleDetailsPage);
