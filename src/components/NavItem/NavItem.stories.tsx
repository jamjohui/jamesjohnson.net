import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavItem, NavItemProps } from './NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

export const Default: ComponentStory<typeof NavItem> = (
  args: NavItemProps
): JSX.Element => <NavItem {...args} />;
Default.args = {
  children: 'Nav Item',
};

export const Selected: ComponentStory<typeof NavItem> = (
  args: NavItemProps
): JSX.Element => <NavItem {...args} />;
Selected.args = {
  children: 'Nav Item',
  selected: true,
};
