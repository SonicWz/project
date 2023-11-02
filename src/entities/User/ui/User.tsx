import { classNames } from 'shared/lib/classNames/classNames'
import styles from './User.module.scss';

interface IUser {
    className?: string
}

export function User({ className }: IUser) {
    return (
        <div className={classNames(styles.User, {}, [className])}>

        </div>
    )
}