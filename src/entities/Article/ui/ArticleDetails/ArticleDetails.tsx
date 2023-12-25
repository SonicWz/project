import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import ECalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/Article';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetails';
import { ArticleCodeComponent } from '../ArticleCodeComponent/ArticleCodeComponent';
import { ArticleImageComponent } from '../ArticleImageComponent/ArticleImageComponent';
import { ArticleTextComponent } from '../ArticleTextComponent/ArticleTextComponent';

interface ArticleDetailsProps {
    className?: string,
    id: string,
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleData);
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        };
    }, [dispatch, id]);

    let content;

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextComponent
                    className={cls.block}
                    block={block}
                    key={block.id}
                />
            );
        default: return null;
        }
    }, []);

    if (isLoading) {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton
                    className={cls.avatar}
                    borderRadius="50%"
                    height="200px"
                    width="200px"
                />
                <Skeleton
                    className={cls.title}
                    height="32px"
                    width="300px"
                />
                <Skeleton
                    className={cls.skeleton}
                    height="24px"
                    width="600px"
                />
                <Skeleton
                    className={cls.skeleton}
                    height="200px"
                    width="100%"
                />
                <Skeleton
                    className={cls.skeleton}
                    height="200px"
                    width="100%"
                />
            </div>
        );
    } else if (error) {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Ошибка')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    } else {
        content = (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text
                        text={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={ECalendarIcon} />
                    <Text
                        text={article?.createdAt}
                    />
                </div>
                {
                    article?.blocks.map((block) => renderBlock(block))
                }
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
        </DynamicModuleLoader>
    );
});
