import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Popover.module.scss';
import { Popover as HPopover } from '@headlessui/react'
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string,
    children: ReactNode,
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Popover = memo((props: PopoverProps) => {
    const { t } = useTranslation();
    const { className, children, trigger, direction = 'bottom right' } = props;
    const menuClasses = [mapDirectionClass[direction]];


    return (
        <div className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover className="relative">
                <HPopover.Button className={popupCls.trigger}>
                    {trigger}
                </HPopover.Button>
                <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                    {children}
                </HPopover.Panel>
            </HPopover>
        </div>
    );
});
