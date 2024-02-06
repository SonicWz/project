import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { {{ pascalCase }} } from './{{ pascalCase }}';

export default {
    title: 'shared/{{ pascalCase }}',
    component: {{ pascalCase }},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof {{ pascalCase }}>;

const Template: ComponentStory<typeof {{ pascalCase }}> = (args) => <{{ pascalCase }} {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
