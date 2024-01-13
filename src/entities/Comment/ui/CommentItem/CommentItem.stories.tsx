import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'V' },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'V' },
    },
    isLoading: true,
};