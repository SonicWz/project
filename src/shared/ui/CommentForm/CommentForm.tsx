import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './CommentForm.module.scss';

interface CommentFormProps {
    className?: string,
}

export const CommentForm = memo(({ className }: CommentFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentForm, {}, [className])}>
            
        </div>
    );
});
