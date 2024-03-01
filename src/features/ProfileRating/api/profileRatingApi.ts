import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getProfileRatingArg {
    userId: string,
    profileId: string,
}

interface rateProfileRatingArg {
    userId: string,
    profileId: string,
    rate: number,
    feedback?: string,
}

const profileRatingsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], getProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, rateProfileRatingArg>({
            query: (args) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
    overrideExisting: false,
});

export const useGetProfileRating = profileRatingsApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingsApi.useRateProfileMutation;
