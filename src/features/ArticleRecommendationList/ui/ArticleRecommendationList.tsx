import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationList } from '../api/ArticleRecommendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = (
    props: ArticleRecommendationListProps,
) => {
    const { t } = useTranslation();
    const { className } = props;
    const {
        data: articles,
        isError,
        isLoading,
    } = useArticleRecommendationList(3);
    if (isError || isLoading || !articles) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Рекомендации')} />
            <ArticleList
                articles={articles}
                // eslint-disable-next-line i18next/no-literal-string
                target="_blank"
            />
        </VStack>
    );
};
