import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import { useCallback, useState } from 'react';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';

interface NotificationButtonProps {
    className?: string,
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [])
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [])

    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
        >
            <Icon Svg={Notification} inverted />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                    direction={'bottom left'}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
};
