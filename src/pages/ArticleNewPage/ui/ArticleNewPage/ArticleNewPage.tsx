import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleNewPage.module.scss';

interface ArticleNewPageProps {
    className?: string,
}

const ArticleNewPage = memo(({ className }: ArticleNewPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleNewPage, {}, [className])}>
            ArticleNewPage
        </div>
    );
});

export default memo(ArticleNewPage);
