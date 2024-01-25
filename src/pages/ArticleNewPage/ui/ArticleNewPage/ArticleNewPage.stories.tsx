import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleNewPage from './ArticleNewPage';

export default {
    title: 'shared/ArticleNewPage',
    component: ArticleNewPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleNewPage>;

const Template: ComponentStory<typeof ArticleNewPage> = (args) => <ArticleNewPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
