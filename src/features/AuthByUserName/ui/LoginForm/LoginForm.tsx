import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button';
import { Input, InputType } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string,
}

export function LoginForm({ className }: ILoginForm) {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2>{t('Авторизация')}</h2>
            <Input
                className={cls.input}
                type={InputType.TEXT}
                placeholder={t('Логин')}
                value={value}
                onChange={onChange}
                autofocus
            />
            <Input 
                className={cls.input}
                type={InputType.TEXT}
                placeholder={t('Пароль')}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}