import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'shared/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => (
    <ArticlePageFilters {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
