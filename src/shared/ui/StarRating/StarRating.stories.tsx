import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';
import { StarRating } from './StarRating';
import { action } from '@storybook/addon-actions';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Selected2 = Template.bind({});
Selected2.args = {
    onSelect: action('onSelect'),
    size: 30,
    selectedStars: 2,
};

export const Selected5 = Template.bind({});
Selected5.args = {
    onSelect: action('onSelect'),
    size: 30,
    selectedStars: 5,
};
