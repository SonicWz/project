import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import cls from './Popover.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string,
    children: ReactNode,
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Popover = memo((props: PopoverProps) => {
    const { t } = useTranslation();
    const {
        className, children, trigger, direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
