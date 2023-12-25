import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/Article';

interface ArticleImageComponentProps {
    className?: string,
    block: ArticleImageBlock
}

export const ArticleImageComponent = memo(({ className, block }: ArticleImageComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});
