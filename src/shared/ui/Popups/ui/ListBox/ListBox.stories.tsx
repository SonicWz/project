import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ListBox } from './ListBox';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [
        Story => <div style={{padding: 100}}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {content: '1234', value: '123'},
        {content: '12345', value: '1234'},
        {content: '12346', value: '1235'},
    ],
    value: '123',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        {content: '1234', value: '123'},
        {content: '12345', value: '1234'},
        {content: '12346', value: '1235'},
    ],
    direction: 'top left',
    value: '123',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        {content: '1234', value: '123'},
        {content: '12345', value: '1234'},
        {content: '12346', value: '1235'},
    ],
    direction: 'top right',
    value: '123',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        {content: '1234', value: '123'},
        {content: '12345', value: '1234'},
        {content: '12346', value: '1235'},
    ],
    direction: 'bottom right',
    value: '123',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        {content: '1234', value: '123'},
        {content: '12345', value: '1234'},
        {content: '12346', value: '1235'},
    ],
    direction: 'bottom left',
    value: '123',
};
