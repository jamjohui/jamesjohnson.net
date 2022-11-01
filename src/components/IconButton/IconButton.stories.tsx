import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from '../Icon';
import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = (
  args: IconButtonProps
): JSX.Element => <IconButton {...args} />;

Default.args = {
  children: <Icon />,
  label: 'icon button',
};
