import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (
  args: SwitchProps
): JSX.Element => <Switch {...args} />;
Default.args = {
  label: 'toggle switch',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const el = canvas.getByRole('checkbox') as HTMLInputElement;
  await userEvent.click(el);
  await expect(el.checked).toBeTruthy();
};
