import { ComponentMeta, ComponentStory } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
    <ForbiddenPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
