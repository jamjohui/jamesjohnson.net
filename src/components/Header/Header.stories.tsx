import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (
  args: HeaderProps
): JSX.Element => <Header {...args} />;
Default.args = {
  children: 'Hello Header!',
};
