import { ComponentMeta, ComponentStory } from '@storybook/react';

import Projects from '../pages/projects';
import { Page } from '../components';

export default {
  title: 'Pages/Projects',
  component: Projects,
  decorators: [
    (Story) => (
      <Page route="/projects">
        <Story />
      </Page>
    ),
  ],
} as ComponentMeta<typeof Projects>;

export const Default: ComponentStory<typeof Projects> = (): JSX.Element => (
  <Projects />
);
Default.args = {};
