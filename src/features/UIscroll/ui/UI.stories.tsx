import { ComponentMeta, ComponentStory } from '@storybook/react';
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
Primary.args = {};
