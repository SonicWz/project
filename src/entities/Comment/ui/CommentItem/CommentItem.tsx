import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'entities/Comment/index';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string,
    comment?: Comment,
    isLoading?: boolean,
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton height={30} width={30} borderRadius="50%" />
                    <Skeleton className={cls.userName} height={20} width={100} />
                </div>
                <Skeleton className={cls.text} height={100} width="100%" />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={`/${AppRoutes.PROFILE}/${comment?.user.id}`}>
                <div className={cls.header}>
                    {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar} />}
                    <Text className={cls.userName} title={comment?.user.username} />
                </div>
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
