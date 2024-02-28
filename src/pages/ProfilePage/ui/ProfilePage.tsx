import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
import { Text } from '@/shared/ui/Text/Text';
import { ProfileRating } from '@/features/ProfileRating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    const { id } = useParams<{ id: string }>();
    const userData = useSelector(getUserAuthData);

    if (!id) {
        return <Text text={t('Профиль не найден')} />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating 
                    profileId={id}
                />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
