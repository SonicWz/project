import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleNewPage from './ArticleNewPage';

export default {
    title: 'shared/ArticleNewPage',
    component: ArticleNewPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticleNewPage>;

const Template: ComponentStory<typeof ArticleNewPage> = (args) => (
    <ArticleNewPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
