import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (): JSX.Element => (
  <Header />
);

Default.play = async ({ canvasElement }) => {
  window.innerWidth = 320;
  const canvas = within(canvasElement);
  const el = canvas.getByLabelText('Open Menu') as HTMLButtonElement;
  await userEvent.click(el);
  const nav = canvas.getByRole('navigation') as HTMLElement;
  await waitFor(() => expect(nav).toHaveStyle({ right: '0px' }));
  const closeBtn = canvas.getByLabelText('Close Menu') as HTMLButtonElement;
  await userEvent.click(closeBtn);
  await waitFor(() => expect(nav).toHaveStyle({ right: '-100%' }));
};
