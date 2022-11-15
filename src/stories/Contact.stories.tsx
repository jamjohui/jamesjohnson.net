import { ComponentMeta, ComponentStory } from '@storybook/react';

import Contact from '../pages/contact';
import { Page } from '../components';

export default {
  title: 'Pages/Contact',
  component: Contact,
  decorators: [
    (Story) => (
      <Page route="/contact">
        <Story />
      </Page>
    ),
  ],
} as ComponentMeta<typeof Contact>;

export const Default: ComponentStory<typeof Contact> = (): JSX.Element => (
  <Contact />
);
Default.args = {};
