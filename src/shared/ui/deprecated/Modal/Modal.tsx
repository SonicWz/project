import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/deprecated/Portal/Portal';

import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;
/**
 * Компонент устарел. Используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};