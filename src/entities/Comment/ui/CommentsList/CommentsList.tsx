import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment/index';
import { CommentItem } from '../CommentItem/CommentItem';
import cls from './CommentsList.module.scss';

interface CommentListProps {
    className?: string,
    comments?: Comment[],
    isLoading?: boolean,
}

export const CommentsList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading className={cls.comment} />
                <CommentItem isLoading className={cls.comment} />
                <CommentItem isLoading className={cls.comment} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment: Comment) => (
                        <CommentItem isLoading={isLoading} className={cls.comment} comment={comment} />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
