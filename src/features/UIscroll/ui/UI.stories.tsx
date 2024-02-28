import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { UI } from './UI';

export default {
    title: 'shared/UI',
    component: UI,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof UI>;

const Template: ComponentStory<typeof UI> = (args) => <UI {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
