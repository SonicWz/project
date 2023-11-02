import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss';

export enum InputType {
    TEXT = 'text',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
}
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInput extends HTMLInputProps {
    className?: string,
    autofocus?: boolean,
    type: InputType,
    value?: string,
    onChange?: (value: string) => void
}

export const Input = memo((props: IInput) => {
    const {
        className,
        type = 'text',
        placeholder = '',
        value,
        onChange,
        autofocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                className={cls.input}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                type={type}
                ref={ref}
                autoFocus={isFocused}
                {...otherProps}
            />
        </div>
    )
})