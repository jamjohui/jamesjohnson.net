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
Default.parameters = {
  a11y: {
    config: {
      // Disabled because list is provided by parent container
      rules: [{ id: 'listitem', enabled: false }],
    },
  },
};

export const Selected: ComponentStory<typeof NavItem> = (
  args: NavItemProps
): JSX.Element => <NavItem {...args} />;
Selected.args = {
  children: 'Nav Item',
  selected: true,
};
Selected.parameters = {
  a11y: {
    config: {
      // Disabled because list is provided by parent container
      rules: [{ id: 'listitem', enabled: false }],
    },
  },
};
