import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';
import { ArticlePageGreeting } from './ArticlePageGreeting';

export default {
    title: 'shared/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticlePageGreeting>;

const Template: ComponentStory<typeof ArticlePageGreeting> = (args) => <ArticlePageGreeting {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
