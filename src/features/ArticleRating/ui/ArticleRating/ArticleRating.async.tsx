import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRating = lazy(
    () => import('./ArticleRating'),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
    <Suspense fallback={<Skeleton width={'100%'} height={120}/>}>
        <ArticleRating {...props}/>
    </Suspense>
    )
}
