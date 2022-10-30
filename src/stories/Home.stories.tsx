import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Home from '../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Default: ComponentStory<typeof Home> = (): JSX.Element => <Home />;
Default.args = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const currentTheme = canvas.getByRole('heading')?.innerHTML;
  const el = canvas.getByRole('checkbox') as HTMLInputElement;
  await userEvent.click(el);
  const theme = canvas.getByRole('heading');
  await expect(theme).toHaveTextContent(
    currentTheme === 'Light Theme' ? 'Dark Them' : 'Light Theme'
  );
};
