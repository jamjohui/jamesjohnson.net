import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (
  args: IconProps
): JSX.Element => <Icon {...args} />;
Default.args = {
  glyph: 'github',
};
