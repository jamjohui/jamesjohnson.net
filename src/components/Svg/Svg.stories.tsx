import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Svg, SvgProps } from './Svg';

export default {
  title: 'Components/Svg',
  component: Svg,
} as ComponentMeta<typeof Svg>;

export const Default: ComponentStory<typeof Svg> = (
  args: SvgProps
): JSX.Element => <Svg {...args} />;
Default.args = {
  path: 'M61.62,0V36A25.62,25.62,0,1,1,36,10.38H56.19V0H36A36,36,0,1,0,72,36V0Z',
  viewbox: '0 0 72 72',
};
