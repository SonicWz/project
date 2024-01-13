import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, HTMLAttributes } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    children: ReactNode,
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
