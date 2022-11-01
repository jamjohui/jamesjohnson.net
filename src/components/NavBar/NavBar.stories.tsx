import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavBar, NavBarProps } from './NavBar';
import { NavTitle } from '../NavTitle';
import { Logo } from '../Logo';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Default: ComponentStory<typeof NavBar> = (
  args: NavBarProps
): JSX.Element => <NavBar {...args} />;
Default.args = {
  children: (
    <>
      <Logo />
      <NavTitle>James Johnson</NavTitle>
    </>
  ),
};
