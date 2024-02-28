import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { FC, lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRating = lazy(
    () => import('./ProfileRating'),
);

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={120} />}>
            <ProfileRating {...props} />
        </Suspense>
    )
}
