import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from "@/entities/Article/model/consts/ArticleConsts";
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string,
    order: SortOrder,
    sort: ArticleSortField,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void,
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();
    const {
        className,
        order,
        sort,
        onChangeOrder,
        onChangeSort,
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам'),
        },
    ], [t]);

    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder);
    // }, [onChangeOrder]);

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as ArticleSortField);
    // }, [onChangeSort]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('По')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
