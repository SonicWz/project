import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsComments.module.scss';
import { Text, TextSize } from '@/shared/ui/deprecated/Text/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comments';
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader/Loader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation();
        const { className, id } = props;
        const dispatch = useAppDispatch();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.ArticleDetailsComments, {}, [
                    className,
                ])}
            >
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
