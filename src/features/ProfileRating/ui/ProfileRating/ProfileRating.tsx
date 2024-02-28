import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import cls from './ProfileRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ProfileRatingProps {
    className?: string,
    profileId: string,
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { t } = useTranslation();
    const { className, profileId } = props;
    
    const userData = useSelector(getUserAuthData); 

    const {data, isError, isLoading} = useGetProfileRating({
        userId: userData?.id ?? '',
        profileId,
    });
    const [rateArticleMutation, {}] = useRateProfile();

    const rateProfileHandler = useCallback((starCount: number, feedback?: string) => {
        try{
            const args = { 
                userId: userData?.id ?? '',
                profileId,
                rate: starCount,
                feedback: feedback
            };
            rateArticleMutation(args);
        } catch(e){
            console.log(e);
        }
        
    }, [userData?.id, profileId, rateArticleMutation])

    const onRateProfileAccept = useCallback((starCount: number, feedback?: string) => {
        rateProfileHandler(starCount, feedback);
    }, [rateProfileHandler])

    const onRaterofileCancel = useCallback((starCount: number, feedback?: string) => {
        rateProfileHandler(starCount, feedback);
    }, [rateProfileHandler])

    if (isLoading){
        return <Skeleton width={'100%'} height={120}/>
    }
    const rating = data?.[0];

    const isOwn = userData?.id === profileId;

    return (
        <RatingCard 
            className={classNames(cls.ArticleRating, {}, [className])}
            title={t('Оцените пользователя')}
            feedbackTitle={t('Оставьте свой отзыв')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onRateProfileAccept}
            onCancel={onRaterofileCancel}
            isOwn={isOwn}
        />
    );
});

export default ProfileRating;