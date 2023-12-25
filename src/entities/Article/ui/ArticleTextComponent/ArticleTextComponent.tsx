import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleTextComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextComponentProps {
    className?: string,
    block: ArticleTextBlock,
}

export const ArticleTextComponent = memo(({ className, block }: ArticleTextComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                />
            )}
            {block.paragraphs.map((blockElement, index) => (
                <Text
                    key={blockElement}
                    text={blockElement}
                    className={cls.paragraph}
                />
            ))}

        </div>
    );
});
