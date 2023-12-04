import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatar {
    className?: string,
    src?: string,
    size?: number,
    alt?: string
}

export const Avatar = ({ className, src, size, alt }: IAvatar) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
        />
    )
};
