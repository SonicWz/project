import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page/Page';

interface ForbiddenPageProps {
    className?: string,
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('Нет доступа')}
        </Page>
    );
};

export default ForbiddenPage;
