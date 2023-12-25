import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './AtricleDetailsPage.module.scss';

interface AtricleDetailsPageProps {
    className?: string,
}

const AtricleDetailsPage = ({ className }: AtricleDetailsPageProps) => {
    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.AtricleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.AtricleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(AtricleDetailsPage);
