import { Page } from '@/widgets/Page/Page';
import { useTranslation } from 'react-i18next';


const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
