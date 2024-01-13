import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticalListItem.module.scss';
import { ArticleView } from '../../model/types/Article';

interface ArticalListItemSkeletonProps {
    className?: string,
    view: ArticleView,
}

export const ArticalListItemSkeleton = memo(({ className, view }: ArticalListItemSkeletonProps) => {
    const { t } = useTranslation();

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticalListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton borderRadius="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton width={250} height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticalListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.contentWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={60} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
