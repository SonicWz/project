import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface NotificationItemProps {
    className?: string,
    notification: Notification,
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { t } = useTranslation();
    const { className, notification } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text theme={TextTheme.PRIMARY} title={notification.title} text={notification.description} />
        </Card>
    );

    if (notification.href){
        return (
            <a className={cls.link} href={notification.href} target="_blank">
                {content}
            </a>
        )
    }

    return content;
});
