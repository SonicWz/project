import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';


export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Size200 = Template.bind({});
Size200.args = {
    src: 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg',
    size: 200,
    alt: 'Аватар',
};

export const Size300 = Template.bind({});
Size300.args = {
    src: 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg',
    size: 300,
    alt: 'Аватар',
};

export const Default = Template.bind({});
Default.args = {
    src: 'https://shapka-youtube.ru/wp-content/uploads/2020/08/man-silhouette.jpg',
    alt: 'Аватар',
};