import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UI.module.scss';

interface UIProps {
    className?: string,
}

export const UI = ({ className }: UIProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.UI, {}, [className])}>
            
        </div>
    );
};
