import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';
import { ArticleView } from 'entities/Article/model/types/Article';

export default {
    title: 'shared/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    isLoading: true,
    articles: [],
    view: ArticleView.BIG
};
