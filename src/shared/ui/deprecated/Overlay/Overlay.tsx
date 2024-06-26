import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}
/**
 * Компонент устарел. Используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
    const { t } = useTranslation();
    const { className, onClick } = props;

    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            onClick={onClick}
        />
    );
});
