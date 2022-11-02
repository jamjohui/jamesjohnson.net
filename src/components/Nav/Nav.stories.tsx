import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Nav, NavProps } from './Nav';
import { NavTitle } from '../NavTitle';
import { Logo } from '../Logo';

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (
  args: NavProps
): JSX.Element => <Nav {...args} />;
Default.args = {
  children: <h1>Nav</h1>,
};
