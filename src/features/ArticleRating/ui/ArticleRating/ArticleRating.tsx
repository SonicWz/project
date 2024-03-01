import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleRating.module.scss';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string,
    articleId: string,
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { t } = useTranslation();
    const { className, articleId } = props;
    const userData = useSelector(getUserAuthData);

    const { data, isError, isLoading } = useGetArticleRating({
        userId: userData?.id ?? '',
        articleId,
    });
    const [rateArticleMutation, {}] = useRateArticle();

    const rateArticleHandler = useCallback((starCount: number, feedback?: string) => {
        try {
            const args = {
                userId: userData?.id ?? '',
                articleId,
                rate: starCount,
                feedback,
            };
            rateArticleMutation(args);
        } catch (e) {
            console.log(e);
        }
    }, [userData?.id, articleId, rateArticleMutation]);

    const onRateArticleAccept = useCallback((starCount: number, feedback?: string) => {
        rateArticleHandler(starCount, feedback);
    }, [rateArticleHandler]);

    const onRateArticleCancel = useCallback((starCount: number) => {
        rateArticleHandler(starCount);
    }, [rateArticleHandler]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            className={classNames(cls.ArticleRating, {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onRateArticleAccept}
            onCancel={onRateArticleCancel}
        />
    );
});

export default ArticleRating;
