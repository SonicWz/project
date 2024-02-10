import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AvatarDropdown.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
    className?: string,
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData){
        return null;
    }

    return (
        <Dropdown
            className={classNames(cls.dropdown, {}, [className])}
            items={
                [
                    ...(isAdminPanelAvailable ? [{
                        content: t('Админка'),
                        href: RoutePath.admin_panel,
                    }] : []), // if isAdminPanelAvailable = false => empty array
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData?.id,
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogout,
                    },
                ]
            }
            trigger={
                <Avatar src={authData.avatar} size={30} />
            }
            direction='bottom left'
        />
    );
};
