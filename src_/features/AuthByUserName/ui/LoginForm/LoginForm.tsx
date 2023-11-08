import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input, InputType } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string,
}

export const LoginForm = memo(({ className }: ILoginForm) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const { username, password, isLoading, error } = useSelector(getLoginState);
    
    const onChangeUsername = useCallback((value: string) => {
        setValue(value);
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        setValue(value);
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Авторизация')} />
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                className={cls.input}
                type={InputType.TEXT}
                placeholder={t('Логин')}
                value={username}
                onChange={onChangeUsername}
                autofocus
            />
            <Input
                className={cls.input}
                type={InputType.TEXT}
                placeholder={t('Пароль')}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
