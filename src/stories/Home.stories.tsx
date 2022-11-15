import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from '../pages/index';
import { Page } from '../components';

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <Page route="/">
        <Story />
      </Page>
    ),
  ],
} as ComponentMeta<typeof Home>;

export const Default: ComponentStory<typeof Home> = (): JSX.Element => <Home />;
Default.args = {};
