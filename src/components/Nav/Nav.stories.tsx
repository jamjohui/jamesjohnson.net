import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Nav, NavProps } from './Nav';
import { NavItem } from '../NavItem';

export default {
  title: 'Components/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Default: ComponentStory<typeof Nav> = (
  args: NavProps
): JSX.Element => <Nav {...args} />;
Default.args = {
  children: (
    <>
      <NavItem selected>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Contact Us</NavItem>
    </>
  ),
  title: 'Main Menu',
};
// Default.parameters = {
//   a11y: {
//     config: {
//       // Disabled because list items are provided by children
//       rules: [{ id: 'list', enabled: false }],
//     },
//   },
// };
