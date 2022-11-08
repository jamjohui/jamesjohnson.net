import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Nav, NavProps } from './Nav';

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
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#home">Contact</a>
      </li>
    </>
  ),
  title: 'Default',
  onClose: undefined,
};

export const WithCloseButton: ComponentStory<typeof Nav> = (
  args: NavProps
): JSX.Element => <Nav {...args} />;
WithCloseButton.args = {
  children: (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#home">Contact</a>
      </li>
    </>
  ),
  title: 'With Close Button',
};
