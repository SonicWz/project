import { Сurrency, Сountry } from 'shared/const/common';

export interface Profile {
    'first': string,
    'lastname': string,
    'age': number,
    'currency': Сurrency,
    'country': Сountry,
    'city': string,
    'username': string,
    'avatar': string
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}