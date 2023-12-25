import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/Article';

interface ArticleCodeComponentProps {
    className?: string,
    block: ArticleCodeBlock
}

export const ArticleCodeComponent = memo(({ className, block }: ArticleCodeComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
