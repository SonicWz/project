import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getArticleRatingArg {
    userId: string;
    articleId: string;
}

interface rateArticleRatingArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], getArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, rateArticleRatingArg>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
    overrideExisting: false,
});

export const useGetArticleRating = articleRatingsApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingsApi.useRateArticleMutation;
