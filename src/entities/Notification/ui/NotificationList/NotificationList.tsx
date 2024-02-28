import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface NotificationListProps {
    className?: string,
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { data: notifications, isError, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading){
        return (
            <VStack gap={'16'} max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width={'100%'} height={80} border={'8px'} />
                <Skeleton width={'100%'} height={80} border={'8px'} />
                <Skeleton width={'100%'} height={80} border={'8px'} />
            </VStack>
        )
    }

    if (isError){
        return (
            <Text theme={TextTheme.ERROR} text={'Ошибка'} />
        )
    }

    return (
        <VStack gap={'16'} max className={classNames(cls.NotificationList, {}, [className])}>
            {
                notifications?.map(notification => (
                    <NotificationItem notification={notification}/>
                ))
            }
        </VStack>
    );
});
