import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Comment.module.scss';

interface CommentProps {
    className?: string,
}

export const Comment = ({ className }: CommentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            
        </div>
    );
};
