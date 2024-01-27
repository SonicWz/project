import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode, useState } from 'react';
import cls from './ListBox.module.scss';
import { Listbox as HListBox } from '@headlessui/react';
import { Button, ButtonTheme } from '../Button/Button';
import { Text } from '../Text/Text';
import { HStack } from '../Stack';

type DropdownDirection = 'top' | 'bottom';

export interface ListBoxItem {
    value: string,
    content: ReactNode,
    disabled?: boolean
}

interface ListBoxProps {
    className?: string,
    items?: ListBoxItem[],
    value?: string,
    defaultValue?: string,
    readonly?: boolean,
    onChange: (value: string) => void,
    direction?: DropdownDirection,
    label?: string,
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
    const { t } = useTranslation();
    const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={'4'}>
            {label && <span className={cls.label}>{label + '>'}</span>}
            <HListBox
                as={'div'}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button 
                        theme={ButtonTheme.OUTLINE}
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li 
                                    className={classNames(cls.item, {[cls.active]: active, [cls.disabled]: item.disabled}, [className])}
                                >
                                    {selected && '+'}
                                    { item.content }
                                </li>
                            )}
                            
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});
