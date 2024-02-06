import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './{{ pascalCase }}.module.scss';

interface {{ pascalCase }}Props {
    className?: string,
}

export const {{ pascalCase }} = memo((props: {{ pascalCase }}Props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.{{ pascalCase }}, {}, [className])}>
            
        </div>
    );
});
