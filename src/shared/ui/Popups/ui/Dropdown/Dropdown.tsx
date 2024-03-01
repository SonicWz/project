import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    href?: string;
    content: ReactNode;
    disabled?: boolean;
    onClick?: () => void
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.dropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {
                    items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                type="button"
                                className={classNames(cls.item, { [popupCls.active]: active }, [])}
                                onClick={item.onClick}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item key={`dropdownkey + ${index}`} as={AppLink} to={item.href} disabled={item.disabled}>
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            <Menu.Item key={`dropdownkey + ${index}`} as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })
                }

            </Menu.Items>
        </Menu>
    );
}
