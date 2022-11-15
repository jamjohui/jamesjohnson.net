import { ComponentMeta, ComponentStory } from '@storybook/react';

import About from '../pages/about';
import { Page } from '../components';

export default {
  title: 'Pages/About',
  component: About,
  decorators: [
    (Story) => (
      <Page route="/about">
        <Story />
      </Page>
    ),
  ],
} as ComponentMeta<typeof About>;

export const Default: ComponentStory<typeof About> = (): JSX.Element => (
  <About />
);
Default.args = {};
