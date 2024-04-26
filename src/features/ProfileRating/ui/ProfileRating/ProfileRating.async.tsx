import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRating = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ProfileRating {...props} />
    </Suspense>
);
