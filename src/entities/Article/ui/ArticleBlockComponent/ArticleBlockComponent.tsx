import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleBlockComponent.module.scss';

interface ArticleBlockComponentProps {
    className?: string,
}

export const ArticleBlockComponent = ({ className }: ArticleBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleBlockComponent, {}, [className])}>
            
        </div>
    );
};
