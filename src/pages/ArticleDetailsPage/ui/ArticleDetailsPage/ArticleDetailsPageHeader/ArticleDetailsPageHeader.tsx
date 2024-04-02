import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getRouteArticles, getRouteArticlesDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string,
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const authData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEditArticle = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticlesDetails(article.id));
        }
    }, [navigate, article?.id]);

    return (
        <HStack justify="between" max className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEditArticle && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
