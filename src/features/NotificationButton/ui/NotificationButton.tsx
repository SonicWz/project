import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import Notification from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string,
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={Notification} inverted />
                </Button>
            }
            direction={'bottom left'}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
};
