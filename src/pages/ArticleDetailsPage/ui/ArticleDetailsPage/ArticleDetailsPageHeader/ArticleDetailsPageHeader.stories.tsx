import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};