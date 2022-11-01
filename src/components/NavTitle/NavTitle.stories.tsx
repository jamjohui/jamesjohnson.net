import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavTitle, NavTitleProps } from './NavTitle';

export default {
  title: 'Components/NavTitle',
  component: NavTitle,
} as ComponentMeta<typeof NavTitle>;

export const Default: ComponentStory<typeof NavTitle> = (
  args: NavTitleProps
): JSX.Element => <NavTitle {...args} />;
Default.args = {
  children: 'Title of Website',
};
