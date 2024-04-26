import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}
/**
 * Компонент устарел. Используем новые компоненты из папки redesigned
 * @deprecated
 */
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
