import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableProfileCardHeader.module.scss';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { getProfileData } from '@/features/EditableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '@/features/EditableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '@/features/EditableProfileCard/model/slice/profileSlice';
import { updateProfileData } from '@/features/EditableProfileCard/model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

        const { t } = useTranslation('profile');
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <HStack
                justify="between"
                max
                className={classNames('', {}, [className])}
            >
                <Text title={t('Профиль')} />
                {canEdit && (
                    <div className={cls.btnsWrapper}>
                        {readonly ? (
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    },
);
