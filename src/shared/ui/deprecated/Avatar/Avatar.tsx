import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserDefaultIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border={'50%'} />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserDefaultIcon}
        ></Icon>
    );

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
