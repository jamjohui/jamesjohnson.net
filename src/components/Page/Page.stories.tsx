import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Page, PageProps } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

export const Default: ComponentStory<typeof Page> = (
  args: PageProps
): JSX.Element => <Page {...args} />;
Default.args = {
  children: <h1>Page Template</h1>,
  route: '/',
};
