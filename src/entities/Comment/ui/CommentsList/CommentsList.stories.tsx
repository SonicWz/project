import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentsList } from './CommentsList';

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            user: { id: '1', username: 'V' },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: { id: '2', username: 'D' },
        },
    ],
};
Normal.decorators = [
    StoreDecorator({}),
];

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [
        {
            id: '1',
            text: 'some comment',
            user: { id: '1', username: 'V' },
        },
        {
            id: '2',
            text: 'some comment 2',
            user: { id: '2', username: 'D' },
        },
    ],
    isLoading: true,
};
isLoading.decorators = [
    StoreDecorator({}),
];