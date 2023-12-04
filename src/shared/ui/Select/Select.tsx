import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface ISelect {
    className?: string,
    label: string,
    options?: SelectOption[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean;
}

export const Select = memo((props: ISelect) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const optionsList = useMemo(() => options?.map((optionElem) => (
        <option
            className={cls.option}
            value={optionElem.value}
            key={optionElem.value}
        >
            {optionElem.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {

    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
