import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (
  args: TextProps
): JSX.Element => <Text {...args} />;
Default.args = {
  children: 'The quick brown fox jumps over the lazy dog',
};
