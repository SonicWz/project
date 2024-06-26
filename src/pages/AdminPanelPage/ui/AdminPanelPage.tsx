import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Page
            data-testid={'AdminPanelPage'}
            className={classNames(cls.AdminPanelPage, {}, [className])}
        >
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
